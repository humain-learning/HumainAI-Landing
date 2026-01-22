import SecondaryButton from "ui/SecondaryButton";

export const Band = () => {
    return (
        <div className="bg-sage w-full text-white py-2 z-[10000] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col md:flex-row w-full w-full md:max-w-[80vw] items-center justify-center md:justify-between mx-auto">
            <div className="flex flex-row items-center"><img src='/assets/courses-teachers/humain-educators/icons/band/1.svg' className="w-6 h-6" /><span className="text-lg md:text-xl px-1">15k + teachers trained</span></div>
            <div className="flex flex-row items-center"><img src='/assets/courses-teachers/humain-educators/icons/band/2.svg' className="w-6 h-6" /><span className="text-lg md:text-xl px-1">4.5/5 ⭐ by teachers</span></div>
            <div className="flex flex-row items-center"><img src='/assets/courses-teachers/humain-educators/icons/band/3.svg' className="w-6 h-6" /><span className="text-lg md:text-xl px-1">25+ years in education</span></div>
            <SecondaryButton text="Enroll Now" target="https://pages.razorpay.com/humainchamps" newTab />
          </div>
        </div>
    );
};