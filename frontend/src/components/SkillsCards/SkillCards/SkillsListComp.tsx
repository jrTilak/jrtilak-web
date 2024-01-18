import SKILLS_JSON from "@/assets/json/skills";
import SkillCard, { SkillCardWrapper } from "./SkillCard";
import { Suspense } from "react";

const SkillsListComp = () => {
  return (
    <div className="flex ">
      <div className="grid grid-cols-2 gap-2">
        {SKILLS_JSON.techs?.map((skill) => {
          return (
            <Suspense key={skill._id}>
              <SkillCard skill={skill} />
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
