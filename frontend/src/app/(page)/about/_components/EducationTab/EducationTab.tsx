import { ImFire } from "react-icons/im";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TimelineProps } from "@/types/Journey/timeline.types";

const EducationTab = ({ education }: { education: TimelineProps[] | null }) => {
  return (
    <>
      <div className="w-full mx-auto max-w-5xl">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {education?.map((education) => {
            return (
              <>
                <div
                  key={education._id}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500  group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    {education.status == "Enrolled" && (
                      <ImFire className="text-red-500 h-5 w-5" />
                    )}
                    {education.status == "Completed" && (
                      <BsFillCheckCircleFill className="bg-white border-emerald-500 border-2 text-emerald-500 h-5 w-5 rounded-full" />
                    )}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-muted p-4 rounded border shadow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-light text-muted-foreground">
                        {education.status}
                      </div>
                      {education.status == "Enrolled" && (
                        <time className="font-caveat font-medium text-indigo-500">
                          {education.date}
                        </time>
                      )}
                      {education.status == "Completed" && (
                        <time className="font-caveat font-medium text-amber-500">
                          {education.date}
                        </time>
                      )}
                    </div>
                    <div >
                      <h3 className="text-foreground font-semibold">
                        {education.title}
                      </h3>
                      <p className="text-muted-foreground">{education.desc}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EducationTab;
