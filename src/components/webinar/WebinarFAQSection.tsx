import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Is the webinar really free?',
    answer:
      "Yes, it is completely free to attend.",
  },
  {
    id: 2,
    question: 'Who is this for - parents, students, or both?',
    answer:
      "Both. We recommend parents and students attend together. Register one seat per family — both can join together.",
  },
  {
    id: 3,
    question: 'What if my child already uses ChatGPT regularly?',
    answer:
      "Even better. We'll show them how to use it 10x more effectively.",
  },
  {
    id: 4,
    question: 'Will my child be in front of a screen for too long?',
    answer:
      "It's a single 60-minute session, where students will be actively involved.",
  },
  {
    id: 5,
    question: 'What is Humain Learning?',
    answer:
      "Humain Learning is an AI literacy education initiative co-founded by Manit Jain — Harvard M.Ed and the founder of The Heritage Xperiential Learning Schools, ranked #1 in India. Our pedagogy team includes Harvard, Cambridge, and JNU alumni, and our work is rooted in international research and frameworks from UNESCO, OECD, and the European Commission. This webinar is hosted by Rashmi Bhaskaran (Lead, Curriculum & Training) and Ankur Dahiya (Program Director).",
  },
] as const;

export default function WebinarFAQSection() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes faq-slide-down {
          0% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        details[open] .faq-content {
          animation: faq-slide-down 0.3s ease-out forwards;
        }
      `}} />
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div>
          <h2 className="text-[28px] leading-[1.05] font-bold sm:text-[36px] lg:text-[44px]">
            <span className="text-terracotta">Common Questions</span>
            <br />
            <span className="text-charcoal">Before You Register.</span>
          </h2>

          <div className="bg-terracotta/90 mt-5 h-[2px] w-20 sm:w-24" />
        </div>

        <div className="w-full">
          {faqs.map((faq) => (
              <details
                key={faq.id}
                name="webinar-faq"
                className="group border-sage/80 border-b"
              >
                <summary className="flex w-full cursor-pointer touch-manipulation list-none select-none items-center justify-between gap-4 py-4 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-charcoal text-[14px] leading-[1.25] font-semibold sm:text-[15px] lg:text-[16px]">
                    Q{faq.id}: {faq.question}
                  </span>

                  <ChevronDown
                    aria-hidden="true"
                    className="text-sage h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180"
                    strokeWidth={2.2}
                  />
                </summary>

                <div className="faq-content">
                  <p className="pb-4 text-[12px] leading-5 text-[#575757] sm:text-[13px]">
                    {faq.answer}
                  </p>
                </div>
              </details>
          ))}
        </div>
      </div>
    </section>
  );
}
