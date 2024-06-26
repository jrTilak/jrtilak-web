import GALink from "@/components/Analytics/GALink";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";

interface StatsCardProps {
  count: string;
  type: string;
  desc: string;
  link: string;
  i: number;
}

const StatsCard = ({ count, type, desc, link, i }: StatsCardProps) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <GALink
            ga={{
              category: "Stats",
              action: "click " + link,
              label: type,
            }}
            href={link}
            style={{
              animationDelay: `${i * 0.1}s`,
            }}
            className="animate__animated animate__fadeInUp animate__faster bg-muted shadow-md dark:shadow-sm border border-gray-300 dark:border-gray-600 shadow-purple-300 sm:rounded-lg w-[120px] group cursor-pointer relative inline-block"
          >
            <div className="p-2 px-4 sm:px-4 sm:py-5">
              <dl>
                <dd className="mt-1 text-xl font-semibold leading-9 text-left text-indigo-600 sm:text-3xl">
                  {count}
                </dd>
                <dt className="text-xs font-medium leading-5 text-left truncate sm:text-sm">
                  {type}
                </dt>
              </dl>
            </div>
          </GALink>
        </TooltipTrigger>
        <TooltipContent>
          <p>{desc}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default StatsCard;
