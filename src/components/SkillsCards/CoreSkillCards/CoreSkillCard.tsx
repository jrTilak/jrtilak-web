"use client";
import Image from "next/image";
import { useState } from "react";

interface CoreSkillCardProps {
  coreSkill: {
    desc: string;
    icon: string;
    title: string;
    _id: string;
  };
  i?: number;
}

const CoreSkillCard = ({ coreSkill, i = 0 }: CoreSkillCardProps) => {
  const { title, desc, icon } = coreSkill;
  const [bgWidth, setBgWidth] = useState("0px");

  return (
    <>
      <div
        onMouseOver={() => {
          setBgWidth("100%");
        }}
        onMouseLeave={() => {
          setBgWidth("0px");
        }}
        style={{
          animationDelay: `${i * 0.1}s`,
        }}
        className=" max-w-[90vw] group animate__fadeInUp animate__animated animate__faster sm:max-w-none md:max-w-[40vw] lg:max-w-[400px] relative rounded-lg border bg-muted select-none hover:shadow hover:shadow-purple-300 p-2 mt-4"
      >
        <div
          style={{ width: bgWidth }}
          className="absolute top-0 left-0 w-0 h-full transition-all bg-purple-100 rounded dark:bg-purple-900"
        />
        <div className="flex flex-col justify-between p-6 rounded-md h-max ">
          <Image
            src={icon}
            className="absolute z-10 w-12 h-12 -translate-x-1/2 -top-6 left-1/2"
            width={48}
            height={48}
            alt=""
          />
          <div className="z-10 space-y-2">
            <h3 className="font-bold text-center transition-all group-hover:scale-125">
              {title}
            </h3>
            <p className="text-sm text-center">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CoreSkillCard;
