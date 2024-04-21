import SKILLS_JSON from "@/assets/json/skills";
import { Suspense } from "react";
import CoreSkillCard from "./CoreSkillCard";

const CoreSkillsListComp = () => {
  return (
    <div className="flex flex-col justify-center gap-4 lg:min-h-[250px]">
      {SKILLS_JSON.core?.map((coreSkill, i) => {
        return (
          <Suspense key={coreSkill._id}>
            <CoreSkillCard coreSkill={coreSkill} i={i} />
          </Suspense>
        );
      })}
    </div>
  );
};
export default CoreSkillsListComp;
