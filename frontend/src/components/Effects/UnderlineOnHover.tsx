import React from "react";

const UnderlineLink = ({ text, className }: { text: string, className?:string }) => {
  return (
    <>
      <span className={`link link-underline link-underline-black ${className} `}>
        {text}
      </span>
    </>
  );
};

export default UnderlineLink;
