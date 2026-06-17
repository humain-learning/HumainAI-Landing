'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    q: 'At what age should my child start learning about AI?',
    a: 'The OECD AI Literacy Framework suggests starting at age 8. We start at Class 8, which is the foundational age for structured AI literacy. Below Class 8, the conversation on AI belongs at home, and our free Parents Guide is built to support that. From Class 8 onwards, students can reliably distinguish prediction from fact, train their own classifiers, and build projects that meet CBSE or ICSE practical-exam standards.',
  },
  {
    q: 'My child is in Class 4. Is she too young for any of this?',
    a: 'No. A Class 4 child can have the first conversation with you. She can use the Teachable Machine website with you in the room. She can see that an AI tool sometimes gets things wrong. The Parents Guide includes a one-page activity for parents of Class 3 to Class 5 children. You do not need to enroll her in Humain Champs until Class 8.',
  },
  {
    q: 'What if my child uses AI to do her homework?',
    a: 'She will. The question is whether she does it consciously, with your knowledge, and within rules you have agreed. We do not recommend banning AI for homework. We recommend agreeing rules and reviewing them weekly. The section on this page (What to allow, what to push back on) gives a starting list. Print it. Put it on the fridge.',
  },
  {
    q: 'Should I let my child use AI tools like ChatGPT?',
    a: 'Conditional yes. AI tools are safe for a Class 8 or older child who knows what AI is, verifies before trusting, and never pastes personal data into the chat. For younger children, use AI only with you in the room. The AI safety section of this page covers the conditions in detail.',
  },
  {
    q: 'How do I talk to my child about AI?',
    a: 'Start by asking. Not telling. Ask her what AI she uses, where she uses it, and what she trusts it for. The first conversation is listening. The second conversation is the five questions from the parent checklist section of this page. The third conversation is agreeing rules together. The Parents Guide gives you the script for all three.',
  },
  {
    q: 'What if I do not understand AI myself?',
    a: 'That is fine. You do not need to understand AI to teach your child to use it well. You need to be in the room while she learns and ask her good questions now and then. Humain teaches the framework, your child uses the tools. You do not need to be present for every session, but you should be kept in the loop with a quick weekly check-in.',
  },
  {
    q: 'How much screen time does Humain involve?',
    a: 'Fifteen hours total over three to six weeks for Humain Champs (Class 8 to Class 12). Children can do more if they want, but more is not always better at this age, and we have not seen evidence that doubling time doubles learning.',
  },
  {
    q: "Is my child's data safe with Humain?",
    a: "Yes. Humain is operated by Eduxa Consulting Pvt Ltd, an Indian company subject to the DPDP Act 2023. Children's data is collected with verifiable parental consent, processed only for the educational purpose stated, stored on servers in India, and deleted on request. The full Children's Data section of the privacy policy is at /privacy#children.",
  },
  {
    q: 'What grades does Humain teach?',
    a: 'The flagship Humain Champs course is for Class 8 to Class 12. The framework on which it is built is the same: the six-pillar Humain AI Literacy Framework.',
  },
  {
    q: 'How is Humain different from a free YouTube AI course for kids?',
    a: 'Free YouTube courses teach instructions. Humain teaches judgement. A YouTube video shows your child how to use an AI tool. Humain teaches her when to use it, when not to, how to verify what it tells her, how to protect her data, and which capacities AI cannot do for her at all. Humain is also live, in small and interactive batches, and certified by the entrepreneurship cell of IIT Kharagpur. Free YouTube is none of those.',
  },
];

export default function FAQPH() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative w-full bg-white py-8 md:py-12 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Left sticky label */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-xs font-bold tracking-[0.15em] text-[#aac191] uppercase mb-3"
              >
                FAQ
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl md:text-4xl font-extrabold leading-[1.15] tracking-tight text-charcoal mb-4"
              >
                AI for kids in India: 10 questions Indian parents ask, answered
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-sans text-sm text-charcoal/60 leading-relaxed"
              >
                Straight answers, no marketing. If your question is not here, the free Parents Guide covers it.
              </motion.p>
            </div>
          </div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-2"
          >
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#e8efe0] rounded-2xl overflow-hidden bg-[#f9faf7] transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-display font-bold text-base text-charcoal pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white border border-[#e8efe0] flex items-center justify-center text-[#aac191]">
                    {openIndex === idx ? (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-0 font-sans text-sm text-charcoal/80 leading-relaxed border-t border-[#e8efe0]/50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
