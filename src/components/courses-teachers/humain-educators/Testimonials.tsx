import { Marquee } from "ui/marquee";
import { TestimonialCard } from "ui/TestimonialCard";
import { testimonials } from "./data/testimonials";

export const Testimonials = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center px-5 py-10 ">
            
            <div className="relative w-[90vw] flex flex-col items-center md:items-start justify-center mx-auto">
                <h1 className="text-3xl md:text-6xl font-semibold text-center md:text-start md:px-6 py-[1.5rem]">
                    <span className=" text-terracotta">
                        Benefits Across
                    </span>
                    <br/>
                    <span className="text-sage">
                        All Boards and Grades
                    </span>
                </h1>
                <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mx-auto md:mx-6 mb-10" />
            </div>
            
            <div className="flex w-full items-center justify-center gap-5">


                <Marquee 
                        repeat={3} 
                        pauseOnHover={true}
                        className=" [--duration:100s]"
                    >
                        {testimonials.map((testimonial, i) => (
                        <div 
                            key={i} 
                            className="w-[320px] md:w-[360px] px-2"
                        >
                            <TestimonialCard
                            index={i}
                            name={testimonial.name}
                            about={testimonial.about}
                            quote={testimonial.quote}
                            />
                        </div>
                        ))}
                    </Marquee>
                </div>
        </div>
    );
};