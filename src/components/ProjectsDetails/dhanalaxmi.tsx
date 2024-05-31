import Image from "next/image";
import React from "react";
import dhanalakshmiImg from "@/assets/project-img/dhanalakshmi.png";

const Dhanalaxmi = () => {
  return (
    <div className="flex flex-col mt-4 gap-4">
      <Image
        src={dhanalakshmiImg}
        alt="C Games"
        width={500}
        height={500}
        quality={100}
        className=" rounded-md"
        placeholder="blur"
      />
      <div className="flex flex-col gap-2">
        <h3 className="xl:text-xl font-bold">More</h3>
        <p className="text-sm text-muted-foreground">
          It was a organizational project where I was responsible for the
          front-end development of the website with my team, where I was
          involved in the completion of more than 60% of the front-end
          development.
        </p>
      </div>
    </div>
  );
};

export default Dhanalaxmi;
