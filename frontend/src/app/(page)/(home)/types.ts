import {
  LandingInfoDocTypes,
  StatsInLandingDocTypes,
} from "@/types/others/landingInfo.types";
import { ProjectDocType } from "@/types/projects/project.types";
import { CoreSkillTypes, SkillType } from "@/types/skills/skills.types";

export interface MyTitleProps {
  name: string;
  titles: (string | number)[];
}

export interface AboutProps {
  about: string;
}
export interface DownloadCVButtonProps {
  cvLink: string;
}
export interface HeroImgProps {
  img: string;
}

export interface StatsCardProps {
  stats: StatsInLandingDocTypes;
}
export interface StatsProps {
  stats: StatsInLandingDocTypes[];
}

export interface HeroCompProps {
  landingInfo: LandingInfoDocTypes;
}

export interface HomePageCompProps
  extends HeroCompProps,
    FeaturedProjectsProps {
  topSkills: SkillType[] | null;
  coreSkills: CoreSkillTypes[] | null;
}

export interface TopSkillsProps {
  topSkills: SkillType[];
  coreSkills: CoreSkillTypes[];
}

export interface FeaturedProjectsProps {
  featuredProjects: ProjectDocType[] | null;
}

