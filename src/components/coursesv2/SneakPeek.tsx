import { VideoCard } from "../ui/VideoCard";


const sneakpeekLink = "https://player.vimeo.com/video/1143055315";

export const SneakPeek = () => {
    return (
        <div className="py-10">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-6xl font-semibold w-[50vw] flex flex-col justify-center text-center py-10">                    
                    <span className='text-sage'>A Sneak Peek Into Our Fun,</span>
                    <span className='text-terracotta'>Interactive Live Classes</span>
                </h1>
                <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mx-6 mb-10" />
            </div>
            <div className="relative w-[70vw] h-auto mx-auto">
                <div className="w-full mx-auto z-0">
                    <VideoCard video={{ id: 1, url: sneakpeekLink }} cardWidth="w-full" interactive={true}/>
                </div>
                <div className="z-5 w-full-h-full">
                    overlay
                </div>
            </div>
        </div>
    );
};