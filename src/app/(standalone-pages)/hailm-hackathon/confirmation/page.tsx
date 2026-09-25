import type { Metadata } from 'next';
import Confirmation from '@/components/hailm-hackathon/Confirmation';
import { fraunces, interTight } from '@/components/hailm-hackathon/fonts';
import s from '@/components/hailm-hackathon/hailm.module.css';

export const metadata: Metadata = {
	// Neutral on purpose: this page also shows the pending, failed and not-found states.
	title: 'Your HAILM Hackathon registration | Humain Learning',
	robots: { index: false, follow: false },
};

type PageProps = { searchParams: Promise<{ token?: string }> };

export default async function Page({ searchParams }: PageProps) {
	const { token = '' } = await searchParams;
	return (
		<main className={`${fraunces.variable} ${interTight.variable} ${s.page}`}>
			<Confirmation token={token} />
		</main>
	);
}
