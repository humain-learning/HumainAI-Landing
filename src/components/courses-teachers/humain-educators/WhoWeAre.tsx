export const WhoWeAre = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center px-5 py-10">
            <div className="relative w-[90vw] flex flex-col items-center md:items-start justify-center mx-auto">
                <h1 className="text-3xl md:text-6xl font-semibold text-center md:text-start md:px-6 py-[1.5rem]">
                    <span className=" text-terracotta">
                        Why Choose
                    </span>
                    <br />
                    <span className="text-sage">hum<span className="text-terracotta">ai</span>n</span>
                </h1>
                <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mx-auto md:mx-6 mb-10" />
            </div>

            <div className="w-full md:w-[90vw] flex flex-col items-center justify-center">
                {/* <span className="underline underline-offset-10 text-xl md:text-3xl font-semibold mx-auto px-3 md:px-6 pb-5 md:pb-10">Our Philosophy</span> */}
                <p className="text-center text-lg md:text-xl mx-auto px-3 md:px-6">
                    At Humain Learning, we believe the future of education lies at the intersection of human values and artificial intelligence. Our name reflects our core philosophy: HUMAIN, putting the human at the center of technological transformation. An educator becomes special in this changing world because they are now entrusted to create a world of hybrid intelligent students in their classrooms -one that has high adaptability as well as high emotional Intelligence. Therefore, it is foremost important for the teacher to display their mastery with the tools in the classroom, steering, protecting, and supporting the choices of the students who learn the teacher more than  from the teacher.
                </p>
            </div>

            <div className="flex justify-center items-start">
                
            </div>
        </div>
    );
};