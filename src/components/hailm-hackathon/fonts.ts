import { Fraunces, Inter_Tight } from 'next/font/google';

// The HAILM AI Olympiad page (ailiteracymission.org/ai-olympiad) pairs Fraunces with Inter Tight.
export const fraunces = Fraunces({
	subsets: ['latin'],
	variable: '--hh-serif',
	axes: ['opsz'],
	style: ['normal', 'italic'],
	display: 'swap',
});

export const interTight = Inter_Tight({
	subsets: ['latin'],
	variable: '--hh-sans',
	weight: ['400', '500', '600', '700'],
	display: 'swap',
});
