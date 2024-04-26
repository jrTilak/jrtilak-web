"use client";

import handleGAEvent, { IGAEvent } from "@/utils/handleGAEvent";
import Link from "next/link";
import { ReactNode, AnchorHTMLAttributes } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  ga: IGAEvent;
};

const GALink = ({ children, href, ga, ...props }: LinkProps) => {
  return (
    <Link
      onClick={() => handleGAEvent(ga)}
      href={href ? href.toString() : ""}
      {...props}
    >
      {children}
    </Link>
  );
};

export default GALink;
