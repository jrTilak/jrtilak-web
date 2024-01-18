import SkillsListComp from "@/components/SkillsCards/SkillCards/SkillsListComp";
import CoreSkillsListComp from "@/components/SkillsCards/CoreSkillCards/CoreSkillsListComp";
import SKILLS_JSON from "@/assets/json/skills";
const TopSkills = () => {
  const coreSkills = SKILLS_JSON.core;
  const topSkills = [...SKILLS_JSON.techs.filter((tech) => tech.isFeatured)];
  return (
    <div className="">
      <div className="flex items-center justify-between mb-2 sm:mb-4 ">
        <h1 className="mb-4 text-3xl font-semibold leading-none underline xs:text-4xl sm:text-5xl xl:text-6xl underline-offset-4">
          Top Skills
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 mx-auto md:flex-row">
        <SkillsListComp skills={topSkills} />
        <div className="h-[300px] hidden md:block w-0.5 rounded-md self-stretch bg-gradient-to-tr from-transparent via-muted-foreground to-transparent opacity-20 dark:opacity-100" />
        <hr className="h-0.5 w-full md:hidden" />
        <CoreSkillsListComp coreSkills={coreSkills} />
      </div>
    </div>
  );
};
export default TopSkills;
