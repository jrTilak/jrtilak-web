import Image from "next/image";
import Link from "next/link";
import GALink from "../Analytics/GALink";

interface SocialLinkProps {
  type: string;
  icon: string;
  username: string;
  href: string;
}
const SocialLink = ({ type, icon, username, href }: SocialLinkProps) => {
  return (
    <GALink
      ga={{
        category: "Social Links",
        action: "click",
        label: type,
      }}
      href={href}
      className="flex items-center px-4 py-2 text-white  hover:bg-gray-700  rounded-md  hover:scale-105 transition-all"
    >
      <Image
        src={icon}
        alt={type}
        height={7}
        width={7}
        className="h-7 w-7 mr-2"
      />
      <span className="text-sm">{username}</span>
    </GALink>
  );
};
export default SocialLink;
