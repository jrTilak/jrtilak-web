export interface LandingInfoDocTypes {
  about: string;
  cvLink: string;
  greetings: string;
  img: string;
  name: string;
  titles: (string | number)[];
  stats: StatsInLandingDocTypes[];
}

export type StatsInLandingDocTypes =
  | ProjectStatsType
  | OsContributionsStatsType
  | ExperienceStatsType
  | CertificationStatsType;

export interface ProjectStatsType {
  count: string;
  desc: string;
  type: "Projects";
}

export interface OsContributionsStatsType {
  count: string;
  desc: string;
  type: "OS Contributions";
}

export interface ExperienceStatsType {
  count: string;
  desc: string;
  type: "Experience";
}

export interface CertificationStatsType {
  count: string;
  desc: string;
  type: "Certifications";
}

// inside db

export interface LandingInfoDocTypesInDb {
  about: string;
  cvLink: string;
  greetings: string;
  img: string;
  name: string;
  titles: string[];
  stats: StatsInLandingDocTypesInDb[];
}

export type StatsInLandingDocTypesInDb =
  | ProjectStatsTypeInDb
  | ExperienceStatsTypeInDb
  | CertificationStatsTypeInDb
  | OsContributionsStatsType;

export interface ProjectStatsTypeInDb {
  desc: string;
  type: "Projects";
}

export interface ExperienceStatsTypeInDb {
  date: string;
  desc: string;
  type: "Experience";
}

export interface CertificationStatsTypeInDb {
  desc: string;
  type: "Certifications";
}
