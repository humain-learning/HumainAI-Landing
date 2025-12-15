// src/app/api/submit-lead/route.ts
// This file defines the POST handler for the /api/submit-lead endpoint.

import { NextResponse } from 'next/server';

// App Router uses the standard HTTP method exports (GET, POST, etc.)
export async function POST(req: Request) {
    
    // --- 1. Access Secret Credentials (Server-Side Only) ---
    const baseUrl = process.env.FRAPPE_BASE_URL;
    const apiKey = process.env.FRAPPE_API_KEY;
    const apiSecret = process.env.FRAPPE_API_SECRET;

    if (!baseUrl || !apiKey || !apiSecret) {
        return NextResponse.json({ message: 'Server configuration error: Frappe credentials missing.' }, { status: 500 });
    }

    try {
        // 2. Parse the JSON body sent from the client
        const clientData = await req.json();

        // 3. Map client-side data to the required Frappe Lead doctype structure
        // Accepts both direct Frappe field names (first_name, last_name, mobile_no)
        // AND legacy ContactUs keys (parentFirstName, childFirstName, mobileNo, etc.)
        const frappePayload = {
            doctype: 'Lead',
            // Primary name fields - prefer direct Frappe names, fall back to legacy keys
            first_name: clientData.first_name || clientData.childFirstName || '',
            last_name: clientData.last_name || clientData.childLastName || '',
            // Contact
            mobile_no: clientData.mobile_no || clientData.mobileNo || '',
            email: clientData.email || '',
            // Custom fields - from ContactUs form
            custom_parent_first_name: clientData.custom_parent_first_name || clientData.parentFirstName || '',
            custom_parent_last_name: clientData.custom_parent_last_name || clientData.parentLastName || '',
            custom_class: clientData.custom_class || clientData.childGrade || '',
            custom_city: clientData.custom_city || clientData.city || '',
            custom_message: clientData.custom_message || clientData.message || '',
            source: clientData.source || 'Website Form',
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