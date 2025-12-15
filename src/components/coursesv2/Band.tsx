import SecondaryButton from "../ui/SecondaryButton";

export const Band = () => {
    return (
        <div className="bg-sage w-full fixed bottom-0 text-white py-2 z-[10000] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="flex max-w-[70vw] items-center justify-between mx-auto">
            <span className="text-xl">Winter Batches Filling Fast!</span>
            <SecondaryButton text="Enroll Now" target="#" />
          </div>
        </div>
    );
};