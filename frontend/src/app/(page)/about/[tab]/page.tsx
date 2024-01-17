import { Metadata } from "next";
import AboutTab from "../_components/AboutTab/AboutTab";
import Profile from "../_components/ProfileComp/Profile";
import TabButtons from "../_components/Tabs/TabButtons";
import { Tabs } from "../_components/Tabs/Tabs";
import { convertMarkdownToHtml } from "@/utils/convertMarkdownToHtml";
import { AboutDocType } from "@/types/others/about.types";
import { CertificationType } from "@/types/others/certification.types";
import { TimelineProps } from "@/types/Journey/timeline.types";
import { sortTimelineData } from "@/utils/sortTimelineData";
import { SkillsCollectionType } from "@/types/skills/skills.types";
import SkillsTab from "../_components/SkillsTab/SkillsTab";
import EducationTab from "../_components/EducationTab/EducationTab";
import CertificationTab from "../_components/CertificationTab/CertificationTab";
import ExperienceTab from "../_components/ExperienceTab/ExperienceTab";
import { AboutTabsType } from "../types";
import aboutJSON from "@/assets/json/about.json";
import skillsJSON from "@/assets/json/skills.json";
import educationJSON from "@/assets/json/education.json";
import cerficiationsJSON from "@/assets/json/certifications.json";

const Page = async ({ params }: { params: { tab: string } }) => {
  const qTab = decodeURIComponent(params.tab);
  const about = await getAboutDoc();
  const skills = await getSkillsCollection();
  const education = await getEducationDoc();
  const certifications = await getCertifications();

  const isValidTab = Tabs.map((tab) => tab.title.toLowerCase()).includes(qTab);
  let activeTab: AboutTabsType = "about";
  if (isValidTab) {
    activeTab = qTab as AboutTabsType;
  }

  return (
    <>
      <div className="flex flex-col mx-auto gap-4 items-center w-full md:w-[80vw] min-h-screen">
        <Profile about={about} />
        <hr className="w-full h-[0.5px] mt-32 sm:mt-20 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <TabButtons activeTab={isValidTab ? activeTab : "about"} />
        {(() => {
          switch (activeTab) {
            case "about":
              return <AboutTab aboutMd={about?.aboutMd} />;
            case "skills":
              return <SkillsTab activeTab="techs" skills={skills} />;
            case "education":
              return <EducationTab education={education} />;
            case "certifications":
              return <CertificationTab certifications={certifications} />;
            case "experience":
              return <ExperienceTab />;
            default:
              return <AboutTab aboutMd={about?.aboutMd} />;
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
  const html = await convertMarkdownToHtml(mdContent);
  return {
    ...about,
    aboutMd: html,
  } as AboutDocType;
};

const getSkillsCollection = async () => {
  return skillsJSON as SkillsCollectionType;
};

const getEducationDoc = async () => {
  const education: TimelineProps[] = Object.values(educationJSON);
  return sortTimelineData(education);
};

const getCertifications = async () => {
  const certifications: CertificationType[] = Object.values(cerficiationsJSON);
  return certifications;
};
