import ABOUT_JSON from "@/assets/json/about";
import StatsCard from "./StatsCard";

const Stats = () => {
  const stats = ABOUT_JSON.stats;
  return (
    <div
      className={
        "max-w-[680px] mx-auto sm:absolute sm:-translate-x-1/2 sm:left-1/2 sm:-top-[75px] "
      }
    >
      <div className="grid gap-3 grid-cols-2 xs:grid-cols-4 mt-4">
        {stats.map((statsInfo, index: number) => (
          <StatsCard key={index} {...statsInfo} i={index} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
