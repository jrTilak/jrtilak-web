import Link from "next/link";
import { NavLinkItemProps } from "./types";
import { cn } from "@/lib/utils";
import GALink from "../Analytics/GALink";

const NavLinkItem: React.FC<NavLinkItemProps> = ({ link, pathName }) => {
  const { name, href, LinkIcon } = link;
  const isActiveLink = href.startsWith("http")
    ? false
    : pathName.split("/")[1] === href.split("/")[1];
  const target = href.startsWith("https://") ? "_blank" : "_self";
  console.log(href, target);

  return (
    <li>
      <GALink
        href={href}
        target={target}
        className={cn(
          "flex items-center p-2 rounded-lg  group",
          isActiveLink
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted text-muted-foreground"
        )}
        ga={{
          category: "Navbar",
          action: "click",
          label: name,
        }}
      >
        <LinkIcon className="flex-shrink-0 w-5 h-5 transition duration-75 " />

        <span className="flex-1 ml-3 sm:text-lg whitespace-nowrap">{name}</span>
      </GALink>
    </li>
  );
};

export default NavLinkItem;
