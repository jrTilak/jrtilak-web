import Link from "next/link";
import { NavLinkItemProps } from "./types";
import { cn } from "@/lib/utils";

const NavLinkItem: React.FC<NavLinkItemProps> = ({ link, pathName }) => {
  const { name, href, LinkIcon, tag } = link;
  const isActiveLink = pathName.split("/")[1] === href.split("/")[1];

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex items-center p-2 rounded-lg  group",
          isActiveLink
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted text-muted-foreground"
        )}
      >
        <LinkIcon className="flex-shrink-0 w-5 h-5 transition duration-75 " />

        <span className="flex-1 ml-3 sm:text-lg whitespace-nowrap">{name}</span>
        {tag && (
          <>
            {tag.type === "text" ? (
              <span className="inline-flex rounded-3xl items-center justify-center px-2 ml-3 text-sm font-medium bg-muted">
                {tag.content}
              </span>
            ) : (
              <span className="inline-flex rounded-3xl items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium bg-muted">
                {tag.content}
              </span>
            )}
          </>
        )}
      </Link>
    </li>
  );
};

export default NavLinkItem;
