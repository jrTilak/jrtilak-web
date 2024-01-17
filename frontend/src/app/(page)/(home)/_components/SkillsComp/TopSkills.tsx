import SkillsListComp from "@/components/SkillsCards/SkillCards/SkillsListComp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CoreSkillsListComp from "@/components/SkillsCards/CoreSkillCards/CoreSkillsListComp";
import { TopSkillsProps } from "../../types";
const TopSkills = ({ topSkills, coreSkills }: TopSkillsProps) => {
  return (
    <div className="">
      <div className="flex items-center justify-between mb-2 sm:mb-4 ">
        <h1 className="mb-4 text-3xl font-semibold leading-none underline xs:text-4xl sm:text-5xl xl:text-6xl underline-offset-4">
          Top Skills
        </h1>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost">
                <Link href="/about">
                  <IoIosArrowForward className="w-6 h-6" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>More about me!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 mx-auto md:flex-row">
        <SkillsListComp skills={topSkills} />
        <div className="h-[300px] hidden md:block w-0.5 rounded-md self-stretch bg-gradient-to-tr from-transparent via-muted-foreground to-transparent opacity-20 dark:opacity-100" />
        <hr className="h-0.5 w-full md:hidden" />
        <CoreSkillsListComp coreSkills={coreSkills} />
      </div>
    </div>
  );
};
export default TopSkills;
