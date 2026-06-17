'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function CoLearningPH() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 border-t border-[#e8efe0]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        
        <div className="max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-charcoal mb-6"
          >
            Parent-and-child co-learning: the Humain approach to teaching AI together
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-6"
          >
            Most AI courses are built for the child, with the parent paying the bill. The Humain framework is 
            different. It is built for the parent and the child to learn together, in shared spaces, over the same thirty 
            to forty-five minutes a week. We call this co-learning. It is the spine of how we deliver Pillar 6 (Human 
            Intelligence in the Age of AI), because metacognition develops faster when an adult is reflecting 
            alongside the child.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed mb-6"
          >
            Co-learning does not mean you have to know AI before your child does. It means you are in the room. 
            You see what she is asked to do. You see what she chooses to do. You can ask her, on a Friday evening, 
            &quot;what did you use AI for this week, and what did you decide not to use it for.&quot; That conversation is the 
            curriculum. The tools are secondary.
          </motion.p>

          {/* Pull Quote */}
          <motion.blockquote 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="border-l-[6px] border-[#e7a572] pl-6 md:pl-8 py-2 mb-6 bg-[#fffcf9] rounded-r-2xl"
          >
            <p className="font-display text-xl md:text-2xl text-charcoal font-medium italic leading-relaxed mb-4">
              &quot;AI can mimic care. It cannot give it. Our job is to make sure children can tell the difference. We cannot 
              do that for them. We can be in the room while they figure it out.&quot;
            </p>
            <footer className="font-sans text-sm md:text-base text-charcoal/70">
              <strong>Manit Jain</strong>, Co-founder, Humain Learning AI, M.Ed Harvard, founder of Heritage Xperiential Learning Schools.
            </footer>
          </motion.blockquote>

        </div>
      </div>
    </section>
  );
}


