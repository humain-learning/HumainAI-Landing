'use client';

import { useState } from 'react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import SecondaryButton from "ui/SecondaryButton";
import { PopupFormModal } from 'ui/PopupFormModal';
import LeadForm from 'components/forms/hcForm';

export const Band = () => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleEnrollClick = () => {
        if (getCookie('leadId')) {
            router.push('/checkout?courseId=1');
            return;
        } else {
            setShowModal(true);
        }
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
            <div className="bg-sage w-full sticky bottom-0 text-white py-2 z-[10000] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] px-5">
              <div className="flex flex-row w-full md:max-w-[70vw] items-center justify-center md:justify-between mx-auto gap-2 md:gap-0">
                <span className="text-md md:text-xl">Batches Filling Fast!</span>
                <SecondaryButton text="Enroll Now" onClick={handleEnrollClick} target="" />
              </div>
            </div>
            <PopupFormModal isOpen={showModal} onClose={() => setShowModal(false)}>
                <LeadForm
                    actionable="Direct Sale"
                    heading="Book Your Free Seat"
                    buttonText="Book Now"
                    source="Testing"
                    destination="/checkout?courseId=1"
                    onSubmit={onSubmit}
                    submitError={submitError}
                    setSubmitError={setSubmitError}
                />
            </PopupFormModal>
        </>
    );
};