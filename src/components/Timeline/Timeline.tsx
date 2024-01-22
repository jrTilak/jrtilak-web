import { Check, Flame } from "lucide-react";

type Props = {
  _id: string;
  title: string;
  desc: string;
  date: string;
  status: string;
};
const Timeline = ({ _id, title, desc, date, status }: Props) => {
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
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-muted p-4 rounded border shadow">
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
            <h3 className="text-foreground font-semibold">{title}</h3>
            <p className="text-muted-foreground">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Timeline;
