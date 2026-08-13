import Image from 'next/image';

const WhatIsIt = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <div className="flex items-start gap-4 lg:mx-0 lg:block">
            <Image
              src="/assets/images/AIClub/Question.png"
              alt="Question mark icon"
              width={280}
              height={320}
              className="h-16 w-16 shrink-0 object-contain lg:h-auto lg:w-full lg:max-w-[280px]"
            />

            <div className="lg:hidden">
              <h2 className="font-display text-2xl font-extrabold text-[#171717]">
                What is the Humain AI Club?
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-[#E9A772]" />
            </div>
          </div>

          <div>
            <h2 className="hidden font-display text-3xl font-extrabold text-[#171717] md:text-4xl lg:block">
              What is the Humain AI Club?
            </h2>
            <div className="hidden mt-4 h-1 w-16 rounded-full bg-[#E9A772] lg:block" />

            <p className="mt-6 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg">
              The Humain AI Club is a flexible AI programme as per the school schedule for
              students in Grades 3 to 12. It brings structured AI education into your school
              through weekly instructor-led classes, hands-on projects, monthly team challenges,
              and self-paced learning on the Humain LMS. Students build practical AI skills
              through the programme and finish at an annual hackathon certified by E-Cell IIT
              Kharagpur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsIt;