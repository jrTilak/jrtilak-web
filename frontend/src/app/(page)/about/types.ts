import { TimelineProps } from "@/types/Journey/timeline.types";
import { CertificationType } from "@/types/others/certification.types";
import {
  CoreSkillTypes,
  SkillType,
  SkillsCollectionType,
} from "@/types/skills/skills.types";

//starts

export interface TabButtonsProps {
  activeTab: AboutTabsType;
}

export type AboutTabsType =
  | "about"
  | "skills"
  | "education"
  | "experience"
  | "certifications";
export interface TabsContentProps {
  tab: string;
}

export interface AboutTabProps {
  aboutMd: any;
}

export type TabsType = "techs" | "tools" | "core";

export interface SkillsCompProps {
  skillTab: TabsType;
  skills: SkillsCollectionType | null;
}
