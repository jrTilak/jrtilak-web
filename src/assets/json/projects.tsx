import travellianImg from "@/assets/project-img/travellian.png";
import bumblebeeIMg from "@/assets/project-img/bumblebee.png";
import stringifyImg from "@/assets/project-img/stringify.png";
import fsuImg from "@/assets/project-img/fsu.jpg";
import cGamesImg from "@/assets/project-img/c.png";
// import edubrainImg from "@/assets/project-img/edubrain.png";
import javaSportsImg from "@/assets/project-img/java-sports.png";
import dhanalakshmiImg from "@/assets/project-img/dhanalakshmi.png";
import lazykitImg from "@/assets/project-img/lazykit.png";
import Image, { StaticImageData } from "next/image";
import FSU from "@/components/ProjectsDetails/fsu";
import Dhanalaxmi from "@/components/ProjectsDetails/dhanalaxmi";
import Bumblebee from "@/components/ProjectsDetails/bumblebee";
import JavaSports from "@/components/ProjectsDetails/java-sports";
import Lazykit from "@/components/ProjectsDetails/lazykit";
import aces from "@/assets/project-img/aces.png";

const PROJECTS_JSON: {
  img: string | StaticImageData;
  sourceCode?: string;
  techs: string[];
  liveDemo: string;
  type: string;
  title: string;
  desc: string;
  _id: string;
  createdAt: string;
  isFeatured?: boolean;
  isUnderDevelopment?: boolean;
  orgType: "Personal" | "Academic" | "Organization";
  infoComponent?: React.FC;
}[] = [
  {
    img: aces,
    techs: ["Next.js", "Tailwind CSS", "Vercel"],
    liveDemo: "https://aces-ioepc.vercel.app/",
    type: "Full Stack Web App",
    title: "ACES Web - IOE",
    desc: "ACES web is a platform for the Association of Computer Engineering Students (ACES) of the IOE, Purwanchal Campus, Dharan. It is a full stack web application with client-side, admin-panel and apis. It is built using Next.js, Tailwind CSS, and Vercel.",
    _id: "aces",
    createdAt: "May 5, 2024",
    isFeatured: true,
    orgType: "Academic",
    infoComponent: () => (
      <Image
        src={aces}
        alt="C Games"
        width={500}
        height={500}
        quality={100}
        placeholder="blur"
        className="mt-4 rounded-md"
      />
    ),
  },
  {
    img: lazykitImg,
    sourceCode: "https://github.com/jrTilak/lazykit",
    techs: ["Next.js", "NPM Package", "Vitest", "Tailwind CSS", "Markdown"],
    liveDemo: "https://lazykit.thapatilak.com.np/",
    type: "Web App / NPM Package",
    title: "Lazykit - Initial Release! @v1.0.0",
    desc: "Trim the fat, keep the function! Refine your JavaScript workflows with Lazykit. A concentrated collection of lean utility functions, not a bloated library. Lazykit has many utility functions that can help you in your day-to-day coding tasks that you can just copy-paste or add as an NPM package.",
    _id: "lazykit",
    createdAt: "March 17, 2024",
    isFeatured: true,
    orgType: "Personal",
    infoComponent: Lazykit,
  },
  {
    img: javaSportsImg,
    techs: ["React.js", "Vite.js", "Tailwind CSS"],
    liveDemo: "https://javasports.in/",
    type: "Web App",
    title: "Javasports - E-commerce Platform",
    desc: "Javasports is an e-commerce platform that offers a wide range of sports goods and equipment. The platform provides a seamless shopping experience with a user-friendly interface and secure payment options. It is built using React.js, Vite.js, and Tailwind CSS.",
    _id: "java-sports",
    createdAt: "February 5, 2024",
    isFeatured: true,
    orgType: "Organization",
    infoComponent: JavaSports,
  },
  {
    img: bumblebeeIMg,
    sourceCode: "https://github.com/jrTilak/bumbleBee",
    techs: ["Express.js", "Mongodb", "Vite.js", "React.js", "Tailwind CSS"],
    liveDemo: "https://bumblebee.thapatilak.com.np/",
    type: "Web App",
    title: "Bumblebee 2.0 - AI Powered Chatbot",
    desc: "Bumblebee is an AI powered chatbot that can help you with your queries. It is a web based application that can be accessed from anywhere. It is built using MERN Stack and based on Google's gemini AI model with the profile of the transformer character Bumblebee. ",
    _id: "bumblebee",
    createdAt: "Jan 18, 2024",
    orgType: "Personal",
    infoComponent: Bumblebee,
  },
  // {
  //   img: edubrainImg,
  //   techs: ["React.js", "Framer Motion", "Tailwind CSS"],
  //   liveDemo: "https://edubrain.vercel.app/",
  //   type: "Web App",
  //   title: "EduBrain - Online Learning Platform",
  //   desc: "EduBrain is an online learning platform that offers a wide range of courses to help you learn new skills and advance your career. It is built using React.js, Framer Motion, and Tailwind CSS. The platform provides a seamless learning experience with interactive lessons, quizzes, and assignments.",
  //   _id: "edubrain",
  //   createdAt: "March 10, 2024",
  //   isFeatured: true,
  //   isUnderDevelopment: true,
  //   orgType: "Organization",
  // },
  {
    img: dhanalakshmiImg,
    techs: ["React.js", "Tailwind CSS"],
    liveDemo: "https://dhanlakshmifrontend.vercel.app/",
    type: "Web App",
    title: "Dhanlakshmi - Agriculture Platform",
    desc: "Dhanlakshmi is an agriculture platform that offers a wide range of agriculture products to help you grow your crops and advance your farming. You can also register as a seller and sell your products. ",
    _id: "dhanlakshmi",
    createdAt: "April 10, 2024",
    orgType: "Organization",
    infoComponent: Dhanalaxmi,
  },
  {
    img: travellianImg,
    sourceCode: "https://github.com/jrTilak/travellian-frontend",
    techs: ["React.js", "Vite.js", "Tailwind CSS"],
    liveDemo: "https://travellian.thapatilak.com.np/",
    type: "Web App",
    title: "Travellian - Travel Across the Globe",
    desc: "Travellian is a travel agency Web App that provides the best travel experience for your journey. It is built with Vite, React, and Tailwind CSS as a front-end internship assignment.",
    _id: "travellian",
    createdAt: "Feb 1, 2024",
    orgType: "Personal",
    infoComponent: () => (
      <Image
        src={travellianImg}
        alt="C Games"
        width={500}
        height={500}
        quality={100}
        placeholder="blur"
        className="mt-4 rounded-md"
      />
    ),
  },
  {
    img: fsuImg,
    sourceCode: "https://github.com/jrTilak/FSU",
    techs: ["Next.js", "Javascript", "Tailwind CSS"],
    liveDemo: "https://fsu.thapatilak.com.np/",
    type: "Web App",
    title: "FSU - WebDev Competition",
    desc: "Welcome to the FSU Free Student Union IOE ERC Nepal Web App! This Web App has been developed as part of a web development competition using Next.js, React.js, Tailwind CSS, and Email.js, ensuring a seamless and responsive user experience.",
    _id: "fsu",
    createdAt: "Jun 28, 2023",
    orgType: "Personal",
    infoComponent: FSU,
  },
  {
    type: "Web App",
    techs: ["Vite.js", "React.js", "CSS", "HTML"],
    liveDemo: "https://stringify.thapatilak.com.np/",
    img: stringifyImg,
    desc: "Stringify is a user-friendly web app that simplifies text manipulation. With its intuitive interface, you can effortlessly perform tasks like case conversions, find and replace, URL encoding, and much more.",
    sourceCode: "https://github.com/jrTilak/Stringify",
    title: "Stringify - Effortless Text Manipulation",
    _id: "stringify",
    createdAt: "Jun 13, 2023",
    orgType: "Personal",
    infoComponent: () => (
      <Image
        src={stringifyImg}
        alt="C Games"
        width={500}
        height={500}
        quality={100}
        placeholder="blur"
        className="mt-4 rounded-md"
      />
    ),
  },
  {
    sourceCode: "https://github.com/jrTilak/C-Games",
    img: cGamesImg,
    desc: "C Games is a collection of interactive games developed as the 1st-semester project for the C programming subject at the IOE, Purwanchal Campus, Dharan. The program aims to provide a fun and engaging experience for users, allowing them to play various games. It also includes features like user account creation, login, game history tracking, and high-score recording.",
    title: "C Games - 1st sem Project",
    createdAt: "Jul 20, 2023",
    techs: ["C"],
    liveDemo: "https://github.com/jrTilak/C-Games",
    type: "CLI Game",
    _id: "c-games",
    orgType: "Academic",
    infoComponent: () => (
      <Image
        src={cGamesImg}
        alt="C Games"
        width={500}
        height={500}
        quality={100}
        placeholder="blur"
        className="mt-4 rounded-md"
      />
    ),
  },
];

export default PROJECTS_JSON;
