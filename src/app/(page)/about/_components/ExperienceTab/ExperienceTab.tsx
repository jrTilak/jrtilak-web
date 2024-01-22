import EXPERIENCE from "@/assets/json/experience";
import Timeline from "@/components/Timeline/Timeline";
import React from "react";

const ExperienceTab = () => {
  return (
    <div className="w-full mx-auto max-w-5xl">
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {EXPERIENCE?.map((e) => {
          return <Timeline {...e} key={e._id} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceTab;
