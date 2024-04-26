import Profile from "./_components/ProfileComp/Profile";
import TabsComp from "./_components/Tabs/TabButtons";
import { Metadata } from "next";
import AboutTab from "./_components/AboutTab/AboutTab";
import ABOUT_JSON from "@/assets/json/about";

const page = async () => {
  return (
    <>
      <div className="flex flex-col mx-auto gap-4 items-center w-full md:w-[80vw] min-h-screen">
        <Profile />
        <hr className="w-full h-[0.5px] mt-32 sm:mt-20 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <TabsComp activeTab="about" />
        <AboutTab />
      </div>
    </>
  );
};
export default page;

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
