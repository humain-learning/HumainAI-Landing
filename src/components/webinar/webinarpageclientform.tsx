'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

type WebinarPageClientFormProps = {
  open: boolean;
  onClose: () => void;
};

export default function WebinarPageClientForm({
  open,
  onClose,
}: WebinarPageClientFormProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reserve-seat-form-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-4 py-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-[460px] rounded-[20px] bg-white px-5 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:px-7 sm:py-7">
        <button
          type="button"
          aria-label="Close form"
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5f5] text-charcoal transition hover:bg-[#ebebeb]"
        >
          <X aria-hidden="true" className="h-4 w-4" />
        </button>

        <p className="text-[10px] font-semibold tracking-[0.14em] text-sage uppercase">
          Free live webinar
        </p>

        <h2
          id="reserve-seat-form-title"
          className="mt-2 max-w-[360px] text-[26px] leading-[1.05] font-bold text-charcoal sm:text-[32px]"
        >
          Reserve Your Free Seat
        </h2>

        <p className="mt-3 max-w-[360px] text-sm leading-6 text-[#666666]">
          Share your details and our team will confirm your webinar seat.
        </p>

        {submitted ? (
          <div className="mt-6 rounded-[14px] bg-sage/15 px-4 py-4 text-sm leading-6 text-charcoal">
            Thanks. Your seat request has been received.
          </div>
        ) : (
          <form
            className="mt-6 grid gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
                First Name
                <input
                  required
                  name="firstName"
                  autoComplete="given-name"
                  placeholder="First name"
                  className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
                />
              </label>

              <label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
                Last Name
                <input
                  required
                  name="lastName"
                  autoComplete="family-name"
                  placeholder="Last name"
                  className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
                />
              </label>
            </div>

            <label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
              Email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
              />
            </label>

            <label className="grid gap-1.5 text-[12px] font-semibold text-charcoal">
              Mobile Number
              <input
                required
                type="tel"
                name="mobile"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Mobile number"
                className="h-11 rounded-[10px] border border-[#dddddd] px-3 text-sm font-normal outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
              />
            </label>

            <button
              type="submit"
              className="mt-2 h-11 rounded-full bg-sage px-5 text-sm font-bold text-white transition hover:bg-sage/90"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
