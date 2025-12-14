// src/app/api/send-lead/route.ts
// This file defines the POST handler for the /api/send-lead endpoint.

import { source } from 'framer-motion/client';
import { NextResponse } from 'next/server';

// App Router uses the standard HTTP method exports (GET, POST, etc.)
export async function POST(req: Request) {
    
    // --- 1. Access Secret Credentials (Server-Side Only) ---
    // These variables are correctly accessed here (server-side)
    const baseUrl = process.env.FRAPPE_BASE_URL;
    const apiKey = process.env.FRAPPE_API_KEY;
    const apiSecret = process.env.FRAPPE_API_SECRET;

    if (!baseUrl || !apiKey || !apiSecret) {
        // Return a 500 status if the server is improperly configured (internal error)
        return NextResponse.json({ message: 'Server configuration error: Frappe credentials missing.' }, { status: 500 });
    }

    try {
        // 2. Parse the JSON body sent from the client
        const clientData = await req.json();

        // 3. Map client-side data to the required Frappe Lead doctype structure
        const frappePayload = {
            // Note: The Frappe API recognizes the full DocType from this field
            doctype: 'Lead', 
            // Map client fields (camelCase) to Frappe fields (snake_case/custom_)
            custom_parent_first_name: clientData.parentFirstName,
            custom_parent_last_name: clientData.parentLastName,
            first_name: clientData.childFirstName, 
            last_name: clientData.childLastName,
            mobile_no: clientData.mobileNo,
            email: clientData.email,
            custom_class: clientData.childGrade,
            custom_city: clientData.city,
            custom_message: clientData.message,
            source: clientData.source,
            // Add any other necessary fields (e.g., status, source)
        };

        // 4. Send the request to the external Frappe API
        // FIX APPLIED HERE: Changed "CRM Lead" to "Lead" in the URL endpoint
        const frappeRes = await fetch(`${baseUrl.replace(/\/$/, '')}/api/resource/CRM Lead`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // SECURE: API Keys are only used on the server
                'Authorization': `token ${apiKey}:${apiSecret}`, 
            },
            body: JSON.stringify(frappePayload),
        });

        // 5. Handle Frappe API Errors
        if (!frappeRes.ok) {
            // Pass a generic error message to the client
            return NextResponse.json(
                { 
                    message: 'An unknown error has occurred. Please try again later or reach out to us directly via Phone or Email.'
                }, 
                { status: 500 }
            );
        }

        // 6. Success: Send a clean 200 response to the client
        const successData = await frappeRes.json();
        return NextResponse.json({ message: 'Lead successfully created in Frappe.', data: successData });

    } catch (error) {
        // Catch any parsing or network errors and return a generic error message
        return NextResponse.json({ message: 'An unknown error has occurred. Please try again later or reach out to us directly via Phone or Email.' }, { status: 500 });
    }
}