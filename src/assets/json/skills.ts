import reactQueryIcon from "@/assets/icons/react-query-icon.svg";
import zodIcon from "@/assets/icons/zod.svg";

const CORE_SKILLS = [
  {
    desc: "I possess the skills to proficiently develop both the frontend and backend components of web applications, leveraging cutting-edge technologies such as React.js, Next.js, Node.js, Express.js, MongoDB, Firebase, and a range of other powerful tools.",
    icon: "https://www.svgrepo.com/show/261945/web-development.svg",
    title: "Web Development",
    _id: "Web_Development_2023-11-05-07:24:40",
  },
];

const TECHS = [
  {
    icon: "https://www.svgrepo.com/show/378440/nextjs-fill.svg",
    title: "Next.js",
    _id: "Next_js",
    proficiency: 90,
    level: "Expert",
    isFeatured: true,
    link: "https://nextjs.org/",
  },
  {
    icon: "https://www.svgrepo.com/show/374032/reactjs.svg",
    _id: "React_js",
    title: "React.js",
    proficiency: 60,
    level: "Proficient",
    isFeatured: true,
    link: "https://react.dev/",
  },
  {
    icon: "https://www.svgrepo.com/show/452093/redux.svg",
    _id: "Redux_js",
    title: "Redux.js",
    proficiency: 50,
    level: "Intermediate",
    link: "https://react-redux.js.org/",
  },
  {
    title: "Firebase",
    icon: "https://www.svgrepo.com/show/373595/firebase.svg",
    proficiency: 70,
    _id: "Firebase",
    level: "Proficient",
    isFeatured: true,
    link: "https://firebase.google.com/",
  },
  {
    proficiency: 30,
    icon: "https://www.svgrepo.com/show/373845/mongo.svg",
    _id: "MongoDB",
    title: "MongoDB",
    level: "Intermediate",
    isFeatured: true,
    link: "https://www.mongodb.com/",
  },
  {
    proficiency: "60",
    _id: "Express_js_2023-11-15-20:13:07",
    title: "Express.js",
    icon: "https://www.svgrepo.com/show/330398/express.svg",
    level: "Proficient",
    link: "https://expressjs.com/",
  },
  {
    proficiency: 50,
    icon: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
    title: "TypeScript",
    _id: "TypeScript",
    level: "Proficient",
    link: "https://www.typescriptlang.org/",
  },
  {
    proficiency: 79,
    title: "Node.js",
    _id: "Node_js",
    icon: "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
    level: "Advanced",
    link: "https://nodejs.org/en",
  },
  {
    _id: "JavaScript",
    proficiency: 70,
    icon: "https://www.svgrepo.com/show/353925/javascript.svg",
    title: "JavaScript",
    level: "Advanced",
    isFeatured: true,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
    _id: "TailwindCSS",
    title: "TailwindCSS",
    proficiency: 80,
    level: "Proficient",
    link: "https://tailwindcss.com/",
  },
  {
    proficiency: 50,
    title: "SASS/SCSS",
    _id: "SASS_SCSS",
    icon: "https://www.svgrepo.com/show/374067/scss2.svg",
    level: "Proficient",
    link: "https://sass-lang.com/",
  },
  {
    _id: "CSS",
    icon: "https://www.svgrepo.com/show/452185/css-3.svg",
    title: "CSS",
    proficiency: 60,
    level: "Proficient",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: "https://www.svgrepo.com/show/452228/html-5.svg",
    _id: "HTML",
    proficiency: 70,
    title: "HTML",
    level: "Proficient",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    _id: "Python",
    proficiency: 40,
    title: "Python",
    icon: "https://www.svgrepo.com/show/452091/python.svg",
    level: "Learner",
    link: "https://www.python.org/",
  },
  {
    _id: "C",
    proficiency: 70,
    title: "C",
    icon: "https://www.svgrepo.com/show/373482/c.svg",
    level: "Proficient",
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
];

const TOOLS = [
  {
    proficiency: "60",
    _id: "Vercel_2023-11-14-12:40:42",
    icon: "https://www.svgrepo.com/show/378475/vercel-fill.svg",
    title: "Vercel",
    level: "Proficient",
    link: "https://vercel.com/",
  },
  {
    proficiency: "65",
    icon: "https://docs.pmnd.rs/zustand.ico",
    _id: "Zustand_2023-11-14-12:37:10",
    title: "Zustand",
    level: "Proficient",
    link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
  },
  {
    proficiency: "65",
    icon: reactQueryIcon,
    _id: "React_Query_2023-11-14-12:37:10",
    title: "React Query",
    level: "Proficient",
    link: "https://tanstack.com/query/v3/",
  },
  {
    proficiency: "65",
    icon: "https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg",
    _id: "React_Hook_Form_2023-11-14-12:37:10",
    title: "React Hook Form",
    level: "Proficient",
    link: "https://react-hook-form.com/",
  },
  {
    proficiency: "65",
    icon: zodIcon,
    _id: "Zod_2023-11-14-12:37:10",
    title: "Zod",
    level: "Proficient",
    link: "https://zod.dev/",
  },
  {
    proficiency: "60",
    icon: "https://www.svgrepo.com/show/333088/framer.svg",
    _id: "Framer_2023-11-14-12:37:10",
    title: "Framer Motion",
    level: "Proficient",
    link: "https://www.framer.com/motion/",
  },
  {
    title: "Git",
    _id: "Git_2023-11-14-12:37:46",
    proficiency: "70",
    icon: "https://www.svgrepo.com/show/452210/git.svg",
    level: "Proficient",
    link: "https://git-scm.com/",
  },
  {
    proficiency: "65",
    icon: "https://www.svgrepo.com/show/512317/github-142.svg",
    _id: "Github_2023-11-14-12:37:10",
    title: "Github",
    level: "Proficient",
    link: "https://github.com/",
  },
  {
    title: "Axios",
    _id: "Axios_2023-11-14-12:39:41",
    icon: "https://www.svgrepo.com/show/452077/npm.svg",
    proficiency: "70",
    level: "Proficient",
    link: "https://www.npmjs.com/package/axios",
  },
  {
    title: "Postman",
    _id: "Postman_2023-11-14-12:38:26",
    proficiency: "50",
    icon: "https://www.svgrepo.com/show/354202/postman-icon.svg",
    level: "Proficient",
    link: "https://www.postman.com/",
  },
  {
    _id: "VS_Code_2023-11-05-07:35:05",
    title: "VS Code",
    icon: "https://www.svgrepo.com/show/452129/vs-code.svg",
    proficiency: 80,
    level: "Advanced",
    link: "https://code.visualstudio.com/",
  },
];

const SKILLS_JSON = {
  core: CORE_SKILLS,
  techs: TECHS,
  tools: TOOLS,
};

export default SKILLS_JSON;
