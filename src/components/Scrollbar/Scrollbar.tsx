"use client";

import { useEffect, useRef, useState } from "react";

const Scrollbar = () => {
  const [scrollbarHeight, setScrollbarHeight] = useState(0);
  const scrollbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollbarRef.current) {
      window.addEventListener("scroll", () => {
        if (scrollbarRef.current) {
          const { scrollTop, scrollHeight, clientHeight } =
            window.document.body;
          const newHeight = (scrollTop / (scrollHeight - clientHeight)) * 100;
          setScrollbarHeight(newHeight);
        }
      });
    }
  }, []);
  return (
    <div
      ref={scrollbarRef}
      style={{ height: `${scrollbarHeight}vh` }}
      className="w-1 fixed top-0 right-0 bg-purple-500 z-50"
    ></div>
  );
};
export default Scrollbar;
