import { models, tools } from "./data";
import { Marquee } from "ui/marquee";

export const Tools = () => {
    return (
        <div className="w-full bg-sage py-5 md:py-10">
            <div className="flex flex-col w-[70vw] items-center justify-center mx-auto ">
                <h1 className="text-3xl md:text-5xl font-semibold py-6 text-center">
                    <span className="text-white">Your Child Learns 15+ Powerful AI Tools</span>
                </h1>
                <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-3 border-white mx-6 mb-5" />
            </div>
            <Marquee className="py-5  [--duration:30s]">
                {models.map((model, index) => (
                    <img src={model} key={index} alt={`AI Model ${index + 1}`} className="h-10 md:h-15 mx-3 md:mx-8" />
                ))}
            </Marquee>
            <Marquee className="pt-5 pb-10 [--duration:30s]" reverse>
                {tools.map((tool, index) => (
                    <img src={tool} key={index} alt={`AI Tool ${index + 1}`} className="h-5 md:h-7 mx-3 md:mx-8" />
                ))}
            </Marquee>
        </div>
    );
};