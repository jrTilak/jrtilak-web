import Image from "next/image";
import Link from "next/link";

interface SocialLinkProps {
  type: string;
  icon: string;
  username: string;
  href: string;
}
const SocialLink = ({ type, icon, username, href }: SocialLinkProps) => {
  return (
    <Link
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
    </Link>
  );
};
export default SocialLink;
