import TESTIMONIALS from "@/assets/json/testimonials";
import Testimonial from "./testimonial";
import TestimonialButtons from "./testimonial-buttons";

const Testimonials = () => {
  if (TESTIMONIALS.length === 0) return null;
  return (
    <div className="mb-12">
      <div className="flex flex-col gap-1 mb-2 sm:mb-4 ">
        <h1 className="mb-4 text-3xl font-semibold leading-none underline xs:text-4xl sm:text-5xl xl:text-6xl underline-offset-4">
          Testimonials
        </h1>
        <p className="text-muted-foreground text-lg">
          Peace in this life is based upon faith and testimony, See what people
          say about me.
        </p>
      </div>
      <div className="flex flex-col gap-1 mx-auto w-full">
        <div
          id="testimonials"
          className="flex gap-5 overflow-x-scroll my-8 md:mt-12 snap-mandatory snap-x w-full"
        >
          {TESTIMONIALS.map((review, index) => (
            <Testimonial key={index} {...review} />
          ))}
        </div>
        <TestimonialButtons />
      </div>
      <hr />
    </div>
  );
};
export default Testimonials;
