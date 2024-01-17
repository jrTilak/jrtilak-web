import { StatsProps } from "../../types";
import StatsCard from "./StatsCard";

const Stats = ({ stats }: StatsProps) => {
  return (
    <div
      className={
        "max-w-[680px] mx-auto sm:absolute sm:-translate-x-1/2 sm:left-1/2 sm:-top-[75px] "
      }
    >
      <div className="grid gap-3 grid-cols-2 xs:grid-cols-4 mt-4">
        {stats.map((statsInfo, index: number) => (
          <StatsCard key={index} stats={statsInfo} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
