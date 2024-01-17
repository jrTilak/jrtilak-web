import SkillCard, { SkillCardWrapper } from "./SkillCard";
import { SkillsListCompProps } from "../types";
import { Suspense } from "react";

const SkillsListComp = ({ skills }: SkillsListCompProps) => {
  return (
    <div className="flex ">
      <div className="grid grid-cols-2 gap-2">
        {skills?.map((skill) => {
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
