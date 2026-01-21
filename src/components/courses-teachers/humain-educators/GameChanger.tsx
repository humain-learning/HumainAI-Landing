import { gamechangerFeatures } from './data/gamechanger';


export const GameChanger = () => {
    return (
        <div className="mt-10 md:mt-20">
            <div className="relative w-[90vw] flex flex-col items-center md:items-start justify-center mx-auto">
                <h1 className="text-3xl md:text-6xl font-semibold text-center md:text-start md:px-6 py-[1.5rem]">
                    <span className=" text-terracotta">
                        Why This Program is a
                    </span>
                    <br />
                    <span className="text-sage">
                        Game Changer for Teachers
                    </span>
                </h1>
                <hr className="w-1/2 md:w-1/4 lg:w-1/8 border-t-4 border-terracotta mx-auto md:mx-6 mb-10" />
            </div>
            <div className="flex justify-center">
                <div className="w-[88vw] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 min-[1500px]:max-w-[70vw] md:gap-x-10 md:gap-y-10 justify-center justify-items-center">
                    {gamechangerFeatures.map((feature) => (
                        <div
                            className="relative bg-terracotta w-full max-w-md md:max-w-none min-h-[120px] rounded-tl-full rounded-bl-full rounded-tr-full flex items-center justify-center p-3 md:p-6"
                            key={feature.id}
                        >
                            <div className="flex flex-row items-center justify-center h-full w-full gap-3">
                                <img
                                    src={feature.icon}
                                    className="w-10 h-10 md:w-14 md:h-14 lg:w-12 lg:h-12 object-contain"
                                    alt={feature.title}
                                />
                                <div className="flex flex-col items-start justify-center w-full">
                                    <span className="font-semibold text-white text-left text-base md:text-lg p-0 break-words w-full">
                                        {feature.title}
                                    </span>
                                    <div className="w-full text-white text-left text-xs md:text-sm p-0 break-words">
                                        {feature.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};