import Link from "next/link";

const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-5xl mx-auto py-5">
        <hr className="h-px mt-6 bg-gray-500 border-none" />
        <div className="flex flex-col items-center justify-between mb-6 md:flex-row">
          <div className="flex-row flex-1 text-center md:text-left mx-5">
            <p className="">
              <span>© {new Date().getFullYear()} </span>
              <Link
                href="https://www.instagram.com/iamjrtilak/"
                target="_blank"
                className=" text-sm font-medium hover:text-primary"
              >
                jrTilak
              </Link>
              <span>. All rights reserved.</span>
            </p>
          </div>
          <div className="flex-1 mt-4 md:m-0">
            <div className="md:ml-20">
              {[
                {
                  name: "About",
                  link: "/about",
                },
                {
                  name: "Blog",
                  link: "/blog",
                },
                {
                  name: "Contact",
                  link: "/contact",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="px-4 text-sm font-medium  hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
