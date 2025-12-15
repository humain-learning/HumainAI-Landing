import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import { heroFeatures as features} from "./data/heroFeatures";

export const Hero = () => {
        return (
            <div className=" relative w-full flex-row max-w-screen flex items-center z-10">
                <img 
                            src='/assets/Website Assets/Bubble.svg' 
                            // Position absolute relative to the section
                            className="absolute bottom-0 right-0 z-1 h-auto w-[43vw] object-contain" 
                        />
                <div className="relative w-[90vw] flex items-center justify-center mx-auto">
                    <div className="flex-col w-1/2 sm:px-6 z-10 w">
                    <div className="flex flex-col items-start gap-6 ">
                        <h1 className="text-6xl font-semibold">
                        <span className='text-sage'>Give Your Child</span>
                        <br />
                        <span className='text-terracotta'>The AI Advantage</span>
                        <br />
                        <span className='text-sage'>This Exam Season</span>
                        </h1>
                        <hr className="w-1/4 border-t-4 border-terracotta mb-5" />
                    </div>
                    <div className=''>
                        <ul className="space-y-2 pl-5 text-lg">
                        {features.map((feature, index) => (
                            <li key={index} className="flex font-medium items-center gap-3">
                            <div className="relative w-10 h-10 flex-shrink-0"><img src='/assets/icons/bubble-bg.svg' className="absolute inset-0 w-full h-full"/><img src={feature.icon} className="absolute w-3/5 h-3/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"/></div> {feature.text}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="pt-6 pb-3 px-6 font-medium">
                        Early Bird Offer!
                        <br />
                        <span className=" p-1 text-4xl font-bold text-terracotta">&#8377;9440</span><span className="p-1 text-2xl line-through text-gray-500 pl-3">&#8377;11,800</span><span className="p-1 text-1xl text-gray-500">incl. GST</span>
                    </div>
                    <div className="flex flex-row items-center justify-left px-5 pt-2 pb-5">
                        <PrimaryButton text="Enroll Now" target="#" />
                        <div className="w-5"></div>
                        <SecondaryButton text="Contact Us" target="#" />
                    </div>     
                    </div>
                    <div className="w-1/2 h-full z-10 flex items-center justify-center">
                        <img src="/assets/images/humaincamps-temp-hero.svg" className="object-contain w-full h-full" />
                    </div>
                </div>
            </div>
        )
};