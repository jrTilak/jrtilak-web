import Link from "next/link";
import { NavLinkItemProps } from "./types";
import { cn } from "@/lib/utils";

const NavLinkItem: React.FC<NavLinkItemProps> = ({ link, pathName }) => {
  const { name, href, LinkIcon } = link;
  const isActiveLink = pathName.split("/")[1] === href.split("/")[1];

  return (
    <li>
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : "_self"}
        className={cn(
          "flex items-center p-2 rounded-lg  group",
          isActiveLink
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted text-muted-foreground"
        )}
      >
        <LinkIcon className="flex-shrink-0 w-5 h-5 transition duration-75 " />

        <span className="flex-1 ml-3 sm:text-lg whitespace-nowrap">{name}</span>
      </Link>
    </li>
  );
};

export default NavLinkItem;
