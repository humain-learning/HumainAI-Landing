import Image from 'next/image';
import { GraduationCap, Sparkles } from 'lucide-react';
import PrimaryButton from 'ui/PrimaryButton';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#F7E4D3] via-[#FBF3EC] to-white px-6 pt-16 pb-6 md:pt-24 md:pb-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-[#F5DFC7] px-4 py-1.5 text-sm font-medium text-[#C97D49]">
            E-Cell IIT Kharagpur Certified
          </span>

          <h1 className="mt-4 font-display text-5xl font-extrabold leading-tight text-[#171717] md:text-6xl">
            Humain <span className="text-[#E9A772]">AI</span> Club
          </h1>

          <p className="mt-4 max-w-xl text-lg text-gray-600">
            Bring AI education inside your school. Designed for Grades 3 to 12, the Humain
            AI Club is a flexible AI programme as per the school schedule with weekly classes,
            monthly challenges, and an annual E-Cell IIT Kharagpur certified hackathon.
          </p>

          
           <div className="mt-6 inline-block w-fit">
            <PrimaryButton
              text="Book a 15-Minute call"
              target="https://calendar.app.google/7kysSyWQNC3eUcLVA"
              buttonClassName="w-fit justify-center"
            />
          </div>
          
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <Image
            src="/assets/images/AIClub/Hero.png"
            alt="Students learning together at computers in a classroom"
            width={560}
            height={420}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;