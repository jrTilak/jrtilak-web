import {
  FileText,
  GitCompareArrows,
  Home,
  Route,
  SendHorizontal,
  UserRound,
} from "lucide-react";
import { NavLinkTypes } from "../Navbar/types";

export const navLinks: NavLinkTypes[] = [
  {
    name: "Home",
    href: "/",
    LinkIcon: Home,
  },
  {
    name: "About",
    href: "/about",
    LinkIcon: UserRound,
  },
  {
    name: "Projects",
    href: "/projects",
    LinkIcon: GitCompareArrows,
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
    LinkIcon: Route,
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
    LinkIcon: FileText,
  },
  {
    name: "Contact",
    href: "/contact",
    LinkIcon: SendHorizontal,
  },
];
