"use client";
import { useEffect, useState } from "react";
import TechCircleCard from "./TechCircleCard";
import { TechCardListsPropsType } from "./types";
import { ICONS } from "@/assets/json/icons";

const TechCardLists = ({ techs }: TechCardListsPropsType) => {
  const [techsList, setTechsList] = useState(
    [] as { title: string; icon: string }[]
  );

  useEffect(() => {
    setTechsList(() => {
      return techs?.map((tech) => {
        const icon =
          ICONS[
            tech
              .toLowerCase()
              .replace(" ", "_")
              .replace(".", "_") as keyof typeof ICONS
          ];
        return {
          title: tech,
          icon,
        };
      });
    });
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);
  const [visibleTechCards, setVisibleTechCards] = useState(5);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    function handleWindowWidthResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowWidthResize);
    return () => {
      window.removeEventListener("resize", handleWindowWidthResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 640) {
      setVisibleTechCards(4);
    } else {
      setVisibleTechCards(5);
    }
  }, [windowWidth]);

  return (
    <div className=" mt-2 inline-flex flex-wrap items-center gap-3">
      {techs && (
        <>
          {techs?.map((tech, index) => {
            const techInfo = techsList?.find(
              (oneTech) => oneTech?.title.toLowerCase() === tech.toLowerCase()
            );

            if (techInfo) {
              if (index < visibleTechCards) {
                return <TechCircleCard {...techInfo} key={techInfo?.title} />;
              } else if (index == visibleTechCards) {
                const count = techs?.length - visibleTechCards;
                return (
                  <TechCircleCard
                    title={`${count} more`}
                    key={techInfo?.title}
                    count={count}
                  />
                );
              }
              return null;
            }
            return null;
          })}
        </>
      )}
    </div>
  );
};

export default TechCardLists;
