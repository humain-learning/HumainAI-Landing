import type { Metadata } from 'next';
import { Tomorrow, Open_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/next"
import { organizationSchema, websiteSchema } from '@/lib/schema-bundle';
import dynamic from 'next/dynamic';

const FacebookPixel = dynamic(import('components/meta/FacebookPixel'));

const tomorrowSans = Tomorrow({
  variable: '--font-tomorrow',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const openSansDisplay = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Humain Learning — AI Literacy for Indian Students and Teachers',
  metadataBase: new URL('https://www.humainlearning.ai'),
  alternates: {
    canonical: './',
  },
  description:
    'Humain Learning runs a 16-hour AI literacy course for Indian students (age 13+) and teachers — live small-batch sessions, six modules, IIT Kharagpur certification.',
  icons: {
    icon: '/assets/logo/brain-logo.png',
  },
  openGraph: {
    title: 'Humain Learning — AI Literacy for Indian Students and Teachers',
    description:
      'Humain Learning runs a 16-hour AI literacy course for Indian students (age 13+) and teachers — live small-batch sessions, six modules, IIT Kharagpur certification.',
    url: 'https://www.humainlearning.ai/',
    siteName: 'Humain Learning',
    images: [
      {
        url: '/assets/logo/brain-logo.png',
        width: 1200,
        height: 630,
        alt: 'Humain Learning logo',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

      </head>
      <body
        className={`${tomorrowSans.variable} ${openSansDisplay.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TMLZCXPP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
		<FacebookPixel />
        <Toaster />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
