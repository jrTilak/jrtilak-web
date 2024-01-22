import {
  FileText,
  Gem,
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
  },
  // {
  //   name: "Blogs",
  //   href: "/blogs",
  //   LinkIcon: BsFillFileTextFill,
  // },
  // {
  //   name: "Journey",
  //   href: "/journey",
  //   LinkIcon: Route,
  // },
  {
    name: "Services",
    href: "/services",
    LinkIcon: Gem,
  },
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
