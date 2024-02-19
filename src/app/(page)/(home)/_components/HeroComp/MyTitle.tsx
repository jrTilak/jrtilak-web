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
    <h1 className="max-w-2xl mb-2 sm:mb-4 text-3xl font-semibold leading-none tracking-tight xs:text-4xl sm:text-5xl xl:text-6xl  ">
      I&apos;m{" "}
      <span className="font-kaushanScript text-purple-900 font-extrabold mb-2">
        {name}{" "}
      </span>{" "}
      , <br />
      <TypingAnimation titles={tilesWithDuration} />
    </h1>
  );
};
export default MyTitle;
