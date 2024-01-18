import { Metadata } from "next";
import HomePageComp from "./_components/HomePageComp";
import ABOUT_JSON from "@/assets/json/about";

const Home = async () => {
  return <HomePageComp />;
};

export default Home;

//generate metadata for the page
export const generateMetadata = async (): Promise<Metadata> => {
  const landingInfo = { ...ABOUT_JSON };
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
