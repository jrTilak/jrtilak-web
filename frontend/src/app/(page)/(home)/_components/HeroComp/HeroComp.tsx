import MyTitle from "./MyTitle";
import Stats from "./StatsList";
import About from "./About";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroImg from "./HeroImg";
import { HeroCompProps } from "../../types";
import { ArrowRight, Download } from "lucide-react";
const HeroComp = ({ landingInfo }: HeroCompProps) => {
  const { greetings, name, titles, about, cvLink, img, stats } = landingInfo;
  return (
    <section className="w-full">
      <div className="flex flex-col justify-between gap-4 px-4 pt-12 mx-auto sm:flex-row sm:pt-20 lg:pt-24">
        <div className="z-10 place-self-center max-w-[700px] w-full">
          <p className="max-w-2xl font-light sm:mt-6 text-muted-foreground lg:mt-8 md:text-lg lg:text-xl">
            {greetings || "Hey!"}
          </p>
          <MyTitle name={name} titles={titles} />
          <About about={about} />
          <div className="flex flex-col gap-2 xs:flex-row sm:gap-4">
            <Link
              href="/jrtilak-cv.pdf"
              download="/jrtilak-cv.pdf"
              target="_blank"
            >
              <Button variant="purple" className="w-full xs:w-auto">
                <span>Download DV</span>
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="ghost" className="xs:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-center "
              >
                Let&apos;s Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <HeroImg img={img} />
      </div>
      <div className="inline-flex flex-col items-center justify-center w-full gap-4 sm:relative sm:gap-0 sm:my-24">
        <Stats stats={stats} />
        <hr className="h-[0.1rem] bg-primary bg-opacity-40 w-full mb-5 sm:mb-0" />
      </div>
    </section>
  );
};

export default HeroComp;
