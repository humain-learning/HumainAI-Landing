// src/app/api/fetch-discount/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const template_id = req.nextUrl.searchParams.get('template_id');

    if (!template_id) {
        return NextResponse.json(
            { error: 'template_id is required' },
            { status: 400 }
        );
    }

    const baseUrl = process.env.ADMIN_BASE_URL;
    const key = process.env.ADMIN_API_KEY;
    const secret = process.env.ADMIN_API_SECRET;

    const params = new URLSearchParams({
        template_id: template_id,
    });

    const url = `${baseUrl}/method/admin.admin.api.web.current_active_discount?${params}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `token ${key}:${secret}`,
            },
        });

        const data = await response.json();

        return NextResponse.json(data, {
            status: response.status,
        });

    } catch (error) {
        return NextResponse.json(
            { error: 'fetch failed' },
            { status: 500 }
        );
    }
}