import SkillsComp from "./SkillsComp";
import { skillTabs } from "./SkillTabs";
import Link from "next/link";

interface SkillsTabProps {
  activeTab: string;
}

const SkillsTab = ({ activeTab }: SkillsTabProps) => {
  return (
    <div className="mt-4 min-w-full">
      <div className="flex flex-wrap gap-2 sm:gap-4 sticky top-[110px] z-10">
        {skillTabs.map((tab, index) => {
          const { name, Icon } = tab;
          if (name === activeTab) {
            return (
              <button
                key={index}
                className="px-3 py-2 rounded  shadow-md flex items-center justify-center text-white bg-primary"
              >
                {" "}
                <Icon className="h-5 w-5 mr-2" />
                {name[0].toUpperCase() + name.slice(1)}
              </button>
            );
          } else {
            return (
              <Link
                href={`/about/skills/${name}`}
                scroll={false}
                key={index}
                className="px-3 py-2 rounded  shadow-md flex items-center justify-center text-primary bg-muted"
              >
                {" "}
                <Icon className="h-5 w-5 mr-2" />
                {name[0].toUpperCase() + name.slice(1)}
              </Link>
            );
          }
        })}
      </div>{" "}
      <div className="pt-2 mt-6">
        <SkillsComp skillTab={activeTab} />
      </div>
    </div>
  );
};

export default SkillsTab;
