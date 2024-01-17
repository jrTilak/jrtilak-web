export interface SkillType {
  _id: string;
  title: string;
  icon: string;
  priority: number;
  proficiency: number;
  level: string;
}
export interface CoreSkillTypes {
  _id: string;
  title: string;
  desc: string;
  icon: string;
  priority: number;
}

export interface SkillTypeInDb {
  _id: string;
  title: string;
  icon: string;
  priority: number;
  proficiency: number;
}

export type SkillsCollectionType = {
  core: CoreSkillTypes[];
  techs: SkillType[];
  tools: SkillType[];
  topSkills: SkillType[];
};
