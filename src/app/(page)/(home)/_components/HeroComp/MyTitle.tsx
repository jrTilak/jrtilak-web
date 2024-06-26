import TypingAnimation from "@/components/Effects/TypingAnimation";

const MyTitle = ({
  name,
  titles,
}: {
  name: string;
  titles: (string | number)[];
}) => {
  const tilesWithDuration = titles.flatMap((title) => {
    const titleString = title.toString();
    const duration =
      titleString.length * 500 > 4000 ? 4000 : titleString.length * 500;
    return [titleString, duration];
  });

  return (
    <div className="max-w-2xl mb-2 sm:mb-4 text-3xl font-semibold leading-none tracking-tight xs:text-4xl sm:text-5xl xl:text-6xl">
      <h1 className="animate__fadeInLeft animate__animated animate__fast">
        I&apos;m{" "}
        <span className="font-kaushanScript text-purple-900 font-extrabold mb-2">
          {name},
        </span>
      </h1>
      <TypingAnimation titles={tilesWithDuration} />
    </div>
  );
};
export default MyTitle;
