import Image from 'next/image';
import SecondaryButton from 'ui/SecondaryButton';

export default function MoreThanCourse() {
  return (
    <section className="md:max-h-[420px] w-full overflow-hidden bg-[#AAC191]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center md:grid-cols-[0.6fr_1.4fr]">
        <div className="w-full max-w-[440px] md:max-w-[520px] md:self-end">
          <Image
            src="/assets/images/homepage/More_than_an_AI.png"
            alt="Family learning with AI"
            width={500}
            height={420}
            className="h-auto w-full object-contain object-bottom md:h-full md:max-h-[420px]"
          />
        </div>

        <div className="flex flex-col justify-center p-6 md:h-full md:p-10">
          <p className="font-display text-lg font-bold leading-snug text-white md:text-xl">
            More than an AI course — we build critical thinking, ethical judgement,
            creativity, and digital confidence, so learners lead in an AI-powered world
            without becoming dependent on it.
          </p>

          <SecondaryButton
            text="Explore Our Framework"
            target="/frameworkNew"
            buttonClassName="mt-6 w-fit font-display font-bold"
          />
        </div>
      </div>
    </section>
  );
}