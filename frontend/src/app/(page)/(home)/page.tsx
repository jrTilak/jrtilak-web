import { Metadata } from "next";
import HomePageComp from "./_components/HomePageComp";
import { LandingInfoDocTypes } from "@/types/others/landingInfo.types";
import { CoreSkillTypes, SkillType } from "@/types/skills/skills.types";
import { ProjectDocType } from "@/types/projects/project.types";
import landingInfoJSON from "@/assets/json/landing-info.json";
import topSKillsJSON from "@/assets/json/top-skills.json";
import coreSkillsJSON from "@/assets/json/core-skills.json";
import projectsJSON from "@/assets/json/projects.json";

const Home = async () => {
  const landingInfo = await getLandingInfo();
  const topSkills = await getTopSkillsDoc();
  const coreSkills = await getCoreSkillsDoc();
  const featuredProjects = await getFeaturedProjects();

  return (
    <>
      <HomePageComp
        landingInfo={landingInfo}
        topSkills={topSkills}
        coreSkills={coreSkills}
        featuredProjects={featuredProjects}
      />
    </>
  );
};

export default Home;

//generate metadata for the page
export const generateMetadata = async (): Promise<Metadata> => {
  const landingInfo = await getLandingInfo();
  return {
    title: `${landingInfo.name} | ${landingInfo.titles[0]}`,
    description: landingInfo.about,
    openGraph: {
      title: `${landingInfo.name} | ${landingInfo.titles[0]}`,
      description: landingInfo.about,
      images: [
        {
          url: landingInfo.img,
        },
      ],
    },
  };
};

//get the landing info from the server
const getLandingInfo = async (): Promise<LandingInfoDocTypes> => {
  const landingInfo = landingInfoJSON;
  const returnData: LandingInfoDocTypes = {
    titles: landingInfo?.titles
      .map((str: string) => [str, str.length * 100])
      .flat(),
    img: landingInfo.img,
    cvLink: landingInfo.cvLink,
    name: landingInfo.name,
    stats: landingInfo.stats.map((stat) => ({
      count: stat.count,
      desc: stat.desc,
      type: "Certifications",
    })),
    about: landingInfo.about,
    greetings: landingInfo.greetings,
  };
  return returnData;
};

// Retrieves the top skills document from the server.
const getTopSkillsDoc = async (): Promise<SkillType[] | null> => {
  return topSKillsJSON.sort((a, b) => b.priority - a.priority) as SkillType[];
};

// Retrieves the core skills document from the server.
const getCoreSkillsDoc = async (): Promise<CoreSkillTypes[] | null> => {
  return coreSkillsJSON.sort((a, b) => b.priority - a.priority);
};

// Retrieves the featured projects from the API.
const getFeaturedProjects = async (): Promise<ProjectDocType[] | null> => {
  const featured = projectsJSON.filter((project) => project.isFeatured);
  return featured.map((project) => ({
    ...project,
    icon: project.icon || "", // Provide a default value for the icon property
  })).sort((a, b) => b.priority - a.priority);
};
