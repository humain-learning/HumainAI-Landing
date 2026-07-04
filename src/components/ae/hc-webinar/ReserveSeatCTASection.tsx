import { ArrowUpRight } from 'lucide-react';

type ReserveSeatCTASectionProps = {
  onReserveClick?: () => void;
};

export default function ReserveSeatCTASection({ onReserveClick }: ReserveSeatCTASectionProps) {
  return (
    <section className="bg-white px-4 pt-8 pb-36 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <p className="text-charcoal text-[14px] leading-5 font-semibold sm:text-[15px]">
          Reserve your seat now.
        </p>

        <h2 className="mt-3 max-w-[980px] text-[28px] leading-[1.05] font-bold sm:text-[38px] lg:text-[48px]">
          <span className="text-terracotta">
            Your Child Enters The AI Age Either Way.
          </span>
          <br />
          <span className="text-charcoal">
            Make Sure They Enter It Prepared.
          </span>
        </h2>

        <button
          type="button"
          onPointerDown={(event) => {
            event.preventDefault();
            onReserveClick?.();
          }}
          onClick={() => onReserveClick?.()}
          className="bg-sage mt-8 inline-flex h-9 items-center gap-3 rounded-full px-5 text-[12px] font-bold text-white transition-opacity hover:opacity-90"
        >
          Reserve Your Free Seat
          <span className="text-sage flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </span>
        </button>

        <p className="mt-8 text-[13px] leading-5 text-[#404040] sm:text-[15px]">
          200 seats per session&nbsp; • &nbsp;Live on Zoom&nbsp; •
          &nbsp;Recording shared with registrants only
        </p>
      </div>
    </section>
  );
}
