import React from 'react';

export default function Problem() {
  return (
    <section className="py-[88px] px-5 md:px-16 bg-[#F5F5F3]">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-[52px]">
          <span className="block mb-3.5 font-sans text-[10px] font-medium tracking-[2.5px] uppercase text-[#888888]">
            The Problem
          </span>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold tracking-[-0.8px] leading-[1.15] mb-3.5 text-[#333333]">
            Same school. Same syllabus.<br />Why are some students 10x more effective?
          </h2>
          <p className="font-sans text-[0.95rem] text-[#555555] max-w-[580px] leading-[1.72]">
            It's not intelligence. It's not money. It's one skill — knowing how to make AI work <em className="not-italic italic">for</em> you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Negative Card */}
          <div className="bg-white border border-[#E6E6E6] rounded-[10px] p-7 pt-7 pb-7">
            <div className="flex items-center gap-3 mb-5 pb-[18px] border-b border-[#E6E6E6]">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-extrabold text-[0.95rem] shrink-0 bg-[#FFF0EB] text-[#C97D49]">
                A
              </div>
              <div>
                <div className="font-display font-extrabold text-[0.97rem] text-[#333333]">Arjun — the 1x Student</div>
                <div className="font-sans text-[0.72rem] text-[#888888] mt-0.5">Tries hard. Gets average results.</div>
              </div>
            </div>
            
            <div className="flex gap-[11px] mb-[11px] font-sans text-[0.88rem] text-[#555555] leading-[1.55] items-start">
              <div className="w-[17px] h-[17px] rounded-full flex items-center justify-center text-[0.6rem] font-extrabold shrink-0 mt-0.5 bg-[#FFF0EB] text-[#C97D49]">
                &#x2715;
              </div>
              4 hours making notes by hand
            </div>
            <div className="flex gap-[11px] mb-[11px] font-sans text-[0.88rem] text-[#555555] leading-[1.55] items-start">
              <div className="w-[17px] h-[17px] rounded-full flex items-center justify-center text-[0.6rem] font-extrabold shrink-0 mt-0.5 bg-[#FFF0EB] text-[#C97D49]">
                &#x2715;
              </div>
              Re-reads chapters 3 times, remembers little
            </div>
            <div className="flex gap-[11px] mb-[11px] font-sans text-[0.88rem] text-[#555555] leading-[1.55] items-start">
              <div className="w-[17px] h-[17px] rounded-full flex items-center justify-center text-[0.6rem] font-extrabold shrink-0 mt-0.5 bg-[#FFF0EB] text-[#C97D49]">
                &#x2715;
              </div>
              Stuck on doubts until the next class
            </div>
            <div className="flex gap-[11px] mb-[11px] font-sans text-[0.88rem] text-[#555555] leading-[1.55] items-start">
              <div className="w-[17px] h-[17px] rounded-full flex items-center justify-center text-[0.6rem] font-extrabold shrink-0 mt-0.5 bg-[#FFF0EB] text-[#C97D49]">
                &#x2715;
              </div>
              Studies hard. Sleeps at 1 am. Still anxious.
            </div>
            
            <div className="mt-4 pt-3.5 border-t border-[#E6E6E6] font-sans text-[0.82rem] italic text-[#888888]">
              Tired, stressed, average marks — despite putting in the hours.
            </div>
          </div>

          {/* Positive Card */}
          <div className="bg-white border border-[#AAC191] rounded-[10px] p-7 pt-7 pb-7" style={{background: 'linear-gradient(150deg, #FFFFFF 65%, #EFF5E9)'}}>
            <div className="flex items-center gap-3 mb-5 pb-[18px] border-b border-[#E6E6E6]">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-extrabold text-[0.95rem] shrink-0 bg-[#EFF5E9] text-[#4A6335]">
                R
              </div>
              <div>
                <div className="font-display font-extrabold text-[0.97rem] text-[#333333]">Riya — the 10x Student</div>
                <div className="font-sans text-[0.72rem] text-[#888888] mt-0.5">Works smart. Same hours. Better results.</div>
              </div>
            </div>
            
            <div className="flex gap-[11px] mb-[11px] font-sans text-[0.88rem] text-[#555555] leading-[1.55] items-start">
              <div className="w-[17px] h-[17px] rounded-full flex items-center justify-center text-[0.6rem] font-extrabold shrink-0 mt-0.5 bg-[#EFF5E9] text-[#4A6335]">
                &#x2713;
              </div>
              Notes ready in 10 minutes (photo to AI)
            </div>
            <div className="flex gap-[11px] mb-[11px] font-sans text-[0.88rem] text-[#555555] leading-[1.55] items-start">
              <div className="w-[17px] h-[17px] rounded-full flex items-center justify-center text-[0.6rem] font-extrabold shrink-0 mt-0.5 bg-[#EFF5E9] text-[#4A6335]">
                &#x2713;
              </div>
              AI quizzes her until she actually remembers
            </div>
            <div className="flex gap-[11px] mb-[11px] font-sans text-[0.88rem] text-[#555555] leading-[1.55] items-start">
              <div className="w-[17px] h-[17px] rounded-full flex items-center justify-center text-[0.6rem] font-extrabold shrink-0 mt-0.5 bg-[#EFF5E9] text-[#4A6335]">
                &#x2713;
              </div>
              Doubts solved at 10 pm in 30 seconds
            </div>
            <div className="flex gap-[11px] mb-[11px] font-sans text-[0.88rem] text-[#555555] leading-[1.55] items-start">
              <div className="w-[17px] h-[17px] rounded-full flex items-center justify-center text-[0.6rem] font-extrabold shrink-0 mt-0.5 bg-[#EFF5E9] text-[#4A6335]">
                &#x2713;
              </div>
              Studies smart. Still has time for cricket.
            </div>
            
            <div className="mt-4 pt-3.5 border-t border-[#E6E6E6] font-sans text-[0.82rem] italic text-[#888888]">
              Confident, fresh, better marks — and a life outside studying.
            </div>
          </div>
        </div>

        <div className="mt-7 bg-[#333333] rounded-[10px] py-8 px-9 text-center">
          <p className="font-sans text-[clamp(0.95rem,1.8vw,1.1rem)] text-white/80 leading-[1.65] mb-4">
            The difference isn't talent or tuition fees. It's guidance.
          </p>
          <p className="font-sans text-[clamp(0.95rem,1.8vw,1.1rem)] text-white/80 leading-[1.65]">
            Every student is already using AI. But most are swimming without a coach — developing bad habits, getting inconsistent results, wasting hours. A guided approach changes everything. That's what this session is.
          </p>
        </div>
      </div>
    </section>
  );
}
