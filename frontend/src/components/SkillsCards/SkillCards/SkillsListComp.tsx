import SKILLS_JSON from "@/assets/json/skills";
import SkillCard, { SkillCardWrapper } from "./SkillCard";
import { Suspense } from "react";

interface SkillsListCompProps {
  skills?: (
    | {
        priority: number;
        icon: string;
        title: string;
        _id: string;
        proficiency: number;
        level: string;
        isFeatured: boolean;
      }
    | {
        proficiency: number;
        icon: string;
        title: string;
        priority: number;
        _id: string;
        level: string;
        isFeatured?: undefined;
      }
  )[];
}
const SkillsListComp = ({ skills }: SkillsListCompProps) => {
  const skillsList = skills || SKILLS_JSON.techs;
  return (
    <div className="flex ">
      <div className="grid grid-cols-2 gap-2">
        {skillsList?.map((skill) => {
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
