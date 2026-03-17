import { Hero } from "humain-educators/Hero";
import { Band } from "humain-educators/Band";
import { GameChanger } from "humain-educators/Benefits";
import { Founder }  from "humain-educators/Founder";
import { Certificate } from "humain-educators/Certificate";
import { Testimonials } from "humain-educators/Testimonials";
import { AiRoadmap } from "humain-educators/AiRoadmap";
import { WhoWeAre } from "humain-educators/WhoWeAre";
import { Instructors } from "humain-educators/Instructors";
import { TeacherShowcase } from "humain-educators/TeacherShowcase";
import { VideoTestimonials } from "humain-educators/VideoTestimonials";
import { ChooseBatch } from "humain-educators/ChooseBatch";



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
		<ChooseBatch />
        <VideoTestimonials />
        <TeacherShowcase />
        <Founder />
        <Certificate />
        </>
    );
}