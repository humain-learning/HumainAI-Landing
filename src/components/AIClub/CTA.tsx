import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from 'ui/PrimaryButton';
import SecondaryButton from 'ui/SecondaryButton';

const AIClubCTA = () => {
  return (
    <section className="w-full bg-[#FAF6F0]">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Image */}
        <div className="relative mx-auto aspect-[4/3] w-full max-w-md md:mx-0">
          <Image
            src="/assets/images/AIClub/CTA/classroom-ai-session.png"
            alt="Students learning AI concepts in a classroom session"
            fill
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="font-display text-4xl font-extrabold leading-tight text-[#171717] md:text-5xl">
            Bring AI education inside your{' '}
            <span className="text-[#E9A772]">school walls</span>
          </h2>
          <p className="mt-6 max-w-md text-base text-gray-600 md:text-lg">
            A flexible AI club as per your school schedule, certified by
            E-Cell IIT Kharagpur, with minimal lift for your staff.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <SecondaryButton
              text="Book a 15-Minute Call"
              target="https://calendar.app.google/7kysSyWQNC3eUcLVA"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/assets/images/AIClub/CTA/brain.png"
            alt="Humain Learning logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        </Link>
        <span className="text-sm text-gray-500">
          Humain Learning · In collaboration with E-Cell, IIT Kharagpur
        </span>
      </div>
    </section>
  );
};

export default AIClubCTA;