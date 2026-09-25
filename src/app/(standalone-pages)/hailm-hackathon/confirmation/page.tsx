import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import Confirmation from '@/components/hailm-hackathon/Confirmation';
import { HAILM_TOKEN_COOKIE, isHailmToken } from '@/app/lib/hailmHackathon';

export const metadata: Metadata = {
	// Neutral on purpose: this page also shows the pending and not-found states.
	title: 'Your HAILM Hackathon registration | Humain Learning',
	robots: { index: false, follow: false },
};

type PageProps = { searchParams: Promise<{ token?: string }> };

// Set this page as the Razorpay Payment Page's "Redirect to your website" URL. Razorpay sends
// everyone to the same URL, so the registration comes from the cookie set when they registered.
export default async function Page({ searchParams }: PageProps) {
	const { token: fromQuery = '' } = await searchParams;
	const fromCookie = (await cookies()).get(HAILM_TOKEN_COOKIE)?.value ?? '';
	const token = [fromQuery, fromCookie].find(isHailmToken) ?? '';
	return <Confirmation token={token} />;
}
