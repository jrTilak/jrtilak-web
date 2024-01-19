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
        className="md:fixed top-20 right-4 mt-4"
      >
        <Button variant="purple" className="w-full xs:w-auto">
          <span>Download DV</span>
          <Download className="ml-2 h-4 w-4" />
        </Button>
      </Link>
      <div
        style={{
          position: "relative",
          paddingTop: "56.2225%",
          paddingBottom: 0,
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "1rem",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "8px",
          willChange: "transform",
        }}
        className="p-6 h-max md:w-max min-h-[80vh]"
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
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF6TI8wUt8&#x2F;view?embed"
          allowFullScreen
          allow="fullscreen"
        ></iframe>
        <a
          href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF6TI8wUt8&#x2F;view?utm_content=DAF6TI8wUt8&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
          target="_blank"
          rel="noopener"
        >
          Tilak Thapa Resume - iamjrtilak@gmail.com
        </a>{" "}
        by Tilak Thapa
      </div>
    </div>
  );
};
export default Page;
