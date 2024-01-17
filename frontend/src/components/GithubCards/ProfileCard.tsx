import Image from "next/image";
import { ProfileCardProps } from "./types";
import Link from "next/link";
import avatar from "@/assets/img/avatarPlaceholder.jpg";
import { IoMailOutline } from "react-icons/io5";
import DynamicTextHighlighter from "@/components/Effects/DynamicTextHighlighter";
const ProfileCard = ({
  img,
  nickname,
  createdAt,
  about,
  titles,
}: ProfileCardProps) => {
  return (
    <Link
      href="/about"
      className="p-4 rounded-md border-2 bg-gray-100 border-gray-400 flex flex-col gap-2 bg-opacity-50"
    >
      <div className="flex gap-2 ">
        <Image
          src={img || avatar}
          alt=""
          width={30}
          height={30}
          className="object-cover object-center rounded-md"
        />
        <div className="flex gap-1 text-lg">
          <span>by </span>
          <Link className="hover:underline text-blue-800" href="/about">
            {nickname}
          </Link>
          {createdAt && <span>at {createdAt} </span>}
        </div>
      </div>
      <p className="text-gray-600 text-sm">
        <DynamicTextHighlighter text={about.slice(0,139) + "..."} />
      </p>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-4 h-4 rounded-full bg-purple-400 " />
          <span>{titles[Math.floor(Math.random() * titles.length)]}</span>
        </div>
        <div className="flex gap-3">
          <Link
            className="flex gap-1 items-center hover:text-blue-800"
            href="/contact"
          >
            <IoMailOutline className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </Link>
  );
};
export default ProfileCard;
