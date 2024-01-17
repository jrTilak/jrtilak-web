import {  CoreSkillTypes, SkillType } from "@/types/skills/skills.types";

export interface SkillCardProps {
  skill: SkillType | null;
}

export interface SkillsListCompProps {
  skills: SkillType[];
}

export interface  CoreSkillCardProps {
  coreSkill: CoreSkillTypes
}

export interface CoreSkillsListCompProps {
  coreSkills: CoreSkillTypes[];
}