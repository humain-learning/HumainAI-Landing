import type { Metadata } from 'next';
import { Tomorrow, Open_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { Toaster } from 'react-hot-toast';

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
  description:
    'Empowering students aged 13+ to harness AI capabilities while preserving human creativity, critical thinking, and emotional intelligence',
  icons: {
    icon: '/vercel.svg',
  },
  openGraph: {
    title: 'Humain AI | Empowering Future Innovators', 
    description: 'Empowering students aged 13+ to harness AI capabilities while preserving human creativity...', 
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1326340862261967');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1326340862261967&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body
        className={`${tomorrowSans.variable} ${openSansDisplay.variable} antialiased`}
      > 
        <div className="relative top-0 w-full z-50"> 
            <Header />
        </div>
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}