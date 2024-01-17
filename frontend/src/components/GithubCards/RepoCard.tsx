import Image from "next/image";
import { RepoCardPropsType } from "./types";
import Link from "next/link";
import { MdOutlineStarBorder } from "react-icons/md";
import { GoRepoForked } from "react-icons/go";
import { GoIssueOpened } from "react-icons/go";

const RepoCard = ({
  icon,
  username,
  repo,
  desc,
  lang,
  stars,
  forks,
  issues,
  langColor,
}: RepoCardPropsType) => {
  return (
    <Link
      href={`https://github.com/${username}/${repo}`}
      className="p-4 rounded-md border-2 bg-muted border-gray-400 dark:border-gray-700 flex flex-col gap-2 bg-opacity-50"
    >
      <div className="flex gap-2 ">
        <Image
          src={icon || "https://www.svgrepo.com/show/347822/repo.svg"}
          alt="icon"
          width={30}
          height={30}
          className="object-cover object-center rounded-lg"
        />
        <div className="flex gap-1 text-lg">
          <Link
            className="hover:underline text-blue-800"
            href={`https://github.com/${username}`}
          >
            {username}
          </Link>
          <span>/</span>
          <Link
            className="hover:underline text-blue-800"
            href={`https://github.com/${username}/${repo}`}
          >
            {repo}
          </Link>
        </div>
      </div>
      <p className="text-muted-foreground text-sm">{desc}</p>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div
            className="w-4 h-4 rounded-full "
            style={{ backgroundColor: langColor }}
          />
          <span>{lang}</span>
        </div>
        <div className="flex gap-3">
          <Link
            className="flex gap-1 items-center hover:text-blue-800"
            href={`https://github.com/${username}/${repo}`}
          >
            <MdOutlineStarBorder className="w-6 h-6" />
            <span>{stars}</span>
          </Link>
          <Link
            className="flex gap-1 items-center hover:text-blue-800"
            href={`https://github.com/${username}/${repo}`}
          >
            <GoRepoForked className="w-5 h-5" />
            <span>{forks}</span>
          </Link>
          <Link
            className="flex gap-1 items-center hover:text-blue-800"
            href={`https://github.com/${username}/${repo}/issues`}
          >
            <GoIssueOpened className="w-5 h-5" />
            <span>{issues}</span>
          </Link>
        </div>
      </div>
    </Link>
  );
};
export default RepoCard;
