import { Metadata } from "next";
import SkillsTab from "../../_components/SkillsTab/SkillsTab";
import Profile from "../../_components/ProfileComp/Profile";
import TabButtons from "../../_components/Tabs/TabButtons";
import { skillTabs } from "../../_components/SkillsTab/SkillTabs";
import ABOUT_JSON from "@/assets/json/about";

const SkillsTabPage = async ({ params }: { params: { skillTab: string } }) => {
  const qTab = decodeURIComponent(params.skillTab);
  const isValidTab = skillTabs
    .map((tab) => tab.name.toLowerCase())
    .includes(qTab);
  let activeTab = "techs";
  if (isValidTab) {
    activeTab = qTab;
  }

  return (
    <>
      <div className="flex flex-col mx-auto gap-4 items-center w-full md:w-[80vw] min-h-screen">
        <Profile />
        <hr className="w-full h-[0.5px] mt-32 sm:mt-20 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <TabButtons activeTab="skills" />
        <SkillsTab activeTab={activeTab} />
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
  const about = ABOUT_JSON;
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
