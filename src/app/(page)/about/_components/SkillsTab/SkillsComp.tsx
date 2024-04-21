import SKILLS_JSON from "@/assets/json/skills";
import CoreSkillCard from "@/components/SkillsCards/CoreSkillCards/CoreSkillCard";
import SkillCard, {
  SkillCardWrapper,
} from "@/components/SkillsCards/SkillCards/SkillCard";

interface SkillsCompProps {
  skillTab: string;
}

const SkillsComp = ({ skillTab }: SkillsCompProps) => {
  const skills = SKILLS_JSON;
  return (
    <section>
      {(() => {
        switch (skillTab) {
          case "core":
            return (
              <div className="flex flex-row gap-4 flex-wrap justify-center items-center mx-auto">
                {skills?.core?.map((core, i) => {
                  return (
                    <CoreSkillCard key={core._id} coreSkill={core} i={i} />
                  );
                })}
              </div>
            );
          case "tools":
            return (
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-2">
                {skills?.tools?.map((skill, i) => {
                  return (
                    <SkillCardWrapper
                      i={i}
                      key={skill._id}
                      skill={{
                        ...skill,
                        proficiency: Number(skill.proficiency),
                      }}
                    />
                  );
                })}
              </div>
            );
          default:
            return (
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-2">
                {skills?.techs?.map((skill, i) => {
                  return (
                    <SkillCardWrapper key={skill._id} skill={skill} i={i} />
                  );
                })}
              </div>
            );
        }
      })()}
    </section>
  );
};

export default SkillsComp;
