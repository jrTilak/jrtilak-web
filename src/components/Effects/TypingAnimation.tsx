"use client";

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = ({ titles }: { titles: (string | number)[] }) => {
  return (
    <div className="animate__fadeInLeft animate__animated animate__fast animate__delay-0.5s">
      <TypeAnimation
        sequence={titles}
        preRenderFirstString={true}
        repeat={Infinity}
      />
    </div>
  );
};
export default TypingAnimation;
