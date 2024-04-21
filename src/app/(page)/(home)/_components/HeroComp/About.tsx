import DynamicTextHighlighter from "@/components/Effects/DynamicTextHighlighter";
const About = ({ about }: { about: string }) => {
  return (
    <p className="max-w-2xl animate__fadeInLeft animate__animated mb-6 font-light text-muted-foreground lg:mb-8 md:text-lg lg:text-xl animate__fast animate__delay-0.8s">
      <DynamicTextHighlighter text={about} />
    </p>
  );
};
export default About;
