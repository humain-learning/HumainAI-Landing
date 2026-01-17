import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import { HeroVideo, heroFeatures as features} from "./data/heroFeatures";
import { VideoCard } from "../ui/VideoCard";
export const Hero = () => {
        return (
            <div className="relative w-full max-w-screen flex items-center z-10">
                {/* Mobile version */}
                <div className="md:hidden flex flex-col items-center justify-center">
                    <div className="relative w-full flex flex-col items-center justify-center mx-auto px-6">
                        <h1 className="text-4xl font-semibold text-center">
                            <span className='text-sage'>Give Your Child</span>
                            <br />
                            <span className='text-terracotta'>The AI Advantage</span>
                            <br />
                            <span className='text-sage'>This Exam Season</span>
                        </h1>
                        <hr className="w-full border-t-4 border-terracotta mt-5 mb-5" />
                        <div className="flex items-center justify-center w-full mb-8">
                            {/* <img src="/assets/images/humaincamps-temp-hero.svg" className="object-contain w-full h-auto" /> */}
                            <VideoCard 
                                video={HeroVideo} 
                                autoplay={false}
                            />
                        </div>
                        <ul className="space-y-2 pl-5 text-base">
                            {features.map((feature, index) => (
                                <li key={index} className="flex font-medium items-center gap-3">
                                    <div className="relative w-10 h-10 flex-shrink-0">
                                        <img src='/assets/icons/bubble-bg.svg' className="absolute inset-0 w-full h-full"/>
                                        <img src={feature.icon} className="absolute w-3/5 h-3/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain fill-white"/>
                                    </div> 
                                    {feature.text}
                                </li>
                            ))}
                        </ul>
                        
                        <div className="pt-6 pb-3 px-6 font-medium text-center">
                            {/* Early Bird Offer! */}
                            {/* <br /> */}
                            <span className="p-1 text-2xl font-bold text-terracotta">&#8377;11,800</span>
                            {/* <span className="p-1 text-lg line-through text-gray-500 pl-3">&#8377;11,800</span> */}
                            <span className="p-1 text-sm text-gray-500">incl. GST</span>
                        </div>
                        <div className="flex flex-row items-center justify-center px-5 pt-2 pb-5 gap-4">
                            <PrimaryButton text="Enroll Now" target="https://pages.razorpay.com/humainchamps" newTab />
                                                        <SecondaryButton text="Contact Us" target="#contact-us" />
                        </div>
                    </div>
                </div>
                {/* Larger screens version */}
                <div className="hidden md:flex flex-col md:flex-row items-center justify-center w-full">
                    <img 
                        src='/assets/Website Assets/Bubble.svg' 
                        className="absolute bottom-0 right-0 z-1 h-auto w-[43vw] object-contain" 
                    />
                    <div className="relative w-full md:w-[90vw] flex flex-col md:flex-row items-center justify-center mx-auto">
                        <div className="flex flex-col w-full md:w-[45vw] px-6 z-10">
                            <div className="flex flex-col items-center md:items-start gap-6">
                                <h1 className="text-4xl md:text-6xl font-semibold">
                                    <span className='text-sage'>Give Your Child</span>
                                    <br />
                                    <span className='text-terracotta'>The AI Advantage</span>
                                    <br />
                                    <span className='text-sage'>This Exam Season</span>
                                </h1>
                                <hr className="w-full md:w-1/4 border-t-4 border-terracotta mb-5" />
                            </div>
                            <div className="">
                                <ul className="space-y-2 pl-5 text-base md:text-lg md:text-center">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex font-medium items-center gap-3">
                                            <div className="relative w-10 h-10 flex-shrink-0">
                                                <img src='/assets/icons/bubble-bg.svg' className="absolute inset-0 w-full h-full"/>
                                                <img src={feature.icon} className="absolute w-3/5 h-3/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"/>
                                            </div> 
                                            {feature.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-6 pb-3 px-6 font-medium text-center md:text-left">
                                {/* Early Bird Offer! */}
                                {/* <br /> */}
                                <span className="p-1 text-2xl md:text-4xl font-bold text-terracotta">&#8377;11,800</span>
                                {/* <span className="p-1 text-lg md:text-2xl line-through text-gray-500 pl-3">&#8377;11,800</span> */}
                                <span className="p-1 text-sm md:text-base text-gray-500">incl. GST</span>
                            </div>
                            <div className="flex flex-col md:flex-row items-center md:justify-start justify-center px-5 pt-2 pb-5 gap-4 md:gap-0">
                                <PrimaryButton text="Enroll Now" target="https://pages.razorpay.com/humainchamps" newTab />
                                <div className="md:w-5"></div>
                                <SecondaryButton text="Contact Us" target="#contact-us" />
                            </div>
                        </div>
                        <div className="w-full md:w-[55vw] h-full z-10 flex items-center justify-center">
                            {/* <img src="/assets/images/humaincamps-temp-hero.svg" className="object-contain w-full h-full" /> */}
                            <VideoCard 
                                video={HeroVideo} 
                                autoplay={true}
                                mutable={true}
                                pausable={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
};