"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { extractHeadings, extractedHeadingType } from "@/utils/extractHeadings";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowLeft, MdPlayArrow } from "react-icons/md";
import { FaCircle, FaListUl } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";
import { RxCross2 } from "react-icons/rx";
const TableOfContents = ({ html }: { html: string }) => {
  const [nestedHeadings, setNestedHeadings] = useState<any>(null);
  const [isCollapsibleOpened, setIsCollapsibleOpened] = useState(false);
  const [TOCPosition, setTOCPosition] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNestedHeadings(nestHeadings(extractHeadings(html)));
  }, [html]);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setTOCPosition(ref.current.getBoundingClientRect().top);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (TOCPosition < 0) {
      document
        .getElementById("show-toc-button")
        ?.classList.remove("hidden-btn");
      document.getElementById("hide-toc-button")?.classList.add("hidden");
    } else {
      document.getElementById("show-toc-button")?.classList.add("hidden-btn");
      document.getElementById("hide-toc-button")?.classList.remove("hidden");
    }
  }, [TOCPosition]);

  const handleShowTOC = () => {
    document.getElementById("toc")?.classList.add("sticky-toc");
    document.getElementById("show-toc-button")?.classList.add("hidden-btn");
    document.getElementById("hide-toc-button")?.classList.remove("hidden-custom");
  };

  const handleHideTOC = () => {
    document.getElementById("toc")?.classList.remove("sticky-toc");
    document.getElementById("show-toc-button")?.classList.remove("hidden-btn");
  };

  return (
    <>
      {nestedHeadings && (
        <>
          <style>
            {`
          .sticky-toc {
            position: sticky;
            top: 5rem;
          }
          .hidden-btn {
            right: -20rem
          }
          .hidden-custom {
            opacity: 0
          }
          `}
          </style>
          <div
            id="toc"
            ref={ref}
            className="w-full last-of-type:relative p-2 sm:p-4 bg-muted rounded-md transition-all"
          >
            <Button
              id="show-toc-button"
              variant="secondary"
              onClick={handleShowTOC}
              className="fixed top-20 right-0 rounded-none rounded-l-md hidden-btn transition-all py-2"
            >
              <FaListUl className="h-6 w-6 " />
            </Button>
            <Button
              id="hide-toc-button"
              variant="ghost"
              onClick={handleHideTOC}
              className="absolute top-0 right-0 rounded-md transition-all py-2"
            >
              <RxCross2 className="h-6 w-6" />
            </Button>
            <Collapsible
              open={isCollapsibleOpened}
              onOpenChange={() => setIsCollapsibleOpened((prev) => !prev)}
            >
              <CollapsibleTrigger>
                <div className="flex gap-2 items-center">
                  <MdPlayArrow
                    className="w-8 h-8 transition-all text-foreground"
                    style={{ rotate: isCollapsibleOpened ? "90deg" : "0deg" }}
                  />
                  <span className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                    Table of Contents
                  </span>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                {GenerateTableOfContentByRecursion(nestedHeadings)}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </>
      )}
    </>
  );
};
export default TableOfContents;

const GenerateTableOfContentByRecursion = (headings: any) => {
  // const [isCollapsibleOpened, setIsCollapsibleOpened] = useState(false);

  return (
    <>
      {headings.map((heading: any) => (
        <Collapsible
          style={{
            marginLeft: `${heading.depth * 0.5}rem`,
            fontSize: `${1.5 - heading.depth * 0.1}rem`,
          }}
          key={heading.id}
          // open={isCollapsibleOpened}
          // onOpenChange={() => setIsCollapsibleOpened((prev) => !prev)}
        >
          <div className="flex gap-2 items-center">
            {heading.nestedHeadings?.length > 0 ? (
              <CollapsibleTrigger>
                <MdPlayArrow
                  className="w-5 h-5 transition-all text-foreground"
                  onClick={(e: any) => {
                    e.stopPropagation();
                    e.preventDefault();
                    e.currentTarget.style.transform = `rotate(${
                      e.currentTarget.style.transform === "rotate(90deg)"
                        ? "0deg"
                        : "90deg"
                    })`;
                  }}
                />
              </CollapsibleTrigger>
            ) : (
              <FaCircle className="w-2 h-2 m-1.5 text-foreground" />
            )}
            <Link
              className="text-blue-800 hover:underline"
              href={`#${heading.id}`}
            >
              {heading.value}
            </Link>
          </div>
          <CollapsibleContent>
            {heading.nestedHeadings?.length > 0 &&
              GenerateTableOfContentByRecursion(heading.nestedHeadings)}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </>
  );
};
function nestHeadings(headings: extractedHeadingType[]) {
  const root = { depth: 0, nestedHeadings: [] };
  const stack: any[] = [root];

  for (const heading of headings) {
    const node = { ...heading, nestedHeadings: [] };

    while (stack[stack.length - 1].depth >= heading.depth) {
      stack.pop();
    }

    stack[stack.length - 1].nestedHeadings.push(node);
    stack.push(node);
  }

  return root.nestedHeadings;
}
