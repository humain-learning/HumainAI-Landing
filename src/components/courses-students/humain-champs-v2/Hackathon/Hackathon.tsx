export const Hackathon = () => {
    return (
        <div className="w-full md:w-[90vw] flex flex-col mx-auto md:flex-row items-center justify-center mt-10 md:mt-30 mb-5 md:mb-15">

            <div className="w-full md:w-[55%] flex items-center justify-center object-contain order-2 md:order-1 py-5">
                <img src='/assets/HCV2/images/Certificate.png' className="w-full md:w-[80%] h-auto" />
            </div>

            <div className="w-full md:w-[45%] flex flex-col md:items-start justify-start px-4 md:px-0 order-1 md:order-2">
                <h1 className="flex flex-col text-4xl md:text-6xl font-semibold py-5 md:py-10 text-start md:text-start ">
                    <span className="text-sage">AI Hackathon</span>
                    <span className="text-terracotta">Organised by E-Cell</span>
					<span>IIT Kharagpur</span>
                </h1>
                <hr className="w-1/2 md:w-1/6 border-t-3 border-terracotta mb-6" />
                <span className="text-xl md:text-3xl text-start">Certificate issued on successful submission of your project to our AI Hackathon</span>
            </div>

        </div>
    );
};