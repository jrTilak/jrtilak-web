import { Github, Instagram, Linkedin, MailOpen } from "lucide-react";
import { SocialIconProps } from "../Navbar/types";

export const socialIcons: SocialIconProps[] = [
  {
    type: "github",
    href: "https://github.com/jrtilak",
    Icon: Github,
  },
  {
    type: "linkedin",
    href: "https://np.linkedin.com/in/jrtilak",
    Icon: Linkedin,
  },
  {
    type: "gmail",
    href: "mailto:iamjrtilak@gmail.com",
    Icon: MailOpen,
  },
  {
    type: "instagram",
    href: "https://www.instagram.com/iamjrtilak/",
    Icon: Instagram,
  },
];
