import EXPERIENCE from "@/assets/json/experience";
import { Check, Flame } from "lucide-react";
import Link from "next/link";

const Timeline = ({
  _id,
  title,
  desc,
  date,
  status,
  link,
}: (typeof EXPERIENCE)[number]) => {
  return (
    <>
      <div
        key={_id}
        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500  group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          {(status == "Enrolled" || status == "Ongoing") && (
            <Flame className="text-red-500 h-5 w-5" />
          )}
          {status == "Completed" && (
            <Check className="text-foreground h-5 w-5 rounded-full" />
          )}
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-muted p-4 rounded border shadow transition-all">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-light text-muted-foreground">{status}</div>
            {(status == "Enrolled" || status == "Ongoing") && (
              <time className="font-caveat font-medium text-indigo-500">
                {date}
              </time>
            )}
            {status == "Completed" && (
              <time className="font-caveat font-medium text-amber-500">
                {date}
              </time>
            )}
          </div>
          <div>
            {link ? (
              <Link
                href={link}
                target="_blank"
                className="text-foreground font-semibold hover:underline hover:text-primary transition-all"
              >
                {title}
              </Link>
            ) : (
              <h3 className="text-foreground font-semibold">{title}</h3>
            )}
            <ul className="text-muted-foreground flex flex-col gap-2 mt-1">
              {desc.map((d, i) => (
                <li key={i} className="flex gap-1 items-start">
                  <div className="w-2 h-2 min-w-[8px] min-h-[8px] mt-2 bg-muted-foreground rounded-full mr-2"></div>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Timeline;
