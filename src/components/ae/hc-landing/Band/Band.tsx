'use client';

import React from 'react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import LeadForm from '@/components/forms/hcForm';
import { PopupFormModal } from '@/components/ui/PopupFormModal';
import SecondaryButton from "ui/SecondaryButton";

type BandProps = {
  targetTime: number;
};

export const Band = ({ targetTime }: BandProps) => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showModal, setShowModal] = React.useState(false);
  const [submitError, setSubmitError] = React.useState('');

  const handleEnrollClick = () => {
    if (getCookie('leadId')) {
      router.push('/checkout?courseId=1');
      return;
    }

    setShowModal(true);
  };

  const onSubmit = async (values: unknown) => {
    const res = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (!res.ok) {
      setSubmitError('Something went wrong. Please try again.');
      throw new Error(data.error || 'Something went wrong');
    }

    return data;
  };

  React.useEffect(() => {
    const updateTimer = () => {
      const current = Date.now();
      const diff = targetTime - current;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div className="bg-sage w-full sticky bottom-0 text-white py-3 z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.12)] px-6">
      <div className="flex flex-col sm:flex-row w-full md:max-w-7xl items-center justify-between mx-auto gap-4 sm:gap-6">
        
        {/* Left Side: Header & Urgency Indicator */}
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-ping shrink-0" />
          <p className="font-display text-sm sm:text-base font-extrabold tracking-tight text-white">
            Batches Filling Fast! <span className="font-sans text-xs sm:text-sm font-normal text-white/80 ml-1.5 hidden md:inline">Enroll before batches close.</span>
          </p>
        </div>

        {/* Right Side: Dynamic Countdown Timer (Transparent White) & CTA Button */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          
          {/* Enroll Button */}
          <SecondaryButton text="Enroll Now" target="" onClick={handleEnrollClick} />

        </div>

      </div>

      <PopupFormModal isOpen={showModal} onClose={() => setShowModal(false)}>
        <LeadForm
          actionable="Direct Sale"
          heading="Please fill in your details"
          subHeading=""
          buttonText="Proceed to Checkout"
          source="Testing"
          destination="/checkout?courseId=1"
          onSubmit={onSubmit}
          submitError={submitError}
          setSubmitError={setSubmitError}
        />
      </PopupFormModal>
    </div>
  );
};
