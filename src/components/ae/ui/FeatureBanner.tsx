interface FeatureBannerProps {
  title: string;
  subtitle?: string;
  description: string;
  icon: string;
  index: number;
}

export const FeatureBanner = ({ title, description, icon, index }: FeatureBannerProps) => {
    const bgcolour = index % 2 === 0 ? "sage" : "terracotta";
    const gradient = bgcolour === "sage" ? "from-sage to-transparent" : "from-terracotta to-transparent";
    return (
        <div>
            <div className='hidden w-full h-full md:flex flex-col relative p-5 items-center justify-start text-center'>
                <div className={`absolute top-0 w-full h-2/5 rounded-t-xl bg-${bgcolour} z-0`} />
                <div className={`absolute bottom-0 w-full h-3/5 bg-gradient-to-b ${gradient} z-0`} />
                
                <div className="w-full h-full bg-transparent flex flex-col items-center z-10">
                    
                    <img src={icon} className="object-contain w-1/2"/>
                    <div className="md:text-base lg:text-lg font-bold py-2">
                        {title}
                    </div>
                    <div className="text-sm py-2">
                        {description}
                    </div>
                </div>
            </div>

            <div className='md:hidden w-full h-full flex flex-row relative z-10 p-5  overflow-hidden items-center justify-start text-center'>
                <div className={`absolute left-0 h-full rounded-l-xl w-2/5 bg-${bgcolour} z-0`} />
                <div className={`absolute right-0 h-full w-3/5 bg-gradient-to-r ${gradient} z-0`} />
                <div className="w-full h-full z-10 bg-transparent flex items-center justify-center">
                    
                    <div className="w-1/6 text-sm md:text-lg font-bold flex flex-col items-center whitespace">
                        <img src={icon} className="object-contain" />
                        {title}
                    </div>
                    
                    <div className="w-4/5 text-xs md:text-sm px-2 text-right">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}; 