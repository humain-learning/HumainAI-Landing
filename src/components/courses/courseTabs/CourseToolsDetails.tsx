import { useState } from 'react';
import PrimaryButton from '@/components/ui/PrimaryButton';
import 'swiper/css';
import { ChevronUp, ChevronDown } from 'lucide-react';

const slides = [
  {
    title: 'We Cultivate Human Intelligence, Not Dependency.',
    desc: 'We promise this program is designed to make AI a tool that enhances your child’s thinking, not a shortcut that bypasses it. Our goal is to nurture their innate curiosity, adaptability (AQ), and emotional intelligence (EQ) right alongside their technical skills.',
  },
  {
    title: 'We Prioritize Ethical and Safe Use of AI.',
    desc: 'Our platform teaches children how to use AI responsibly, ensuring they develop the judgment to apply it in safe, ethical, and impactful ways.',
  },
  {
    title: 'We Empower Future Innovators.',
    desc: 'By combining technical skills with critical thinking and creativity, we prepare children to thrive in tomorrow’s world as innovative leaders.',
  },
];

export const CourseToolsDetails = () => {
  const [activeSlider, setActiveSlider] = useState({
    current: 0,
    next: 1,
  });

  const handleNext = () => {
    if (activeSlider.current === slides.length - 1) {
      setActiveSlider({
        current: 0,
        next: 1,
      });
    } else {
      setActiveSlider((prev) => {
        return {
          current: prev.current + 1,
          next: prev.next + 1,
        };
      });
    }
  };

  const handlePrev = () => {
    if (activeSlider.current === 0) {
      setActiveSlider({
        current: 0,
        next: 1,
      });
    } else {
      setActiveSlider((prev) => {
        return {
          current: prev.current - 1,
          next: prev.next - 1,
        };
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-between gap-10 py-8 md:flex-row md:items-start md:py-10">
      <div className="flex w-full max-w-[515px] flex-col gap-y-5 text-center md:text-left">
        <h3 className="text-4xl font-semibold">Our Promise to Parents</h3>
        <p className="font-light text-[rgba(0,0,0,0.6)]">
          We understand that navigating the world of AI with your child can feel
          overwhelming. At Humain Learning, we partner with you to make this
          journey empowering and safe. We exist to put humanity at the heart of
          the AI age, and that commitment is at the core of everything we do.
          Enroll in Our Course
        </p>
        <PrimaryButton
          text="Enroll in Our Course"
          buttonClassName="w-fit mx-auto md:mx-0"
        />
      </div>

      <div className="">
        <div className="flex flex-col items-center gap-20 md:flex-row md:items-start md:gap-16">
          <div className="relative w-full max-w-[500px]">
            {/* behind blur layer  */}
            <div className="relative w-full max-w-[400px]">
              <div
                className="rounded-2xl border border-[#E0E0E0] p-6 shadow-md"
                style={{
                  background:
                    'radial-gradient(circle at bottom right, #fbdec7 0%, #FFFFFF 100%)',
                  filter: 'blur(1px)',
                }}
              >
                <div className="">
                  <h3 className="mb-2 text-lg font-semibold">
                    {slides[activeSlider.current].title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {slides[activeSlider.current].desc}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-10 -left-5 z-50 pt-0 lg:w-[450px]">
              <div className="relative">
                {/* top actual layer  */}
                <div
                  className="rounded-2xl border border-[#E0E0E0] p-6 shadow-md"
                  style={{
                    background:
                      'radial-gradient(circle at bottom right, #fbdec7 0%, #FFFFFF 100%)',
                  }}
                >
                  <div className="">
                    <h3 className="mb-2 text-lg font-semibold">
                      {slides[activeSlider.current].title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {slides[activeSlider.current].desc}
                    </p>
                  </div>
                </div>
                {/* botton behind layer */}
                <div className="absolute -bottom-5 left-7 -z-10 w-[350px] lg:left-5 lg:w-[400px]">
                  <div
                    className="rounded-2xl border border-[#E0E0E0] p-6 shadow-md"
                    style={{
                      background:
                        'radial-gradient(circle at bottom right, #fbdec7 0%, #FFFFFF 100%)',
                      filter: 'blur(1px)',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-row gap-2 md:flex-col">
            <button
              className="rounded-full bg-[#DCE8CD] p-2"
              onClick={handleNext}
            >
              <ChevronUp className="size-5" />
            </button>
            <button
              className="rounded-full bg-[#DCE8CD] p-2"
              onClick={handlePrev}
            >
              <ChevronDown className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
