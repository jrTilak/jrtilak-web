import { Button } from "@/components/ui/button";
import ABOUT_JSON from "@/assets/json/about";
import Link from "next/link";
import { Download } from "lucide-react";
const Page = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center m-auto w-full max-w-3xl">
      <Link
        href={ABOUT_JSON.cvLink}
        download
        target="_blank"
        className="md:fixed top-20 right-4 mt-4 z-40"
      >
        <Button variant="purple" className="w-full xs:w-auto">
          <span>Download CV</span>
          <Download className="ml-2 h-4 w-4" />
        </Button>
      </Link>
      {/* // Canva Embed */}

      <div>
        <div
          style={{
            position: "relative",
            paddingTop: "141.4286%",
            paddingBottom: 0,
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: 8,
            willChange: "transform",
          }}
          className="w-[90vw] h-fit md:max-w-[700px] "
        >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAGDH7PHv4c/DBewW2LVRITYxCyzqQWQtQ/view?embed"
            allowFullScreen={true}
            allow="fullscreen"
          ></iframe>
        </div>
        <a
          href="https://www.canva.com/design/DAGDH7PHv4c/DBewW2LVRITYxCyzqQWQtQ/view?utm_content=DAGDH7PHv4c&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          className="text-muted-foreground underline"
          rel="noopener"
        >
          Tilak Thapa Resume
        </a>{" "}
        by Tilak Thapa
      </div>
    </div>
  );
};
export default Page;
