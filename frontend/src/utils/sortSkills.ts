import { SkillType } from "@/types/skills/skills.types";

export const assignLevels = (skills: SkillType[]) => {
  skills.forEach((skill) => {
    if (skill.proficiency <= 20) {
      skill.level = "Learner";
    } else if (skill.proficiency <= 40) {
      skill.level = "Intermediate";
    } else if (skill.proficiency <= 60) {
      skill.level = "Proficient";
    } else if (skill.proficiency <= 80) {
      skill.level = "Advanced";
    } else if (skill.proficiency <= 100) {
      skill.level = "Expert";
    }
  });
  return sortSkills(skills);
};

export const sortSkills = (skills: SkillType[]) => {
  return skills.sort((a, b) => b.priority - a.priority);
};
