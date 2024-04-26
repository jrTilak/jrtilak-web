"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ReactGA from "react-ga4";
const Analytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.send({
        hitType: "pageview",
        page: pathname,
        title: document.title,
      });
    }
  }, [pathname]);

  return <div></div>;
};
export default Analytics;
