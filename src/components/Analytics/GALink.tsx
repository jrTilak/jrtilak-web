"use client";

import handleGAEvent, { IGAEvent } from "@/utils/handleGAEvent";
import Link from "next/link";
import { ReactNode, AnchorHTMLAttributes } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  ga: IGAEvent;
  scroll?: boolean;
};

const GALink = ({
  children,
  href,
  ga,
  scroll,
  target,
  ...props
}: LinkProps) => {
  console.log("GALink", href, target);
  return (
    <Link
      scroll={scroll}
      target={target}
      onClick={() => handleGAEvent(ga)}
      href={href ? href.toString() : ""}
      {...props}
    >
      {children}
    </Link>
  );
};

export default GALink;
