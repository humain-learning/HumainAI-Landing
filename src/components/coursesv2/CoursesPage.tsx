import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

export const CoursesPage = () => {
  const features = [
    {text:'15+ AI tools', icon:'/assets/icons/bullet-icon-1.svg'},
    {text:'Live Interactive Classes', icon:'/assets/icons/bullet-icon-2.svg'},
    {text:'Certificate of Completion', icon:'/assets/icons/bullet-icon-3.svg'},
    {text:'Create AI Projects', icon:'/assets/icons/bullet-icon-4.svg'},
    {text:'LMS and community access for one year', icon:'/assets/icons/bullet-icon-5.svg'},
  ];

  return (
    <section className="relative courses-page">
      <div className="w-full flex-row max-w-[] mx-auto flex items-center z-10">
      <img 
                src='/assets/Website Assets/bubble.svg' 
                // Position absolute relative to the section
                className="absolute bottom-0 right-0 z-1 h-auto w-[50vw] object-contain" 
            />
        <div className="flex-col  px-4 sm:px-6 lg:px-8 w-1/2 z-10">
          <div className="flex flex-col items-start gap-6 ">
            <h1 className="text-6xl font-semibold">
              <span className='text-sage'>Give Your Child</span>
              <br />
              <span className='text-terracotta'>The AI Advantage</span>
              <br />
              <span className='text-sage'>This Exam Season</span>
            </h1>
            <hr className="w-1/4 border-t-2 border-terracotta mb-5" />
          </div>
          <div className=''>
            <ul className="space-y-2 pl-5 text-lg">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="relative w-10 h-10 flex-shrink-0"><img src='/assets/icons/bubble-bg.svg' className="absolute inset-0 w-full h-full"/><img src={feature.icon} className="absolute w-3/5 h-3/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"/></div> {feature.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6">
              Early Bird Offer!
              <br />
              <span className="text-4xl font-bold text-terracotta">&#8377;9440</span><span className="text-2xl line-through text-gray-500 ml-2"><s>&#8377;11,800</s></span>
          </div>
          <div className="flex flex-row items-center justify-left m-5 grid-cols-2">
            <PrimaryButton text="Enroll Now" target="#" />
            <div className="w-5"></div>
            <SecondaryButton text="Contact Us" target="#" />
          </div>     
        </div>
        <div className="w-1/2 h-full z-10">
              afadfafadfsgwrgRGSrgwrgwrgrgqwrgewrgergergff
        </div>
      </div>
    </section>
  );
};
