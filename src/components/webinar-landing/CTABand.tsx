'use client';

import React, { useState } from 'react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { PopupFormModal } from 'ui/PopupFormModal';
import LeadForm from 'components/forms/hcForm';

export default function CTABand() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleEnrollClick = () => {
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
    console.log('DATA:', data);
    if (!res.ok) {
      setSubmitError('Something went wrong. Please try again.');
      throw new Error(data.error || 'Something went wrong');
    }

    return data;
  };

  return (
    <>
      <div className="relative overflow-hidden bg-[#E7A572] py-[88px] px-5 md:px-16 text-center">
        <div className="absolute border border-white/20 rounded-full w-[500px] h-[500px] -top-[220px] left-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.7rem)] font-extrabold text-white tracking-[-0.8px] leading-[1.15] mb-3">
            Your child's 10x study system<br />starts here.
          </h2>
          
          <p className="font-sans text-[0.92rem] text-white/80 mb-8 leading-[1.65]">
            Free live session &middot; Class 8–12 &middot; All boards &middot; Just a phone
          </p>
          
          <button 
            onClick={handleEnrollClick}
            className="inline-flex items-center justify-center bg-white text-[#C97D49] font-display font-extrabold px-10 py-[18px] text-[1.05rem] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-shadow duration-150 hover:shadow-[0_6px_28px_rgba(0,0,0,0.18)]"
          >
            Book Your Child's Free Slot
          </button>
          
          <div className="mt-[14px] font-sans text-[0.75rem] text-white/55 tracking-[0.3px]">
            No credit card &middot; No form &middot; Just WhatsApp us
          </div>
        </div>
      </div>
      <PopupFormModal isOpen={showModal} onClose={() => setShowModal(false)}>
        <LeadForm
          actionable="Webinar"
          heading="Book Your Child's Free Seat"
          buttonText="Book Now"
          source="Webinar"
          destination="/submission-received"
          onSubmit={onSubmit}
          submitError={submitError}
          setSubmitError={setSubmitError}
        />
      </PopupFormModal>
    </>
  );
}
