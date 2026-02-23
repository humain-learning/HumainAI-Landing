import type { Metadata } from 'next';
import { Tomorrow, Open_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from 'ui/Header';
import Footer from 'ui/Footer';
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
  metadataBase: new URL('https://yourdomain.com'),
  description:
    'Empowering educators and students to leverage AI responsibly and effectively while strengthening creativity, critical thinking, emotional intelligence, and human connection.',
  icons: {
    icon: '/vercel.svg',
  },
  openGraph: {
    title: 'Humain AI | Human Centered AI Learning for Students', 
    description: 'Empowering students aged 13+ to harness AI capabilities through our live, interactive courses, to study smarter and becoming future-ready.', 
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
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TMLZCXPP');`
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
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
        <div className="relative top-0 w-full z-50"> 
            <Header />
        </div>
        <Toaster />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
