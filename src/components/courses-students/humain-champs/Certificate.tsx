export const Certificate = () => {
    return (
        <div className="w-full md:w-[90vw] flex flex-col md:flex-row items-center justify-center mt-10 md:mt-30 mb-5 md:mb-15 mx-auto">
            <div className="w-full md:w-1/2 flex items-center justify-center object-contain order-2 md:order-1">
                <img src='/assets/Website Assets/Certificate-new.png' className="w-full md:w-[70%] h-auto border-2 border-black" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-4 md:px-0 order-1 md:order-2">
                <h1 className="flex flex-col text-4xl md:text-6xl font-semibold py-5 md:py-10 text-center md:text-start ">
                    <span className="text-sage">IIT Kharagpur</span>
                    <span className="text-terracotta">Backed Certificate</span>
                </h1>
                <hr className="w-1/2 md:w-1/6 border-t-3 border-terracotta mb-6" />
                <span className="text-xl md:text-3xl text-center md:text-start">Certificate issued on successful submission of your project to our AI Hackathon</span>
            </div>

        </div>
    );
};