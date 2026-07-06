import { Marquee } from '@/components/ui/marquee';

export default function GoldenRule() {
  return (
    <div className="w-full overflow-hidden bg-[#AAC191] py-4">
      <Marquee pauseOnHover className="[--duration:25s]">
        <div className="flex items-center">
          <span className="whitespace-nowrap font-display text-base font-bold text-white md:text-lg">
            Golden rule taught throughout: AI drafts, you decide. Co-pilot, not autopilot.
          </span>
          <span className="mx-6 text-white">•</span>
          <span className="whitespace-nowrap font-display text-base font-bold text-white md:text-lg">
            Golden rule taught throughout: AI drafts, you decide. Co-pilot, not autopilot.
          </span>
          <span className="mx-6 text-white">•</span>
          <span className="whitespace-nowrap font-display text-base font-bold text-white md:text-lg">
            Golden rule taught throughout: AI drafts, you decide. Co-pilot, not autopilot.
          </span>
        </div>
      </Marquee>
    </div>
  );
}
