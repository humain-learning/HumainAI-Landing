import React from 'react';

export default function Agenda() {
  const agendaItems = [
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">The guided vs. unguided student</strong> — Why some students get 10x results from the same AI tools — using a swimming analogy your child will never forget </>
    },
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">Showcase: What 10x students have already done</strong> — Real student work, real results. The 'aha moment' that shifts how your child sees what's possible. </>
    },
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">Live Padlet Challenge</strong> — Students submit their own prompts for a real scenario. Best prompt wins. All prompts improved live, on screen. </>
    },
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">The Framework Reveal</strong> — One technique that transforms any AI prompt from average to exceptional. Every subject. Every tool. Demonstrated live. </>
    },
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">The 10x Study System — revealed live</strong> — The secret methods demonstrated in action. Your child leaves knowing exactly what to use that evening. </>
    },
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">Prompt Premier League (live game)</strong> — Friendly competition, best prompt wins, announced live. </>
    },
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">Responsible AI habits</strong> — How using AI well builds stronger thinking and better learning outcomes. </>
    }
  ];

  return (
    <section className="py-[88px] px-5 md:px-16 bg-[#F5F5F3]" id="agenda">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-[52px]">
          <span className="block mb-3.5 font-sans text-[10px] font-medium tracking-[2.5px] uppercase text-[#888888]">
            Full Agenda
          </span>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold tracking-[-0.8px] leading-[1.15] mb-3.5 text-[#333333]">
            Every minute earns its place.
          </h2>
          <p className="font-sans text-[0.95rem] text-[#555555] max-w-[580px] leading-[1.72]">
            Interactive. Hands-on. Your child won't sit and watch — they'll participate from minute one.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {agendaItems.map((item, index) => (
            <div key={index} className="flex gap-[14px] items-start bg-white border border-[#E6E6E6] rounded-lg p-[16px_18px] transition-colors duration-150 hover:border-[#AAC191]">
              <div className="w-[22px] h-[22px] rounded-full bg-[#AAC191] flex items-center justify-center shrink-0 mt-px">
                <svg viewBox="0 0 24 24" className="w-[10px] h-[10px] stroke-white stroke-[2.5] fill-none stroke-linecap-round stroke-linejoin-round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="font-sans text-[0.88rem] font-normal leading-[1.5] text-[#333333]">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
