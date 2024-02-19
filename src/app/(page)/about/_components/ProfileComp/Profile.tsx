import Image from "next/image";
import coverPlaceholder from "@/assets/img/cover.jpg";
import avatarPlaceholder from "@/assets/img/avatarPlaceholder.jpg";
import SocialIcon from "./SocialIcon";
import ABOUT_JSON from "@/assets/json/about";
import SOCIAL_LINKS from "@/assets/json/sockialLinks";
export default function Profile() {
  const about = { ...ABOUT_JSON };
  return (
    <>
      {/* image  */}
      <div className="flex justify-center relative items-center w-full md:w-[80vw] h-[200px] sm:h-[300px]">
        {/* cover image */}
        <div className="w-full h-full relative rounded-b-xl">
          <Image
            src={about?.coverImg || coverPlaceholder}
            placeholder="blur"
            blurDataURL={about?.coverImg}
            fill
            className="rounded-b-xl object-cover"
            alt=""
          />
        </div>

        <div className="flex">
          <div className="border-background border-2 rounded-full w-32 h-32 sm:w-44 sm:h-44 absolute left-1/2 -translate-x-1/2 -bottom-20 sm:left-10 sm:translate-x-0  ">
            <Image
              src={about?.img || avatarPlaceholder}
              placeholder="blur"
              blurDataURL={about?.img}
              width={200}
              height={200}
              className="rounded-full"
              alt=""
            />
          </div>
          <div className=" absolute left-1/2 w-full text-center sm:w-auto sm:text-left -translate-x-1/2 -bottom-[135px] sm:-bottom-16 sm:translate-x-0 sm:left-60">
            <div className="text-2xl">
              <h1 className="inline font-semibold ">{about?.name} &nbsp;</h1>
              <h2 className="inline">({about?.nickname})</h2>
            </div>
            <h3>{about?.tagline}</h3>
          </div>
        </div>
        <div className="absolute right-5 -bottom-5 flex flex-col md:flex-row gap-2">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </div>
      </div>
    </>
  );
}
