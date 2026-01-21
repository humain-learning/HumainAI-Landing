export const Founder = () => {
    return (
        <div className="w-full md:w-[90vw] flex flex-col md:flex-row items-center justify-center mt-10 md:mt-30 mb-5 md:mb-15 mx-auto px-3 md:px-6">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center">
                <h1 className="flex flex-col text-4xl md:text-6xl font-semibold py-5 md:py-10 text-center md:text-start">
                    <span className="text-sage py-2">Meet</span>
                    <span className="text-black py-2">Our Founder</span>
                </h1>
                <hr className="w-1/2 md:w-1/6 border-t-3 border-terracotta mb-6" />
                <p className="text-base md:text-xl text-center md:text-start">Harvard Alumnus with over <span className="font-semibold">25 years of experience</span> in education, our founder, Mr. Manit Jain, has worked with schools, teachers, and students across India. He has founded The Heritage Xperiential Learning Schools - which have been ranked #1 consistently in the country.</p>
                <br />
                <br />
                <p className="text-base md:text-xl text-center md:text-start">His expertise in combining <span className="font-semibold">pedagogy with technology</span> enables us to design learning journeys that prepare students for the <span className="font-semibold">AI-first future</span> while staying grounded in values that matter.</p>
            </div>
            <div className="w-full md:w-auto flex items-center justify-center object-contain mt-5 md:mt-0">
                <img src='/assets/Website Assets/Founder.png' className="w-full md:w-[90%] h-auto mx-auto" />
            </div>
        </div>
    );
};