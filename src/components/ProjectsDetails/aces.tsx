import aces from "@/assets/project-img/aces.png";

import Image from "next/image";

const Bumblebee = () => {
  return (
    <div className="flex flex-col mt-4 gap-4">
      <Image
        src={aces}
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
            "Full stack web application",
            "Client-side, admin-panel and apis",
            "Built using Next.js, Tailwind CSS, and Vercel",
            "Online platform for the Association of Computer Engineering Students (ACES) of the IOE, Purwanchal Campus, Dharan",
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

export default Bumblebee;
