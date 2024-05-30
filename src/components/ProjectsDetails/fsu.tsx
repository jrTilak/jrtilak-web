import Image from "next/image";
import React from "react";
import fsuImg from "@/assets/project-img/fsu.jpg";

const FSU = () => {
  return (
    <div className="flex flex-col mt-4 gap-4">
      <Image
        src={fsuImg}
        alt="C Games"
        width={500}
        height={500}
        quality={100}
        placeholder="blur"
      />
      <div className="flex flex-col gap-2">
        <h3 className="xl:text-xl font-bold">Collaborators</h3>
        <div className="flex flex-col gap-1 ml-3">
          {["jrTilak", "AnuragDahal", "kaleUtsab"].map((collaborator, i) => (
            <a
              key={collaborator}
              href={"https://github.com/" + collaborator}
              target="_blank"
              rel="noreferrer"
            >
              {i + 1}.{" "}
              <span className="text-blue-500 underline">@{collaborator}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FSU;
