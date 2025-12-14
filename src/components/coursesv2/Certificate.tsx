export const Certificate = () => {
    return (
        <div className="w-[90vw] flex flex-row items-center justify-center mt-30 mb-15 mx-auto">
            <div className="w-auto flex items-center justify center objext-contain">
                <img src='/assets/Website Assets/Certificate.png' className="w-[70%] h-auto mx-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-start justify-center">
                <h1 className="flex flex-col text-6xl font-semibold py-10">
                    <span className="text-sage py-2">Certificate of Completion</span>
                    <span className="text-black py-2">For Every Learner</span>
                </h1>
                <hr className="w-1/6 border-t-3 border-terracotta mb-6" />
                <span className="text-3xl">Official Certificate issues upon course completion.</span>
            </div>

        </div>
    );
};