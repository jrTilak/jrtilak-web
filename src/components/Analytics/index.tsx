"use client";
import { sendGAEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
const Analytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    sendGAEvent({
      event: "page_view",
      page_path: pathname,
    });
  }, [pathname]);

  return <div></div>;
};
export default Analytics;
