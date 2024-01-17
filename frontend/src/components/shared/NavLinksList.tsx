import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { GiJourney } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaDiagramProject } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLinkTypes } from "../Navbar/types";
import { FiFileText } from "react-icons/fi";
export const navLinks: NavLinkTypes[] = [
  {
    name: "Home",
    href: "/",
    LinkIcon: AiFillHome,
  },
  {
    name: "About",
    href: "/about",
    LinkIcon: BsFillPersonFill,
  },
  {
    name: "Projects",
    href: "/projects",
    LinkIcon: FaDiagramProject,
    tag: {
      type: "text",
      content: "9+",
    },
  },
  // {
  //   name: "Blogs",
  //   href: "/blogs",
  //   LinkIcon: BsFillFileTextFill,
  //   tag: {
  //     type: "text",
  //     content: "🔥",
  //   },
  // },
  {
    name: "Journey",
    href: "/journey",
    LinkIcon: GiJourney,
    tag: {
      type: "text",
      content: "new",
    },
  },
  // {
  //   name: "Services",
  //   href: "/services",
  //   LinkIcon: FaLaptopCode,
  // },
  {
    name: "Resume",
    href: "/cv",
    LinkIcon: FiFileText,
  },
  {
    name: "Contact",
    href: "/contact",
    LinkIcon: BiSolidMessageSquareDetail,
  },
];
