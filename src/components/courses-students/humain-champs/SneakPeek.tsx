import { VideoCard } from "ui/VideoCard";
import { sneakpeekLink } from "./data/studentVideos";

export const SneakPeek = () => {
    return (
        <div className="py-6 md:py-10">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl md:text-6xl font-semibold flex flex-col justify-center text-center py-6 md:py-10">                    
                    <span className='text-sage'>A Sneak Peek Into Our Fun,</span>
                    <span className='text-terracotta'>Interactive Live Classes</span>
                </h1>
                <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mx-6 mb-10" />
            </div>
            <div className="relative w-screen md:w-[80vw] lg:w-[70vw] h-auto mx-auto">
                <div className="w-full mx-auto z-0">
                    <VideoCard video={{ id: 1, url: sneakpeekLink }} cardWidth="w-full"/>
                </div>
                <div className=" hidden text-white absolute top-0 left-0 z-5 w-full-h-full">
                    overlay
                </div>
            </div>
        </div>
    );
};