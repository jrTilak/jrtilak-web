import OSC from "./osc";
import PROJECTS_JSON from "./projects";
import bootcamp from "@/assets/certifications-img/The Complete 2023 Web Development Bootcamp.jpg";
import fsu from "@/assets/certifications-img/FSU Webdev.jpg";
import lor from "@/assets/certifications-img/Letter of Recommendatin.jpg";
import internshipImg from "@/assets/certifications-img/Certificate_internship.jpg";
import htmlCss from "@/assets/certifications-img/html-css.png";

const CERTIFICATIONS = [
  {
    _id: "HTML_CSS_ACES_Training",
    img: htmlCss,
    href: "https://aces.ioepc.edu.np/",
    type: "Tutor",
    title: "HTML/CSS Tutor at ACES",
  },
  {
    _id: "Web_Development_Internship_at_Prodigy_InfoTech_2023-11-04-11:10:07",
    img: internshipImg,
    href: "https://prodigyinfotech.dev/",
    type: "Internship Certificate",
    title: "Web Development Internship at Prodigy InfoTech",
  },
  {
    _id: "Letter_of_Recommendation_from_Prodigy_InfoTech_2023-11-04-11:10:07",
    img: lor,
    href: "https://prodigyinfotech.dev/",
    type: "Letter of Recommendation",
    title: "Letter of Recommendation from Prodigy InfoTech",
  },
  {
    _id: "The_Complete_2023_Web_Development_Bootcamp_2023-11-04-11:10:07",
    img: bootcamp,
    href: "https://www.udemy.com/certificate/UC-82d64509-0c71-4480-b6a2-f51ec8a3dc1a/",
    type: "Web Development",
    title: "The Complete 2023 Web Development Bootcamp",
  },
  {
    href: "https://github.com/jrTilak/FSU",
    title: "FSU WebDev Competition",
    type: "WebDev Competition",
    _id: "FSU_WebDev_Competition_2023-11-18-18:14:43",
    img: fsu,
  },
];

const experienceInMilliseconds =
  new Date().getTime() - new Date("2022-10-01").getTime();
const experienceInYears =
  experienceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
export const formattedExperience = experienceInYears.toFixed(1);

const STATS = [
  {
    count: PROJECTS_JSON.length.toString(),
    desc: `Completed ${PROJECTS_JSON.length.toString()} projects.`,
    type: "Projects",
    link: "/projects",
  },
  {
    count: CERTIFICATIONS.length.toString(),
    desc: `${CERTIFICATIONS.length.toString()} certifications from hackathons, courses etc`,
    type: "Certifications",
    link: "/about/certifications",
  },
  {
    count: OSC.length.toString(),
    desc: `${OSC.length.toString()} open source contributions till now`,
    type: "OS Contributions",
    link: "/osc",
  },
  {
    count: `${formattedExperience} yrs`,
    desc: `I have ${formattedExperience} yrs+ years of experience.`,
    type: "Experience",
    link: "/about/experience",
  },
];

const TITLES = [
  "Full Stack Developer",
  "MERN Stack",
  "CS Student",
  "Freelancer",
];

const ABOUT = `🙋\u200d♂️ Greetings! I'm Tilak Thapa(jrTilak), a passionate web developer with more than ${formattedExperience} years of experience. I specialize web development in \`MERN Stack\` and also proficient in \`Next.js\`. I'm also a huge fan of open-source. I'm currently looking for opportunities to work as a Full Stack Developer.`;

const EDUCATION = [
  {
    status: "Enrolled",
    date: "04/2023",
    title: "Bachelor in Computer Engineering",
    desc: "Transitioning to the realm of higher education, I am currently pursuing a Bachelor's in Computer Engineering at IOE Purwanchal Campus in Dharan.",
    _id: "Bachelor_in_Computer_Engineering_2023-11-04-13:53:42",
    link: "https://ioepc.edu.np/",
  },
  {
    title: "Higher Secondary (11-12)",
    date: "09/2022",
    status: "Completed",
    desc: "Continuing to the higher secondary level at Tulsi English Boarding School, I delved into the Sciences, majoring in both Biology and Mathematics.",
    _id: "Secondary_Level_2023-11-04-13:55:24",
  },
  {
    desc: "I embarked on my secondary education at Bal Sahara English Boarding School, choosing subjects like Computer Science and Optional Mathematics. My time there was defined by a genuine enjoyment of Science and Math.",
    _id: "Lower_Secondary_Level_2023-11-04-13:56:38",
    title: "Secondary Level (1-10)",
    status: "Completed",
    date: "08/2020",
  },
];

const ABOUT_JSON = {
  tagline: "React.js Developer | MERN | Next.js",
  coverImg: "/cover-img.jpeg",
  name: "Tilak Thapa",
  img: "/jrtilak.jpg",
  nickname: "jrTilak",
  cvLink: "/jrtilak-cv.pdf",
  titles: TITLES,
  stats: STATS,
  about: ABOUT,
  greetings: "Hey!",
  education: EDUCATION,
  certifications: CERTIFICATIONS,
};
export default ABOUT_JSON;
