import travellianImg from "@/assets/project-img/travellian.png";
import bumblebeeIMg from "@/assets/project-img/bumblebee.png";
import stringifyImg from "@/assets/project-img/stringify.png";
import fsuImg from "@/assets/project-img/fsu.jpg";
import cGamesImg from "@/assets/project-img/c.png";
import edubrainImg from "@/assets/project-img/edubrain.png";
import javaSportsImg from "@/assets/project-img/java-sports.png";
import dhanalakshmiImg from "@/assets/project-img/dhanalakshmi.png";

const PROJECTS_JSON = [
  {
    img: javaSportsImg,
    techs: ["React.js", "Vite.js", "Tailwind CSS"],
    liveDemo: "https://javasports.in/",
    type: "Web App",
    title: "Javasports - E-commerce Platform",
    tags: ["react app", "jrtilak", "javascript", "vite", "javasports"],
    desc: "Javasports is an e-commerce platform that offers a wide range of sports goods and equipment. The platform provides a seamless shopping experience with a user-friendly interface and secure payment options. It is built using React.js, Vite.js, and Tailwind CSS.",
    _id: "Javasports_-_E-commerce_Platform_for_Sports_Goods_2023-12-07-07:26:15",
    createdAt: "February 5, 2024",
    isFeatured: true,
  },
  {
    img: edubrainImg,
    techs: ["React.js", "Framer Motion", "Tailwind CSS"],
    liveDemo: "https://edubrain.vercel.app/",
    type: "Web App",
    title: "EduBrain - Online Learning Platform",
    tags: ["react app", "jrtilak", "javascript", "vite", "education"],
    desc: "EduBrain is an online learning platform that offers a wide range of courses to help you learn new skills and advance your career. It is built using React.js, Framer Motion, and Tailwind CSS. The platform provides a seamless learning experience with interactive lessons, quizzes, and assignments.",
    _id: "EduBrain_-_Online_Learning_Platform_2023-12-07-07:26:15",
    createdAt: "March 10, 2024",
    isFeatured: true,
    isUnderDevelopment: true,
  },
  {
    img: dhanalakshmiImg,
    techs: ["React.js", "Tailwind CSS"],
    liveDemo: "https://dhanlakshmifrontend.vercel.app/",
    type: "Web App",
    title: "Dhanlakshmi - Agriculture Platform",
    tags: ["react app", "jrtilak", "javascript", "vite", "education"],
    desc: "Dhanlakshmi is an agriculture platform that offers a wide range of agriculture products to help you grow your crops and advance your farming. You can also register as a seller and sell your products. ",
    _id: "Dhanlakshmi_-_Agriculture_Platform_2023-12-07-07:26:15",
    createdAt: "April 10, 2024",
  },
  {
    img: bumblebeeIMg,
    sourceCode: "https://github.com/jrTilak/bumbleBee",
    techs: ["Express.js", "Mongodb", "Vite.js", "React.js", "Tailwind CSS"],
    liveDemo: "https://bumblebee.thapatilak.com.np/",
    type: "Web App",
    title: "Bumblebee - AI Powered Chatbot",
    tags: ["react app", "jrtilak", "javascript", "vite", "chatbot"],
    desc: "Bumblebee is an AI powered chatbot that can help you with your queries. It is a web based application that can be accessed from anywhere. It is built using React.js, Express.js, MongoDB, and Vite.js. It uses OpenAI's GPT-3 API to generate responses to user queries.",
    _id: "Bumblebee_-_AI_Powered_Chatbot_2023-12-07-07:26:15",
    createdAt: "Jan 18, 2024",
  },
  {
    img: travellianImg,
    sourceCode: "https://github.com/jrTilak/travellian-frontend",
    techs: ["React.js", "Vite.js", "Tailwind CSS"],
    liveDemo: "https://travellian.thapatilak.com.np/",
    type: "Web App",
    title: "Travellian - Travel Across the Globe",
    tags: ["nextjs", "jrtilak", "javascript", "tailwindcss", "webdev"],
    desc: "Travellian is a travel agency Web App that provides the best travel experience for your journey. It is built with Vite, React, and Tailwind CSS as a front-end internship project.",
    _id: "Travellian_-_Travel_Across_the_Globe_2023-12-07-07:26:15",
    createdAt: "Feb 1, 2024",
  },
  {
    img: fsuImg,
    sourceCode: "https://github.com/jrTilak/FSU",
    techs: ["Next.js", "Javascript", "Tailwind CSS"],
    liveDemo: "https://fsu.thapatilak.com.np/",
    type: "Web App",
    title: "FSU - WebDev Competition",
    tags: ["nextjs", "jrtilak", "javascript", "tailwindcss", "webdev"],
    desc: "Welcome to the FSU Free Student Union IOE ERC Nepal Web App! This Web App has been developed as part of a web development competition using Next.js, React.js, Tailwind CSS, and Email.js, ensuring a seamless and responsive user experience.",
    _id: "FSU_-_WebDev_Competition_2023-12-07-07:26:15",
    createdAt: "Jun 28, 2023",
  },
  {
    type: "Web App",
    techs: ["Vite.js", "React.js", "Node.js", "CSS", "HTML"],
    liveDemo: "https://stringify.thapatilak.com.np/",
    img: stringifyImg,
    desc: "Stringify is a user-friendly web app that simplifies text manipulation. With its intuitive interface, you can effortlessly perform tasks like case conversions, find and replace, URL encoding, and much more.",
    tags: ["react app", "jrtilak", "javascript", "vite", "text tools"],
    sourceCode: "https://github.com/jrTilak/Stringify",
    title: "Stringify - Effortless Text Manipulation",
    _id: "Stringify_-_Effortless_Text_Manipulation_2023-12-07-07:26:57",
    createdAt: "Jun 13, 2023",
  },
  {
    sourceCode: "https://github.com/jrTilak/C-Games",
    img: cGamesImg,
    desc: "C Games is a collection of interactive games developed as the 1st-semester project for the C programming subject at the IOE, Purwanchal Campus, Dharan. The program aims to provide a fun and engaging experience for users, allowing them to play various games. It also includes features like user account creation, login, game history tracking, and high-score recording.",
    title: "C Games - 1st sem Project",
    tags: ["c-language", "c projects", "jrtilak"],
    createdAt: "Jul 20, 2023",
    techs: ["C"],
    liveDemo: "https://github.com/jrTilak/C-Games",
    type: "CLI Game",
    _id: "C_Games_-_1st_sem_Project_2023-12-07-07:24:38",
  },
];

export default PROJECTS_JSON;
