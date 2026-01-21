import SecondaryButton from "ui/SecondaryButton";

export const Band = () => {
    return (
        <div className="bg-sage w-full fixed bottom-0 text-white py-2 z-[10000] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col md:flex-row w-full md:max-w-[70vw] items-center justify-center md:justify-between mx-auto gap-2 md:gap-0">
            <span className="text-lg md:text-xl">Batches Filling Fast!</span>
            <SecondaryButton text="Enroll Now" target="https://pages.razorpay.com/humainchamps" newTab />
          </div>
        </div>
    );
};