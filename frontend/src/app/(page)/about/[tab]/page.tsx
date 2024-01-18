import { Metadata } from "next";
import AboutTab from "../_components/AboutTab/AboutTab";
import Profile from "../_components/ProfileComp/Profile";
import TabButtons from "../_components/Tabs/TabButtons";
import { Tabs } from "../_components/Tabs/Tabs";
import SkillsTab from "../_components/SkillsTab/SkillsTab";
import EducationTab from "../_components/EducationTab/EducationTab";
import CertificationTab from "../_components/CertificationTab/CertificationTab";
import ExperienceTab from "../_components/ExperienceTab/ExperienceTab";
import ABOUT_JSON from "@/assets/json/about";

const Page = async ({ params }: { params: { tab: string } }) => {
  const qTab = decodeURIComponent(params.tab);

  const isValidTab = Tabs.map((tab) => tab.title.toLowerCase()).includes(qTab);
  let activeTab = "about";
  if (isValidTab) {
    activeTab = qTab;
  }

  return (
    <>
      <div className="flex flex-col mx-auto gap-4 items-center w-full md:w-[80vw] min-h-screen">
        <Profile />
        <hr className="w-full h-[0.5px] mt-32 sm:mt-20 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <TabButtons activeTab={isValidTab ? activeTab : "about"} />
        {(() => {
          switch (activeTab) {
            case "about":
              return <AboutTab  />;
            case "skills":
              return <SkillsTab activeTab="techs" />;
            case "education":
              return <EducationTab />;
            case "certifications":
              return <CertificationTab />;
            case "experience":
              return <ExperienceTab />;
            default:
              return <AboutTab  />;
          }
        })()}
      </div>
    </>
  );
};

export default Page;

export async function generateStaticParams() {
  const tabs = Tabs.map((tab) => tab.title.toLowerCase());
  return tabs.map((tab) => ({
    tab: tab,
  }));
}

//generate metadata for the page
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
