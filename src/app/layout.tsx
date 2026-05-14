import type { Metadata } from 'next';
import { Tomorrow, Open_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/next"
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
  title: 'Humain AI | Home',
  metadataBase: new URL('https://www.humainlearning.ai'),
  alternates: {
	canonical: './',
  },
  description: 
    'Empowering educators and students to leverage AI responsibly and effectively while strengthening creativity, critical thinking, emotional intelligence, and human connection.',
  icons: {
    icon: '/vercel.svg',
  },
  openGraph: {
    title: 'Humain AI | Human Centered AI Literacy for Educators and Students', 
    description: 'Empowering educators and students to leverage AI responsibly and effectively while strengthening creativity, critical thinking, emotional intelligence, and human connection.', 
    url: 'https://humainlearning.ai', 
    siteName: 'Humain AI',
    images: [
      {
        url: '/assets/logo/brain-logo.png',
        width: 1200, 
        height: 630, 
        alt: 'Humain AI Logo',
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
      <head />
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

        <Toaster />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
