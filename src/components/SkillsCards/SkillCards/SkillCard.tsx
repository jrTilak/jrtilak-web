"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { CODING_SVG } from "@/assets/constants/placeholders";
import SKILLS_JSON from "@/assets/json/skills";
import getSkillLevel from "@/utils/getSkillLevel";

interface SkillCardProps {
  skill?:
    | (typeof SKILLS_JSON.techs)[number]
    | (typeof SKILLS_JSON.tools)[number]
    | null;
  i?: number;
}

const SkillCard = ({ skill, i = 0 }: SkillCardProps) => {
  const [skillCardBgWidth, setSkillCardBgWidth] = useState("0px");

  return (
    <>
      <div
        onMouseOver={() => {
          setSkillCardBgWidth(`${skill?.proficiency || 100}%`);
        }}
        onMouseLeave={() => {
          setSkillCardBgWidth("0px");
        }}
        style={{
          animationDelay: `${i * 0.1}s`,
        }}
        className="xs:min-w-[170px] bg-muted relative animate__fadeInUp animate__animated animate__faster group flex cursor-pointer items-center gap-2 rounded border px-2 py-2  md:gap-3 lg:px-3 hover:shadow hover:shadow-purple-300"
      >
        <div
          style={{ width: skillCardBgWidth }}
          className="absolute top-0 left-0 w-0 h-full transition-all bg-purple-100 rounded dark:bg-purple-900"
        />
        <div className="flex items-center justify-center w-12 h-12 p-0 lg:h-16 lg:w-16 lg:p-2 ">
          <Image
            alt=""
            width={32}
            height={32}
            className=" drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg-h-[85%] lg-w-[85%] group-hover:scale-125"
            src={skill?.icon || CODING_SVG}
            style={{ color: "transparent" }}
          />
        </div>
        <div className="flex items-center text-lg">
          <div className=" transition-all duration-300 translate-y-0 group-hover:-translate-y-2.5">
            {skill?.title || "See more"}
          </div>

          <div className="absolute mt-5 text-sm font-light transition-all duration-300 opacity-0 group-hover:opacity-80 ">
            {
              // @ts-ignore
              getSkillLevel(parseInt(skill?.proficiency)) || "10+ skills"
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;

export const SkillCardWrapper = ({ skill, i }: SkillCardProps) => {
  return (
    <Link
      href={skill ? skill.link : "/about/skills"}
      target={skill ? "_blank" : "_self"}
    >
      <SkillCard skill={skill} i={i} />
    </Link>
  );
};
