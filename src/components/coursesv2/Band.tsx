import SecondaryButton from "../ui/SecondaryButton";

export const Band = () => {
    return (
        <div className="bg-sage w-full text-white py-2">
          <div className="flex max-w-[70vw] items-center justify-between mx-auto">
            <span className="text-xl">Winter Batches Filling Fast!</span>
            <SecondaryButton text="Enroll Now" target="#" />
          </div>
        </div>
    );
};