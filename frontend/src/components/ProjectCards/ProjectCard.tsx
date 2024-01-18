import Image from "next/image";
import Link from "next/link";
import TechCardLists from "./TechCardLists";
import UnderlineOnHover from "../Effects/UnderlineOnHover";
import projectPlaceholderImg from "@/assets/img/projectPlaceholder.jpg";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Suspense } from "react";
import { ChevronsRight, Github, Info } from "lucide-react";

interface ProjectDocType {
  type: string;
  img: string;
  title: string;
  liveDemo: string;
  sourceCode: string;
  desc: string;
  techs: string[];
  _id: string;
}

const ProjectCard = ({
  type,
  img,
  title,
  liveDemo,
  sourceCode,
  desc,
  techs,
  _id,
}: ProjectDocType) => {
  return (
    <>
      <div className="relative flex w-full max-w-[26rem] min-w-[300px] sm:min-w-[372px] flex-col rounded-xl ">
        <div className="top-6 right-6 absolute z-40 bg-muted-foreground rounded-xl  opacity-60 px-2 py-0.5 uppercase text-muted tracking-widest">
          {type}
        </div>
        <Link
          href={`${sourceCode}/README.md`}
          className="group hover:scale-105 transition-all h-[226px] sm:h-[226px] overflow-hidden relative mx-2 sm:mx-4 mt-2 sm:mt-4 rounded-xl bg-clip-border shadow-lg shadow-blue-gray-500/40"
        >
          <Image
            className="transition-all h-full w-full object-cover object-center"
            src={img || projectPlaceholderImg}
            alt=""
            height={500}
            width={500}
          />
        </Link>
        <div className=" p-4 sm:p-6 !pb-0">
          <div className="mb-2 sm:mb-3 flex items-center justify-between">
            <Link href={`${liveDemo}/README.md`}>
              <h1 className="block text-foreground text-xl font-bold leading-snug tracking-normal antialiased">
                <UnderlineOnHover text={title} />
              </h1>
            </Link>
          </div>
          <p className="block  font-light leading-relaxed text-muted-foreground antialiased">
            {desc?.slice(0, 180)}
            {desc?.length > 180 ? "..." : ""}
          </p>
          <Suspense>
            <TechCardLists techs={techs} />
          </Suspense>
        </div>
        <div className="p-4 sm:p-6 px-1 sm:px-1 pt-3 gap-2 flex justify-between">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="ghost" className="px-2 py-1">
                  <Link
                    target="_blank"
                    href={sourceCode}
                    className=" group cursor-pointer relative p-3 text-foreground"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Source Code</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button variant="secondary" className="w-full">
            <Link
              target="_blank"
              href={liveDemo}
              className=" sm:w-full  p-3 sm:px-5 sm:py-3 min-w-[140px] "
            >
              <span className="inline-flex items-center justify-center">
                <span>View Live</span>
                <ChevronsRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </span>
            </Link>
          </Button>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="ghost" className="px-2 py-1">
                  <Link
                    href={`${sourceCode}/blob/master/README.md`}
                    className=" group cursor-pointer relative p-3 text-foreground"
                  >
                    <Info className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More info!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
