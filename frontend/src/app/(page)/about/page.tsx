import Profile from "./_components/ProfileComp/Profile";
import TabsComp from "./_components/Tabs/TabButtons";
import { convertMarkdownToHtml } from "@/utils/convertMarkdownToHtml";
import { Metadata } from "next";
import { AboutDocType } from "@/types/others/about.types";
import AboutTab from "./_components/AboutTab/AboutTab";
import aboutJSON from "@/assets/json/about.json";

const page = async () => {
  const about = await getAboutDoc();
  return (
    <>
      <div className="flex flex-col mx-auto gap-4 items-center w-full md:w-[80vw] min-h-screen">
        <Profile about={about} />
        <hr className="w-full h-[0.5px] mt-32 sm:mt-20 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <TabsComp activeTab="about" />
        <AboutTab aboutMd={about?.aboutMd} />
      </div>
    </>
  );
};
export default page;

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
