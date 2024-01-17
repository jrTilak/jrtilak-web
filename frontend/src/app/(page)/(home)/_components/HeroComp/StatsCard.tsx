import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { StatsCardProps } from "../../types";

const StatsCard = ({ stats }: StatsCardProps) => {
  const { count, type, desc } = stats;
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <div
            className="bg-muted shadow-md dark:shadow-sm border border-gray-300 dark:border-gray-600 shadow-purple-300 sm:rounded-lg w-[120px] group cursor-pointer relative inline-block"
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
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{desc}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default StatsCard;
