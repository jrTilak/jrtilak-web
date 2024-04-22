"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialButtons = () => {
  const handleSlide = (direction: "left" | "right") => {
    const testimonials = document.getElementById("testimonials");
    if (testimonials) {
      const container = testimonials;
      const scrollAmount = document.documentElement.clientWidth / 2;
      console.log(scrollAmount);
      if (direction === "left") {
        container.scrollTo({
          left: container.scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else {
        container.scrollTo({
          left: container.scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div className="flex gap-8 self-end">
      <Button
        name="left-arrow"
        aria-label="left-arrow"
        onClick={() => handleSlide("left")}
        variant="secondary"
      >
        <ChevronLeft className="text-xl lg:text-2xl" />
      </Button>
      <Button
        name="right-arrow"
        aria-label="right-arrow"
        onClick={() => handleSlide("right")}
      >
        <ChevronRight className="text-xl lg:text-2xl" />
      </Button>
    </div>
  );
};
export default TestimonialButtons;
