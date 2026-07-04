'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { PopupFormModal } from 'ui/PopupFormModal';
import LeadForm from 'components/forms/hcForm';

function isRegistrationClosed() {
  const webinarTime = new Date('2026-06-20T11:00:00+05:30');
  return Date.now() >= webinarTime.getTime();
}

export default function Header() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [registrationClosed, setRegistrationClosed] = useState(false);

  useEffect(() => {
    setRegistrationClosed(isRegistrationClosed());
  }, []);

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
  {/* Orange announcement strip */}

        <div className="fixed inset-x-0 top-0 z-[101] flex items-center justify-center bg-[#E7A572] px-4 py-2 text-center">

          <p className="flex items-center gap-2 text-[0.75rem] font-medium text-white md:text-[0.85rem]">

            <span className="hidden h-1.5 w-1.5 rounded-full bg-white sm:inline-block" />

            Limited seats per batch — registrations close when a batch fills or 2 hours before start

          </p>

        </div>

        <nav className="fixed inset-x-0 top-[36px] z-[100] flex h-[75px] items-center justify-between px-5 md:px-16 bg-white/95 backdrop-blur-md border-b border-[#E6E6E6] shadow-[0_2px_16px_rgba(0,0,0,0.07)]">        <Link href="/" className="flex items-center">
        <Image src="/assets/logo/brain-logo.png" alt="Humain Learning Logo" width={240} height={60} className="object-contain w-40 md:w-52 h-auto" priority />
        </Link>
        <div className="flex items-center gap-6">
          {/* <Link
            href="#agenda"
            className="hidden sm:block font-sans text-[0.85rem] font-medium text-[#555555] transition-colors duration-150 hover:text-[#333333]"
          >
            What They'll Learn
          </Link>
          <Link
            href="#faq"
            className="hidden sm:block font-sans text-[0.85rem] font-medium text-[#555555] transition-colors duration-150 hover:text-[#333333]"
          >
            FAQ
          </Link> */}
          <button
            onClick={handleEnrollClick}
            className="inline-flex items-center gap-2 font-display font-extrabold border-none cursor-pointer rounded-md transition-all duration-150 hover:-translate-y-[1px] bg-[#E7A572] text-white px-7 py-3.5 text-[0.9rem] shadow-[0_2px_14px_rgba(231,165,114,0.3)] hover:bg-[#C97D49] hover:shadow-[0_4px_20px_rgba(231,165,114,0.4)]"
            disabled={registrationClosed}
          >
        {registrationClosed ? 'Registrations Closed' : 'Reserve My Seat'}          </button>
        </div>
      </nav>
      <PopupFormModal isOpen={showModal} onClose={() => setShowModal(false)}>
        <LeadForm
          actionable="Webinar"
          heading="Book Your Free Seat"
          buttonText="Book Now"
          source="Webinar Landing"
          destination="/submission-received"
          onSubmit={onSubmit}
          submitError={submitError}
          setSubmitError={setSubmitError}
        />
      </PopupFormModal>
    </>
  );
}