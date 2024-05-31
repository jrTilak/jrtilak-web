import bumblebeeIMg from "@/assets/project-img/bumblebee.png";

import Image from "next/image";

const Bumblebee = () => {
  return (
    <div className="flex flex-col mt-4 gap-4">
      <Image
        src={bumblebeeIMg}
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
            "Based on google's gemini AI model",
            "It can generate text based on the input text",
            "Given profile of the bumblbee, named after the transformer character",
            "User authentication and user profile",
            "Guest login and many more!",
            "Created while learning full stack development in initial days...",
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
