import { Metadata } from "next";
import { AboutDocType } from "@/types/others/about.types";
import SkillsTab from "../../_components/SkillsTab/SkillsTab";
import Profile from "../../_components/ProfileComp/Profile";
import TabButtons from "../../_components/Tabs/TabButtons";
import { SkillsCollectionType } from "@/types/skills/skills.types";
import { skillTabs } from "../../_components/SkillsTab/SkillTabs";
import { TabsType } from "../../types";
import aboutJSON from "@/assets/json/about.json";
import skillsJSON from "@/assets/json/skills.json";

const SkillsTabPage = async ({ params }: { params: { skillTab: string } }) => {
  const qTab = decodeURIComponent(params.skillTab);

  const about = await getAboutDoc();
  const skills = await getSkillsCollection();

  const isValidTab = skillTabs
    .map((tab) => tab.name.toLowerCase())
    .includes(qTab);
  let activeTab: TabsType = "techs";
  if (isValidTab) {
    activeTab = qTab as TabsType;
  }

  return (
    <>
      <div className="flex flex-col mx-auto gap-4 items-center w-full md:w-[80vw] min-h-screen">
        <Profile about={about} />
        <hr className="w-full h-[0.5px] mt-32 sm:mt-20 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <TabButtons activeTab="skills" />
        <SkillsTab skills={skills} activeTab={activeTab} />
      </div>
    </>
  );
};
export default SkillsTabPage;

export async function generateStaticParams() {
  const tabs = skillTabs.map((tab) => tab.name.toLowerCase());
  return tabs.map((tab) => ({
    skillTab: tab,
  }));
}

//generate metadata for the SkillsTabPage
export const generateMetadata = async (): Promise<Metadata> => {
  const about = await getAboutDoc();
  return {
    title: `About | ${about?.nickname}`,
    openGraph: {
      title: `${about?.name} | ${about?.tagline}`,
      images: [
        {
          url: about?.img || "/jrtilak.jpg",
        },
      ],
    },
  };
};

const getAboutDoc = async () => {
  const about = aboutJSON;
  const mdRes = await fetch(about.aboutMd, {
    method: "GET",
    next: {
      revalidate: 3600,
    },
  });
  const mdContent = await mdRes.text();
  return {
    ...about,
    aboutMd: mdContent,
  } as AboutDocType;
};

const getSkillsCollection = async () => {
  return skillsJSON as SkillsCollectionType;
};
