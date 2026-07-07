import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Does my child need any coding or technical background?',
    answer: "No. Humain Champs is designed for curious beginners. As long as your child can use a laptop and a browser, they're ready. No prior coding, AI, or technical experience is needed.",
  },
  {
    id: 2,
    question: 'What exactly will my child build during the camp?',
    answer: " Throughout the course, students will create multiple projects such as presentations, websites, applications, songs, images etc. They also complete an AI project submitted to a hackathon organized by E-Cell IIT Kharagpur.",
  },
  {
    id: 3,
    question: 'What if my child misses a class?',
    answer: "All sessions are recorded and accessible for on our LMS if a child misses a session. A doubt-clearing session is also scheduled at the end of each batch.",
  },
  {
    id: 4,
    question: 'How many students are in each batch?',
    answer: " While the size of each batch varies, we keep them small to enable our instructors to give personalized attention to each student",
  },
  {
    id: 5,
    question: 'What is the E-CELL IIT Kharagpur certificate?',
    answer: "Students who successfully submit their AI project to the E-Cell IIT Kharagpur Hackathon receive an official participation/completion certificate from E-Cell, the entrepreneurship cell of IIT Kharagpur — one of India's premier engineering institutions.",
  },
  {
    id: 6,
    question: 'Which AI tools will my child learn?',
    answer: "Students work with 10+ tools across the camp including ChatGPT, Gemini, NoteBook LM, Canva AI, Heygen, N8N and more. The exact toolkit is updated each cohort to reflect the latest available tools.",
  },
  {
    id: 7,
    question: 'Are classes live or pre-recorded?',
    answer: "All Humain Champs sessions are live and interactive — not pre-recorded videos. Students interact with instructors in real time and get immediate feedback on their work.",
  },
  {
    id: 8,
    question: 'What happens after the camp ends?',
    answer: "Students get access to the Humain Alumni community on WhatsApp. Advanced cohorts for deeper AI engineering are available for those who want to continue.",
  },
  {
    id: 9,
    question: 'We can learn these courses for free, then why should we join this course?',
    answer: "While free courses are available on platforms like YouTube and Instagram, we are not just another tech company offering generic lessons. Backed by a 25+ year legacy in education, our experienced educators deliver a carefully curated curriculum designed specifically for students aged 13–18.",
  },
  {
    id: 10,
    question: 'Do we need to purchase these tools taught in the course as well or will you provide them for free?',
    answer: "All the tools taught in the sessions, can be used by students free of cost and they don't have to purchase them.",
  },
  {
    id: 11,
    question: 'Can I get a demo class before enrolling my child?',
    answer: "No, we don't provide a demo class, but we have one class full refund policy which means if you are not satisfied after the first session, we will issue a full refund — no questions asked. Cancellations after first session are non-refundable.",
  },
  {
    id: 12,
    question: 'My child knows all these tools already, what is diffwerent about this course then?',
    answer: "This course focuses on applying these tools in real-world scenarios and building comprehensive AI projects, rather than just learning the tools in isolation.",
  },
  {
    id: 13,
    question: 'How is my child\'s data and payment information handled?',
    answer: "We take data privacy seriously. Your child's personal information is used only for course delivery and communication, and is never sold to third parties. All payments are processed through a secure, PCI-compliant payment provider, and your card details are never stored on our servers.",
  },


] as const;

export default function WebinarFAQSection() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
      <style dangerouslySetInnerHTML={{
        __html: `
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
