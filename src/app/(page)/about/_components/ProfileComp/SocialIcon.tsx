import Image from "next/image";
import Link from "next/link";

interface SocialIconProps {
  href: string;
  icon: string;
}
const SocialIcon = ({ href, icon }: SocialIconProps) => {
  return (
    <Link href={href} target="_blank" className="group">
      <div className="border-background bg-background p-1 flex items-center justify-center mx-auto border-2 rounded-full w-10 h-10 ">
        <Image
          src={icon}
          width={35}
          height={35}
          alt=""
          className="mix-blend-multiply"
        />
      </div>
    </Link>
  );
};

export default SocialIcon;
