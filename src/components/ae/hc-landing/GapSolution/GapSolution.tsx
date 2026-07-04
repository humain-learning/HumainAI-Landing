'use client';

import React from 'react';
import { motion } from 'motion/react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import LeadForm from '@/components/forms/hcForm';
import { PopupFormModal } from '@/components/ui/PopupFormModal';

// Custom Checkmark SVG inside a solid green/sage circle for the solution checklist
const CheckCircleIcon = () => (
  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage text-white shadow-sm">
    <svg
      className="h-3 w-3 stroke-[3.5]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

export default function GapSolution() {
  const router = useRouter();
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

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          
          {/* Left Column: THE AI GAP */}
          <div className="flex flex-col space-y-8 lg:col-span-6">
            
            {/* Header Badge */}
            <div className="space-y-2.5">
              <div className="h-[3px] w-12 rounded-full bg-terracotta" />
              <span className="block font-display text-xs font-extrabold tracking-widest text-terracotta">
                THE AI GAP 
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal sm:text-4xl">
                Every student's future job will involve AI. <br />
                <span className="text-sage">How many can actually use it?</span>
              </h2>
            </div>

            {/* Description */}
            <p className="font-sans text-base leading-relaxed text-charcoal/80">
              India's schools are not teaching AI fast enough. Students who learn these skills 
              now will have an unfair advantage in board exams, college applications, and careers.
            </p>

            {/* Stats Stack */}
            <div className="space-y-6 pt-2">
              
              {/* Stat 1 */}
              <div className="flex border-l-[3px] border-sage/60 pl-5">
                <div className="flex flex-col">
                  <span className="font-display text-4xl font-extrabold leading-none text-terracotta sm:text-5xl">
                    59%
                  </span>
                  <span className="mt-2 font-sans text-sm text-charcoal/60 leading-normal max-w-md">
                    of the global workforce will require upskilling by 2030 according to{' '}
                    <span className="text-charcoal/40 font-medium font-sans">World Economic Forum</span>
                  </span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex border-l-[3px] border-sage/60 pl-5">
                <div className="flex flex-col">
                  <span className="font-display text-4xl font-extrabold leading-none text-terracotta sm:text-5xl">
                     92M
                  </span>
                  <span className="mt-2 font-sans text-sm text-charcoal/60 leading-normal max-w-md">
                    Roles are expected to be displaced  by technology and automation.
                  </span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex border-l-[3px] border-sage/60 pl-5">
                <div className="flex flex-col">
                  <span className="font-display text-4xl font-extrabold leading-none text-terracotta sm:text-5xl">
                    15 Hours
                  </span>
                  <span className="mt-2 font-sans text-sm text-charcoal/60 leading-normal max-w-md">
                    is all it takes to go from zero AI knowledge to building your own AI agent
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: THE HUMAN SOLUTION */}
          <div className="flex flex-col space-y-8 lg:col-span-6">
            
            {/* Header Badge */}
            <div className="space-y-2.5">
              <div className="h-[3px] w-12 rounded-full bg-sage" />
              <span className="block font-display text-xs font-extrabold tracking-widest text-[#5e714e]">
                THE HUMAN SOLUTION
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal sm:text-4xl">
                What Humain Champs actually gives your child
              </h2>
            </div>

            {/* Checklist Stack */}
            <div className="flex flex-col gap-6 pt-2">
              
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <CheckCircleIcon />
                <div className="flex flex-col">
                  <span className="font-display text-base font-bold text-charcoal">
                    A working AI project{' '}
                    <span className="font-sans text-sm font-normal text-charcoal/60">not just theory.</span>
                  </span>
                  <span className="mt-0.5 font-sans text-sm text-charcoal/70 leading-normal">
                    Every student submits a real AI project to the E- Cell IIT Kharagpur Hackathon.
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <CheckCircleIcon />
                <div className="flex flex-col">
                  <span className="font-display text-base font-bold text-charcoal">
                    10+ real tools mastered{' '}
                    <span className="font-sans text-sm font-normal text-charcoal/60">
                      ChatGPT, Gemini, NoteBook LM, Canva AI, Heygen, N8N and more.
                    </span>
                  </span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <CheckCircleIcon />
                <div className="flex flex-col">
                  <span className="font-display text-base font-bold text-charcoal">
                    A personalised AI Study Agent{' '}
                    <span className="font-sans text-sm font-normal text-charcoal/60">
                      a custom AI tool your child builds and keeps forever.
                    </span>
                  </span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-4">
                <CheckCircleIcon />
                <div className="flex flex-col">
                  <span className="font-display text-base font-bold text-charcoal">
                    E- Cell IIT Kharagpur certificate{' '}
                    <span className="font-sans text-sm font-normal text-charcoal/60">
                      LinkedIn-shareable, nationally recognised.
                    </span>
                  </span>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-start gap-4">
                <CheckCircleIcon />
                <div className="flex flex-col">
                  <span className="font-display text-base font-bold text-charcoal">
                    Small students batch{' '}
                    <span className="font-sans text-sm font-normal text-charcoal/60">
                      personal attention, not a lecture hall.
                    </span>
                  </span>
                </div>
              </div>

              {/* Item 6 */}
              <div className="flex items-start gap-4">
                <CheckCircleIcon />
                <div className="flex flex-col">
                  <span className="font-display text-base font-bold text-charcoal">
                    Curriculum designed for India{' '}
                    <span className="font-sans text-sm font-normal text-charcoal/60">
                      connects AI skills to board exam prep, research, and creative projects.
                    </span>
                  </span>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <motion.button
                type="button"
                onClick={handleEnrollClick}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                className="group flex cursor-pointer items-center justify-between gap-6 rounded-full bg-terracotta py-2.5 pr-2.5 pl-7 text-white shadow-sm transition-all duration-300 hover:bg-[#df935c] hover:shadow-md w-fit"
              >
                <span className="font-display text-base font-bold tracking-wide">
                  Reserve Your Child's Seat
                </span>
                <motion.div
                  variants={{
                    hover: { x: 3, y: -3 },
                  }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-terracotta shadow-sm"
                >
                  <svg
                    className="h-4 w-4 stroke-[3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </motion.div>
              </motion.button>
            </div>

          </div>

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
    </section>
  );
}
