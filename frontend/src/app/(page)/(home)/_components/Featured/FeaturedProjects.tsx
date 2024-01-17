import ProjectCard from "@/components/ProjectCards/ProjectCard";
import { IoIosArrowForward } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FeaturedProjectsProps } from "../../types";

const FeaturedProjects = ({ featuredProjects }: FeaturedProjectsProps) => {
  return (
    <>
      {featuredProjects && (
        <div>
          <div className="flex justify-between items-center mb-4 sm:mb-8">
            <h1 className=" text-3xl font-semibold leading-none  xs:text-4xl sm:text-5xl xl:text-6xl underline underline-offset-4">
              Featured Projects
            </h1>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="ghost">
                    <Link href="/projects">
                      <IoIosArrowForward className="w-6 h-6" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>See more projects!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {featuredProjects.map((project, index: number) => {
              if (index < 3) {
                return <ProjectCard key={project._id} {...project} />;
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default FeaturedProjects;
