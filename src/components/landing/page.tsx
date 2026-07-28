import Intro from './Intro';
import MoreThanCourse from './MoreThanCourse';
import AiStarter from './AiStarter';
// import ProductShowcase from './ProductShowcase';
import ExpertsTeam from './ExpertsTeam';
import Testimonial from './Testimonial';
import FAQLists from './FAQLists';
import BlogInsights from './BlogInsights/BlogInsights';
import AIFramework from './AIFramework';
import WhyHumain from './WhyHumain';
import WhoAreWeCard from './WhoAreWeCard';
import OurPurpose from './OurPurpose';

import PillarsOfTheFramework from './PillarsOfTheFramework/PillarsOfTheFramework';
import Programmes from './Programmes';
import RecognitionAlignment from './RecognitionAlignment';
import CtaFooter from './CtaFooter';
import Header from 'ui/Header';

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
      <MoreThanCourse />
      {/* <OurPurpose /> */}
      
      {/* <WhoAreWeCard />
      <AIFramework /> */}
      <PillarsOfTheFramework />
      <Programmes />
      {/* <AiStarter /> */}
      {/* <AIJourney /> */}
      {/* <IITGrowth /> */}
      {/* <AiStatsSection /> */}
      {/* <AiLearnPack /> */}
      {/* <ProductShowcase /> */}
      {/* <WhyHumain />
      <RecognitionAlignment /> */}
      <Testimonial />
      <ExpertsTeam />
      {/* <BlogInsights /> */}
      <FAQLists />
      <CtaFooter />
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
