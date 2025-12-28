'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PrimaryButton from '@/components/ui/PrimaryButton';
import SecondaryButton from '@/components/ui/SecondaryButton';

export default function ThankYouPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    if (countdown <= 0) {
      router.push('/courses');
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <div className="flex items-center justify-center bg-white px-4">
      <div className="max-w-2xl w-full rounded-2xl border p-10 text-center shadow">
        <h1 className="text-3xl md:text-4xl font-bold mb-4"><span className='text-sage'>Thank you!</span></h1>
        <p className="text-gray-700 mb-6 text-base md:text-lg">
          Your submission was successful. Our team will contact you shortly.
        </p>

        <div className="flex items-center justify-center gap-4">
          <PrimaryButton text='Back to Home' target="/" buttonClassName="whitespace-nowrap" />
          <SecondaryButton text="Browse Courses" target="/courses" buttonClassName="" />
        </div>

        <p className="mt-6 text-sm text-gray-500">If you don't hear from us within 48 hours, please check your spam folder or contact us at hi@humainlearning.ai</p>
        <p className="mt-4 text-sm text-gray-500">Redirecting to courses in {countdown} seconds...</p>
      </div>
    </div>
  );
}
