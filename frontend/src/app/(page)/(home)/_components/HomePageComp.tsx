import React, { Suspense } from "react";
import HeroComp from "./HeroComp/HeroComp";
import { HomePageCompProps } from "../types";
import TopSkills from "./SkillsComp/TopSkills";
import FeaturedProjects from "./Featured/FeaturedProjects";
import ContactForm from "@/components/Contact/ContactForm";

const HomePageComp = ({
  landingInfo,
  topSkills,
  coreSkills,
  featuredProjects,
}: HomePageCompProps) => {
  return (
    <div className="flex flex-col gap-[2.5rem] sm:gap-14 overflow-x-hidden">
      <HeroComp landingInfo={landingInfo} />
      {coreSkills && topSkills && (
        <TopSkills coreSkills={coreSkills} topSkills={topSkills} />
      )}
      {featuredProjects && (
        <FeaturedProjects featuredProjects={featuredProjects} />
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </div>
  );
};

export default HomePageComp;
