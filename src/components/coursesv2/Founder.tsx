export const Founder = () => {
    return (
        <div className="w-[90vw] flex flex-row items-center justify-center mt-30 mb-15 mx-auto px-6">
            <div className="w-1/2 flex flex-col items-start justify-center">
                <h1 className="flex flex-col text-6xl font-semibold py-10">
                    <span className="text-sage py-2">Meet</span>
                    <span className="text-black py-2">Our Founder</span>
                </h1>
                <hr className="w-1/6 border-t-3 border-terracotta mb-6" />
                <p className="text-xl">Harvard Alumnus with over <span className="font-semibold">25 years of experience</span> in education, our founder, Mr. Manit Jain, has worked with schools, teachers, and students across India. He has founded The Heritage Xperiential Learning Schools - which have been ranked #1 consistently in the country.</p>
                <br />
                <br />
                <p className="text-xl">His expertise in combining <span className="font-semibold">pedagogy with technology</span> enables us to design learning journeys that prepare students for the <span className="font-semibold">AI-first future</span> while staying grounded in values that matter.</p>
            </div>
            <div className="w-auto flex items-center justify center objext-contain">
                <img src='/assets/Website Assets/Founder.png' className="w-[90%] h-auto mx-auto" />
            </div>
        </div>
    );
};