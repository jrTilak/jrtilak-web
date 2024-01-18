import Link from "next/link";
import { SocialIconProps } from "./types";

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href }) => {
  return (
    <>
      <Link target="_blank" href={href}>
        <Icon className="w-5 h-5 rounded cursor-pointer hover:scale-125 hover:text-primary transition-all" />
      </Link>
    </>
  );
};

export default SocialIcon;
