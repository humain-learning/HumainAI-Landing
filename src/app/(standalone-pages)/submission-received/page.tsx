'use client';
import { useEffect, useState } from 'react';
import PrimaryButton from 'ui/PrimaryButton';
import Header from '@/components/ui/Header';

function getSafeReturnTo(value: string | null) {
  if (!value) return null;
  if (!value.startsWith('/')) return null;
  if (value.startsWith('//')) return null;
  return value;
}

export default function ThankYouPage() {
  const [destination, setDestination] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Webinar Signup',
      });
    }
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const returnTo = getSafeReturnTo(searchParams.get('returnTo'));
    if (returnTo) {
      setDestination(returnTo);
    }
  }, []);

  return (
	<>
	<Header />
	<div className="flex items-center justify-center bg-white px-4">
      	<div className="max-w-2xl w-full rounded-2xl border p-10 text-center shadow">
        	<h1 className="text-3xl md:text-4xl font-bold mb-4"><span className='text-sage'>Thank you!</span></h1>
        	<p className="text-gray-700 mb-6 text-base md:text-lg">
         		Your submission was successful. Our team will contact you shortly.
       	 	</p>

        <div className="flex items-center justify-center gap-4">
          <PrimaryButton text='Go Back' target={destination} buttonClassName="whitespace-nowrap" />
        </div>

        <p className="mt-6 text-sm text-gray-500">If you don't hear from us within 48 hours, please check your spam folder or contact us at hi@humainlearning.ai</p>
      </div>
    </div>
	</>

  );
}
