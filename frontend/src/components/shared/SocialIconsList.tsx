import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import { SocialIconProps } from "../Navbar/types";

export const socialIcons: SocialIconProps[] = [
  {
    type: "github",
    href: "https://github.com/jrtilak",
    Icon: FaGithub,
  },
  {
    type: "linkedin",
    href: "https://np.linkedin.com/in/jrtilak",
    Icon: GrLinkedinOption,
  },
  {
    type: "gmail",
    href: "mailto:iamjrtilak@gmail.com",
    Icon: SiGmail,
  },
  {
    type: "instagram",
    href: "https://www.instagram.com/iamjrtilak/",
    Icon: PiInstagramLogoFill,
  },
];
