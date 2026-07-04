import { Marquee } from "ui/marquee";
import { TestimonialCard } from "ui/TestimonialCard";
import { testimonials } from "./data/testimonials";

export const Testimonials = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center px-5 py-10 ">            
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