import { NextResponse } from 'next/server';

// Vercel Edge Config endpoint
export async function GET() {
    try {
        const edgeConfigId = process.env.EDGE_CONFIG_ID;
        const edgeConfigToken = process.env.EDGE_CONFIG_TOKEN;

        if (!edgeConfigId || !edgeConfigToken) {
            // Return null to indicate Edge Config not set up - will use local fallback
            return NextResponse.json({ data: null });
        }

        const response = await fetch(
            `https://edge-config.vercel.com/${edgeConfigId}/item/tieredPricing`,
            {
                headers: {
                    Authorization: `Bearer ${edgeConfigToken}`,
                },
                cache: 'no-store', // Always fetch fresh data
            }
        );

        if (!response.ok) {
            console.error('Edge Config fetch failed:', response.status);
            return NextResponse.json({ data: null });
        }

        const data = await response.json();
        return NextResponse.json({ data });
    } catch (error) {
        console.error('Error fetching pricing config:', error);
        return NextResponse.json({ data: null });
    }
}
