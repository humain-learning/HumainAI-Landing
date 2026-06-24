import type { Metadata } from 'next';
import { Tomorrow, Open_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/next"
import { organizationSchema, websiteSchema } from '@/lib/schema-bundle';
import FacebookPixel from '@/components/meta/FacebookPixel';
import { GoogleTagManager } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  title: 'Humain Learning: AI Literacy Course for Indian Students',
  metadataBase: new URL('https://www.humainlearning.ai'),
  alternates: {
    canonical: './',
  },
  description:
    'AI literacy course for Class 8-12 students and teachers in India. Live small-batch cohorts, six modules, with E-Cell at IIT Kharagpur.',
  icons: {
    icon: '/assets/logo/brain-logo.png',
  },
  openGraph: {
    title: 'Humain Learning: AI Literacy Course for Indian Students',
    description:
      'Live 16-hour AI literacy course for Indian students and teachers. Six modules, small cohorts, in collaboration with E-Cell at IIT Kharagpur.',
    url: 'https://www.humainlearning.ai/',
    siteName: 'Humain Learning',
    locale: 'en_IN',
    images: [
      {
        url: '/og/homepage-1200x630.webp',
        width: 1200,
        height: 630,
        alt: 'Humain Learning: AI literacy course for Class 8-12 students and teachers in India.',
        type: 'image/webp',
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
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
		<FacebookPixel />
		<GoogleTagManager gtmId='GTM-TMLZCXPP' />
      </head>
      <body
        className={`${tomorrowSans.variable} ${openSansDisplay.variable} antialiased`}
      >

        <Toaster />
        {children}
        <Analytics />
		<SpeedInsights />
      </body>
    </html>
  );
}
