"use client";

//import section
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ToggleMode from "@/components/Buttons/ToggleMode";
import { navLinks } from "../shared/NavLinksList";
import { socialIcons } from "../shared/SocialIconsList";
import splitWordsIntoPaths from "@/utils/splitWordsIntoPaths";
import { cn } from "@/lib/utils";
import NavLi from "./NavLinkItem";
import SocialIcon from "./SocialIcon";
import { Button } from "../ui/button";
import useScrollTop from "@/hooks/use-scroll-top";
import { GitCommitVertical, Home, Menu, X } from "lucide-react";

// main function
export default function NavbarComp() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isScrolled = useScrollTop();
  const pathName = usePathname();

  // useEffect(() => {
  //   if (isScrolled) {
  //     document
  //       .getElementById("top-nav")
  //       ?.classList.add("shadow-md", "shadow-muted");
  //   } else {
  //     document
  //       .getElementById("top-nav")
  //       ?.classList.remove("shadow-md", "shadow-muted");
  //   }
  // }, [isScrolled]);

  //returning
  return (
    <>
      <nav className="fixed top-0 z-50 w-full min-h-[60px]  backdrop-blur-sm bg-background/90 ">
        {/* page blur effect */}
        {isNavOpen && (
          <div
            onClick={() => setIsNavOpen(false)}
            className="absolute top-0 z-40 left-0 h-screen w-screen blur-sm backdrop-blur-sm bg-background/90"
          />
        )}

        {/* top nav  */}
        <div
          id="top-nav"
          className={cn(
            "flex items-center justify-between sm:px-6 py-3 lg:px-16 md:py-6 xl:px-32 shadow-md shadow-muted transition-all",
          )}
        >
          <div className="flex items-center justify-start">
            {/* nav toggle button  */}
            <Button
              onClick={() => {
                setIsNavOpen(true);
              }}
              variant="none"
              type="button"
              className="navToggleButton md:hidden inline-flex items-center text-lg rounded-lg transition-all"
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="w-9 h-9 navToggleButton" />
            </Button>
            <Link href="/">
              <span className=" text-2xl font-semibold whitespace-nowrap ml-2">
                jrTilak.
              </span>
            </Link>
          </div>

          {
            <ul className="md:inline-flex items-center space-x-1 md:space-x-3 gap-4 hidden">
              {navLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-flex items-center text-lg font-medium opacity-60 hover:text-primary",
                        pathName === link.href && "text-primary opacity-100"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          }

          {/* right side buttons  */}
          <div className="flex items-center ">
            <div className="flex items-center ml-3 gap-2 w-24 justify-evenly">
              <div className="flex gap-2">
                {socialIcons.map((link, index) => {
                  if (index < 2) {
                    const { Icon } = link;
                    return (
                      <Link href={link.href} key={link.type}>
                        <Icon className="w-4 h-4 rounded cursor-pointer hover:scale-110 hover:text-primary transition-all" />
                      </Link>
                    );
                  }
                })}
              </div>
              {/* <GitCommitVertical className="h-6 min-w-[1px] bg-purple-900 ml-2 sm:ml-4 sm:mr-2 opacity-50" />
              <div className="mr-4">
                <ToggleMode />
              </div> */}
            </div>
          </div>
        </div>
      </nav>

      {/* side nav  */}
      <aside
        onClick={() => setIsNavOpen(false)}
        id="logo-sidebar"
        className={cn(
          "z-50 fixed top-0 left-0 w-64 h-screen transition-transform  bg-background border-r border-gray-300",
          !isNavOpen
            ? "-translate-x-full"
            : "translate-x-0 shadow-lg shadow-gray-800 dark:shadow-gray-400"
        )}
        aria-label="Sidebar"
      >
        <Button
          variant="ghost"
          size="icon"
          type="button"
          className="absolute right-2 top-2 text-lg rounded-lg mx-2 p-2 hover:bg-gray-100"
          onClick={() => {
            setIsNavOpen(false);
          }}
        >
          <span className="sr-only">Open sidebar</span>
          <X className="w-9 h-9 navToggleButton" />
        </Button>

        <div className="h-full px-3 pb-4 overflow-y-auto pt-8 bg-background  ">
          <h2 className="text-3xl font-bold font-kaushanScript my-4 sm:my-6 mx-4">
            &lt;jrTilak/&gt;
          </h2>
          <ul className="space-y-2 font-medium mb-14 sm:mb-0">
            {navLinks.map((link, index) => {
              return <NavLi key={index} link={link} pathName={pathName} />;
            })}
          </ul>
        </div>
        <div className="fixed left-0 bottom-0 w-64 flex justify-center items-center py-2 ">
          <div className="flex justify-evenly py-2 px-4 w-48 ">
            {socialIcons.map(({ type, href, Icon }) => {
              return (
                <SocialIcon type={type} key={type} href={href} Icon={Icon} />
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
