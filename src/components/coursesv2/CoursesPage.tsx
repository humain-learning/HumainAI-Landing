import { Hero } from "./Hero";
import { Band } from "./Band";
import { GameChanger } from "./GameChanger";
import { StudentCreations } from "./StudentCreations";
import { SneakPeek } from "./SneakPeek";
import { Roadmap } from "./AiRoadmap";
import { ChooseBatch } from "./ChooseBatch";

export const CoursesPage = () => {
  return (
    <section>
        <Hero />
        <Band />
        <GameChanger />
        <StudentCreations />
        <SneakPeek />
        <Roadmap />
        <ChooseBatch />
    </section>
  );
};
