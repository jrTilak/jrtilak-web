import Image from "next/image";
import Link from "next/link";

interface AuthorAvatarPropsType {
  name: string;
  date: string;
  title: string;
  img:string
}
const AuthorAvatar = ({ name, date, title, img }: AuthorAvatarPropsType) => {
  return (
    <Link href="/about" className="text-center group flex flex-col w-max group">
      <Image
        src={img}
        className="mx-auto mb-2 w-12 rounded-full"
        alt=""
        height={48}
        width={48}
      />
      <div className="flex gap-2">
        <span className="text-sm text-neutral-500">by</span>
        <h5 className=" font-medium leading-tight text-blue-600 group-hover:underline">
          {name}
        </h5>
        <span className="text-sm text-neutral-500">on {date}</span>
      </div>
      <h6 className=" text-xs text-neutral-500 dark:text-neutral-400">
        {title}{" "}
      </h6>
    </Link>
  );
};
export default AuthorAvatar;
