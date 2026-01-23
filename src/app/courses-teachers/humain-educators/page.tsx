import { Hero } from "humain-educators/Hero";
import { Band } from "humain-educators/Band";
import { GameChanger } from "humain-educators/Benefits";
import { Founder }  from "humain-educators/Founder";
import { Certificate } from "humain-educators/Certificate";
import { Testimonials } from "humain-educators/Testimonials";
import { AiRoadmap } from "humain-educators/AiRoadmap";
import { WhoWeAre } from "humain-educators/WhoWeAre";
import { Instructors } from "humain-educators/Instructors";





export default function HumainEducators() {
    return (
        <>
        <Hero />
        <Band />
        <GameChanger />
        <Testimonials />
        <AiRoadmap />
        <WhoWeAre />
        <Instructors />

        <Founder />
        <Certificate />
        </>
    );
}