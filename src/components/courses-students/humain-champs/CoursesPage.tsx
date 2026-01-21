import { Hero } from "./Hero";
import { Band } from "./Band";
import { GameChanger } from "./GameChanger";
import { StudentCreations } from "./StudentCreations";
import { SneakPeek } from "./SneakPeek";
import { Roadmap } from "./AiRoadmap";
import { ChooseBatch } from "./ChooseBatch";
import { Tools } from "./Tools";
import { Instructors } from "./Instructors";
import { Certificate } from "./Certificate";
import { Founder } from "./Founder";
import { Parents } from "./Parents";
import { ContactUs } from "./ContactUs";

export const CoursesPage = () => {
  return (
    <section className="relative">
        <Hero />
        <Band />
        <GameChanger />
        <StudentCreations />
        <SneakPeek />
        <Roadmap />
        <ChooseBatch />
        <Tools />
        <Instructors />
        <Certificate />
        <Founder />
        <Parents />
        <ContactUs />
    </section>
  );
};
