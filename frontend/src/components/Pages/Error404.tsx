import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { MdChevronRight } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

const Error404 = () => {
  const navItems = [
    {
      name: "Home",
      desc: "Everything starts here",
      link: "/",
      Icon: AiOutlineHome,
    },
    {
      name: "Blogs",
      desc: "Read latest blogs!",
      link: "/blogs",
      Icon: MdOutlineMenuBook,
    },
    {
      name: "Projects",
      desc: "Check out top projects!",
      link: "/projects",
      Icon: FaDiagramProject,
    },
    {
      name: "Contact",
      desc: "Contact for any query :)",
      link: "/contact",
      Icon: BiSolidMessageSquareDetail,
    },
  ];
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="flex flex-col gap-12">
        {/* <!-- Error Container --> */}
        <div className="flex flex-col justify-center m-auto items-center h-[60vh]">
          <div className="text-primary font-bold text-9xl tracking-wide">Error 404</div>
          <div className="text-muted-foreground font-medium text-xs md:text-sm sm:text-md lg:text-xl mt-2">
            The page you are looking for could not be found.
          </div>
        </div>

        {/* <!-- Continue With --> */}
        <div className="flex flex-col mb-10 ">
          <div className="text-muted-foreground font-bold uppercase">
            Continue With
          </div>
          <hr className="h-0.5 w-full bg-muted-foreground" />
          <div className="flex flex-col items-stretch mt-5 gap-2 sm:gap-4">
            {/* <!-- Nav Items --> */}
            {navItems.map((item) => {
              return (
                <>
                  <Link
                    href={item.link}
                    key={item.name}
                    className="flex flex-row group p-2 rounded-lg bg-muted
                        border-t hover:cursor-pointer
                        transition-all duration-200 delay-100"
                  >
                    {/* <!-- Nav Icon --> */}
                    <div className="rounded-xl px-3 py-2 md:py-4">
                      <item.Icon className="mx-auto text-primary text-2xl md:text-3xl" />
                    </div>

                    {/* <!-- Text --> */}
                    <div className="grow flex flex-col pl-5 pt-2">
                      <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                        {item.name}
                      </div>

                      <div
                        className="font-light text-sm md:text-md lg:text-lg
                                text-muted-foreground opacity-50 group-hover:opacity-100
                                transition-all duration-200 delay-100"
                      >
                        {item.desc}
                      </div>
                    </div>

                    {/* <!-- Chevron --> */}
                    <MdChevronRight className="text-muted-foreground text-2xl md:text-3xl my-auto pr-2 group-hover:text-primary transition-all duration-200 delay-100" />
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Error404;
