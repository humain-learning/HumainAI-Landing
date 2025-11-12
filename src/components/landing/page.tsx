import Intro from './Intro';
import AiStarter from './AiStarter';
// import ProductShowcase from './ProductShowcase';
import ExpertsTeam from './ExpertsTeam';
import Testimonial from './Testimonial';
import FAQLists from './FAQLists';
import AIFramework from './AIFramework';
import WhyHumain from './WhyHumain';
import WhoAreWeCard from './WhoAreWeCard';
import OurPurpose from './OurPurpose';
import PillarsOfTheFramework from './PillarsOfTheFramework';
import Header from '../ui/Header';
// import ProductShowcase from './ProductShowcase';
const LandingPage = () => {
  return (
    <div className="relative">
      <img
        className="absolute top-0 right-0 -z-10"
        src="/assets/images/top-right-fade.png"
        alt=""
      />
      <img
        className="absolute top-[30vh] left-0 -z-10"
        src="/assets/images/central-left-fade.png"
        alt=""
      />
      <Intro />
      <OurPurpose />
      <WhoAreWeCard />
      <AIFramework />
      <PillarsOfTheFramework />
      <AiStarter />
      {/* <AIJourney /> */}
      {/* <IITGrowth /> */}
      {/* <AiStatsSection /> */}
      {/* <AiLearnPack /> */}
      {/* <ProductShowcase /> */}
      <WhyHumain />
      <ExpertsTeam />
      <Testimonial />
      <FAQLists />
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
