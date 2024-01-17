"use client";

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = ({ titles }: { titles: (string | number)[] }) => {
  return (
    <>
      <TypeAnimation
        sequence={titles}
        preRenderFirstString={true}
        repeat={Infinity}
      />
    </>
  );
};
export default TypingAnimation;
