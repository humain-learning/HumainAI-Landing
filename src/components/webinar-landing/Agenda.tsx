import React from 'react';

export default function Agenda() {
  const agendaItems = [
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">The Arjun vs Riya framework</strong> — why working harder doesn't work, and what smart students actually do </>
    },
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">Setup in 2 minutes</strong> — free AI tools, no account needed, works on any phone </>
    },
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">Build: Smart Timetable</strong> — personalised to your exam dates, weak subjects, and schedule </>
    },
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">The TAP Formula</strong> — Task, Audience, Persona — the secret behind every great AI prompt </>
    },
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">Build: Photo-to-Notes Machine</strong> — snap any textbook, get notes + Hinglish memory tricks in 90 seconds </>
    },
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">Prompt Premier League (live game)</strong> — compete for the best prompt, winner announced live </>
    },
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">Build: 24/7 Doubt Solver</strong> — one prompt that turns AI into a Socratic tutor that never gives the answer directly </>
    },
    {
      text: <> <strong className="font-display font-bold text-[0.88rem]">AI safety and verification habits</strong> — why checking AI output makes you smarter, not lazier </>
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
            Everything covered in the session
          </h2>
          <p className="font-sans text-[0.95rem] text-[#555555] max-w-[580px] leading-[1.72]">
            No theory. No slide-reading. Every minute is hands-on.
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
