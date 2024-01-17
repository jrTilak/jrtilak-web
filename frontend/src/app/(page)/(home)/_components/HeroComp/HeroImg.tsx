import Image from "next/image";
import { HeroImgProps } from "../../types";

const HeroImg = ({ img }: HeroImgProps) => {
  return (
    <div className="items-center justify-center mx-auto my-auto sm:flex lg:translate-y-0">
      <Image
        className="w-full h-auto sm:min-h-[250px] sm:min-w-[250px] md:min-h-[300px] md:min-w-[300px] lg:min-h-[350px] lg:min-w-[350px] rounded-xl sm:rounded-full object-cover object-center border-2 sm:border-4 border-primary"
        alt=""
        src={img}
        width={350}
        height={350}
      />
    </div>
  );
};
export default HeroImg;
