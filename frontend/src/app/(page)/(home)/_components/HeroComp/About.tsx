import DynamicTextHighlighter from "@/components/Effects/DynamicTextHighlighter";
import { AboutProps } from "../../types";
const About = ({ about }: AboutProps) => {
  return (
    <p className="max-w-2xl mb-6 font-light text-muted-foreground lg:mb-8 md:text-lg lg:text-xl ">
      <DynamicTextHighlighter text={about} />
    </p>
  );
};
export default About;
