import Image from "next/image";
import htmlIcon from "@/assets/svg/html-5-svgrepo-com.svg";
import cssIcon from "@/assets/svg/css-3-svgrepo-com.svg";
import tailwindIcon from "@/assets/svg/tailwind-svgrepo-com.svg";
import bootstrapIcon from "@/assets/svg/bootstrap-svgrepo-com.svg";
import sassIcon from "@/assets/svg/sass-svgrepo-com.svg";
import javascriptIcon from "@/assets/svg/javascript-svgrepo-com.svg";
import nodejsIcon from "@/assets/svg/nodejs-icon-svgrepo-com.svg";
import reactjsIcon from "@/assets/svg/reactjs-svgrepo-com.svg";
import nextjsIcon from "@/assets/svg/nextjs-fill-svgrepo-com.svg";
import firebaseIcon from "@/assets/svg/firebase-svgrepo-com.svg";
import mongodbIcon from "@/assets/svg/mongo-svgrepo-com.svg";

export const techsList = [
  {
    name: "HTML",
    icon: (
      <Image
        className="h-5 w-5 sm:h-7 sm:w-7  group-hover:opacity-100"
        src={htmlIcon}
        style={{opacity:0.7}}
        alt="html"
        height={7}
        width={7}
      />
    ),
  },
  {
    name: "CSS",
    icon: (
      <Image
        className="h-5 w-5 sm:h-7 sm:w-7  group-hover:opacity-100"
        src={cssIcon}
        style={{opacity:0.7}}
        alt="css"
        height={7}
        width={7}
      />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <Image
        className="h-5 w-5 sm:h-7 sm:w-7  group-hover:opacity-100"
        src={tailwindIcon}
        style={{opacity:0.7}}
        alt="tailwind"
        height={7}
        width={7}
      />
    ),
  },
  {
    name: "Bootstrap",
    icon: (
      <Image
        className="h-5 w-5 sm:h-7 sm:w-7  group-hover:opacity-100"
        src={bootstrapIcon}
        style={{opacity:0.7}}
        alt="bootstrap"
        height={7}
        width={7}
      />
    ),
  },
  {
    name: "SASS/SCSS",
    icon: (
      <Image
        className="h-5 w-5 sm:h-7 sm:w-7  group-hover:opacity-100"
        src={sassIcon}
        style={{opacity:0.7}}
        alt="sass"
        height={7}
        width={7}
      />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <Image
        className="h-5 w-5 sm:h-7 sm:w-7  group-hover:opacity-100"
        src={javascriptIcon}
        style={{opacity:0.7}}
        alt="javascript"
        height={7}
        width={7}
      />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <Image
        className="h-5 w-5 sm:h-7 sm:w-7  group-hover:opacity-100"
        src={nodejsIcon}
        style={{opacity:0.7}}
        alt="nodejs"
        height={7}
        width={7}
      />
    ),
  },

  {
    name: "React.js",
    icon: (
      <Image
        className="h-5 w-5 sm:h-7 sm:w-7  group-hover:opacity-100"
        src={reactjsIcon}
        style={{opacity:0.7}}
        alt="reactjs"
        height={7}
        width={7}
      />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <Image
        className="h-5 w-5 sm:h-7 sm:w-7  group-hover:opacity-100"
        src={nextjsIcon}
        style={{opacity:0.7}}
        alt="nextjs"
        height={7}
        width={7}
      />
    ),
  },
  {
    name: "Firebase",
    icon: (
      <Image
        className="h-5 w-5 sm:h-7 sm:w-7  group-hover:opacity-100"
        src={firebaseIcon}
        style={{opacity:0.7}}
        alt="firebase"
        height={7}
        width={7}
      />
    ),
  },
  {
    name: "MongoDb",
    icon: (
      <Image
        className="h-5 w-5 sm:h-7 sm:w-7  group-hover:opacity-100"
        src={mongodbIcon}
        style={{opacity:0.7}}
        alt="mongodb"
        height={7}
        width={7}
      />
    ),
  },
];
