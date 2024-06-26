"use client";
import Image from "next/image";
import placeholderImg from "@/assets/img/projectPlaceholder.jpg";
import { useEffect } from "react";
import toast from "react-hot-toast";
import handleGAEvent from "@/utils/handleGAEvent";

const CertificationImage = ({
  img,
  title,
  id,
}: {
  img: any;
  title: string;
  id: string;
}) => {
  const requestFullScreen = () => {
    handleGAEvent({
      action: "view certification image fullscreen",
      category: "Certification Click",
      label: title,
    });
    const elem = document.getElementById(id) as any;
    try {
      if (elem) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE/Edge */
          elem.msRequestFullscreen();
        }
        elem.classList.remove("object-cover");
        elem.classList.add("object-contain object-center");
      }
    } catch (e) {}
  };

  useEffect(() => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) {
          elem.classList.add("object-cover");
          elem.classList.remove("object-contain object-center ");
        }
      });
    }
    return () => {
      if (elem) {
        elem.removeEventListener("fullscreenchange", () => {
          if (!document.fullscreenElement) {
            elem.classList.add("object-cover");
            elem.classList.remove("object-contain object-center");
          }
        });
      }
    };
  }, [id]);

  return (
    <Image
      onClick={requestFullScreen}
      id={id}
      className="w-full h-[200px] cursor-pointer min-w-full sm:h-[250px] max-h-[250px] object-cover object-top sm:min-w-[357.3px]"
      src={img || placeholderImg}
      placeholder="blur"
      alt={title}
      height={3000}
      width={3000}
      quality={100}
    />
  );
};

export default CertificationImage;
