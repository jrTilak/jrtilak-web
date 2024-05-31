import TESTIMONIALS from "@/assets/json/testimonials";
import Link from "next/link";

type Props = (typeof TESTIMONIALS)[number];

const Testimonial = ({
  img,
  name,
  review,
  title,
  profileLink,
  sourceIcon,
}: Props) => {
  return (
    <div className="relative flex items-end mt-14 text-muted min-w-full sm:min-w-[562px] snap-start md:snap-center">
      <div className="w-full min-w-full sm:w-[562px] sm:min-w-[562px] relative bg-muted rounded-2xl p-6 flex flex-col gap-3">
        <img
          loading="lazy"
          src={img}
          alt={name}
          className="w-24 h-24 rounded-full -top-[50px] left-12 absolute bg-muted object-cover object-center border-2 border-muted"
        />
        <img
          src={sourceIcon}
          alt="source"
          className="w-5 h-5 absolute top-3 right-3"
        />
        <p
          className="mt-14 flex-grow text-sm sm:text-base text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: review }}
        ></p>
        <Link
          target="_blank"
          href={profileLink}
          className="text-lg sm:text-xl flex flex-col gap-0 group w-fit"
        >
          <span className="text-blue-600 group-hover:underline">{name}</span>
          <span className="text-foreground">{title}</span>
        </Link>
      </div>
    </div>
  );
};
export default Testimonial;
