import { whyusFeatures } from './data/whyUs';


export const GameChanger = () => {
    return (
        <div>
            <div className="relative w-[90vw] flex flex-col items-start justify-center mx-auto">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-start md:px-6 py-[1.5rem]">
                    <span className=" text-terracotta">
                        Why This Program is a
                    </span>
                    <br />
                    <span className="text-sage">
                        Game Changer for Students
                    </span>
                </h1>
                <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mx-6 mb-10" />
          </div>
          <div className="w-[88vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm md:gap-x-30 md:gap-y-20">
                {whyusFeatures.map((feature) => (
                    <div className="relative bg-terracotta w-auto max-h-[15vh] rounded-tl-full rounded-bl-full rounded-tr-full" key={feature.id}>
                        <div className="flex w-full h-full items-center justify-start text-white p-10">
                            <img src={feature.icon} className=" w-[10rem] z-5 mx-2"/>
                            <div className=" flex flex-col items-center justify-center z-10 mx-2">
                                <span className="font-semibold text-center p-2">
                                    {feature.title}
                                </span>
                                <div className="w-full text text-center p-2">
                                    {feature.description}
                                </div>
                            </div>
                      </div>
                    </div>
                ))}
          </div>
        </div>
    );
};