import SKILLS_JSON from "@/assets/json/skills";
import { SkillCardWrapper } from "./SkillCard";
import { Suspense } from "react";

interface SkillsListCompProps {
  skills?: typeof SKILLS_JSON.techs | typeof SKILLS_JSON.tools;
}
const SkillsListComp = ({ skills }: SkillsListCompProps) => {
  const skillsList = skills || SKILLS_JSON.techs;
  return (
    <div className="flex ">
      <div className="grid grid-cols-2 gap-2">
        {skillsList?.map((skill) => {
          return (
            <Suspense key={skill._id}>
              <SkillCardWrapper skill={skill} />
            </Suspense>
          );
        })}
        <Suspense>
          <SkillCardWrapper skill={null} />
        </Suspense>
      </div>
    </div>
  );
};
export default SkillsListComp;
