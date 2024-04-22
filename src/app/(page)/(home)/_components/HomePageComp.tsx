import React, { Suspense } from "react";
import HeroComp from "./HeroComp/HeroComp";
import TopSkills from "./SkillsComp/TopSkills";
import FeaturedProjects from "./Featured/FeaturedProjects";
import ContactForm from "@/components/Contact/ContactForm";
import Testimonials from "./Testimonial";

const HomePageComp = () => {
  return (
    <div className="flex flex-col gap-[2.5rem] sm:gap-14 overflow-x-hidden">
      <HeroComp />
      <TopSkills />
      <FeaturedProjects />
      <Testimonials />
      <Suspense>
        <ContactForm />
      </Suspense>
    </div>
  );
};

export default HomePageComp;
