import { Suspense } from "react";
import { CoreSkillsListCompProps } from "../types";
import CoreSkillCard from "./CoreSkillCard";

const CoreSkillsListComp = ({ coreSkills }: CoreSkillsListCompProps) => {
  return (
    <div className="flex flex-col justify-center gap-4 lg:min-h-[250px]">
      {coreSkills?.map((coreSkill) => {
        return (
          <Suspense key={coreSkill._id}>
            <CoreSkillCard coreSkill={coreSkill} />
          </Suspense>
        );
      })}
    </div>
  );
};
export default CoreSkillsListComp;
