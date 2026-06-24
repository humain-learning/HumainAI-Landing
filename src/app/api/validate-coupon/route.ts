import { getCRMCredentials } from '@/app/lib/crmClient';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const urlParams = new URL(req.url).searchParams;
    const couponCode = urlParams.get('couponCode');
    const courseId = urlParams.get('courseId');

    if (!couponCode || !courseId) {
      return NextResponse.json(
        { message: 'couponCode and courseId are required' },
        { status: 400 }
      );
    }

    const { baseUrl, authHeader } = getCRMCredentials();
    const url =
      `${baseUrl}/api/method/humain_learning.humain_learning.api.web.validate_coupon` +
      `?coupon_code=${encodeURIComponent(couponCode)}` +
      `&course_id=${encodeURIComponent(courseId)}`;

    const frappeRes = await fetch(url, {
      method: 'GET',
      headers: { Authorization: authHeader },
      cache: 'no-store',
    });

    const contentType = frappeRes.headers.get('content-type') || '';
    const isJsonResponse = contentType.includes('application/json');

    if (!isJsonResponse) {
      return NextResponse.json(
        { message: 'An unknown error occured' },
        { status: 500 }
      );
    }

    const data = await frappeRes.json();

    if (!frappeRes.ok) {
      return NextResponse.json(
        { message: data?.message ?? 'Invalid coupon' },
        { status: frappeRes.status }
      );
    }

    return NextResponse.json(data?.message ?? data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Server error' },
      { status: 500 }
    );
  }
}