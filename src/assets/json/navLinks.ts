import { NavLinkTypes } from "@/components/Navbar/types";
import {
  FileText,
  GitCompareArrows,
  Home,
  Keyboard,
  SendHorizontal,
  UserRound,
} from "lucide-react";

const NAV_LINKS: NavLinkTypes[] = [
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
  {
    name: "Blogs",
    href: "https://dev.to/jrtilak",
    LinkIcon: Keyboard,
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

export default NAV_LINKS;
