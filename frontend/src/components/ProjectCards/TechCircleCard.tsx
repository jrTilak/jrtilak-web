import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
interface TechCircleCardProps {
  icon?: string;
  count?: number;
  title: string;
}
const TechCircleCard = ({ icon, count, title }: TechCircleCardProps) => {
  return (
    <>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
            <div className="group  relative inline-flex cursor-pointer rounded-full border border-purple-500/5 bg-purple-500/5 p-2 text-purple-500 transition-colors hover:border-purple-500/10 hover:bg-purple-500/10 h-9 w-9 sm:h-11 sm:w-11">
              {icon ? (
                <Image
                  className="h-5 w-5 sm:h-7 sm:w-7  group-hover:opacity-100"
                  src={icon}
                  style={{ opacity: 0.7 }}
                  placeholder="blur"
                  blurDataURL={icon}
                  alt=""
                  height={7}
                  width={7}
                />
              ) : (
                <span className="mx-auto my-auto -mt-[0.1rem]">+{count}</span>
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};
export default TechCircleCard;
