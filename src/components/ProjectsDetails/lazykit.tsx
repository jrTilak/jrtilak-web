import React from "react";
import lazykitImg from "@/assets/project-img/lazykit.png";
import Image from "next/image";

const Lazykit = () => {
  return (
    <div className="flex flex-col mt-4 gap-4">
      <Image
        src={lazykitImg}
        alt=""
        width={500}
        height={500}
        quality={100}
        placeholder="blur"
        className=" rounded-md"
      />
      <div className="flex flex-col gap-2">
        <h3 className="xl:text-xl font-bold">More</h3>
        <ul className="text-sm text-muted-foreground">
          {[
            "Lazykit is a collection utility functions for JavaScript and TypeScript.",
            "Zero dependencies, no installation required.",
            "Easy to use and easy to understand.",
            "CLI tool to add functions to your project.",
            "Used by many developers around the world.",
            "Open source project and contributed by many developers.",
          ].map((item, index) => (
            <li key={index} className="list-disc ml-4">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lazykit;
