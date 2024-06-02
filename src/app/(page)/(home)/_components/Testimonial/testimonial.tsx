import TESTIMONIALS from "@/assets/json/testimonials";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type Props = (typeof TESTIMONIALS)[number];

const Testimonial = ({
  img,
  name,
  review,
  title,
  profileLink,
  sourceIcon,
  shortReview,
}: Props) => {
  return (
    <div className="relative flex items-end mt-14 text-muted min-w-full sm:min-w-[562px] snap-start md:snap-center">
      <div className="w-full min-h-[250px] min-w-full sm:w-[562px] sm:min-w-[562px] relative bg-muted rounded-2xl p-6 flex flex-col justify-between gap-3">
        <img
          loading="lazy"
          src={img ?? "https://www.svgrepo.com/show/420364/avatar-male-man.svg"}
          alt={name}
          className="w-24 h-24 rounded-full -top-[50px] left-12 absolute bg-muted object-cover object-center border-2 border-muted"
        />
        <img
          src={sourceIcon}
          alt="source"
          className="w-5 h-5 absolute top-3 right-3"
        />
        {shortReview ? (
          <p className="mt-14 flex-grow text-sm sm:text-base text-muted-foreground">
            {shortReview}...
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-blue-600 underline opacity-85">Read more</button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>
                    By -{" "}
                    <Link
                      href={profileLink}
                      className="underline"
                      target="_blank"
                    >
                      {name}
                    </Link>
                  </DialogTitle>
                  <DialogDescription>{title}</DialogDescription>
                </DialogHeader>
                <p
                  className="text-sm sm:text-base text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: review }}
                ></p>
              </DialogContent>
            </Dialog>
          </p>
        ) : (
          <p
            className="mt-14 flex-grow text-sm sm:text-base text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: review }}
          ></p>
        )}
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
