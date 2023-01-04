import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { HiSun, HiMoon } from "react-icons/hi2";

import { useTheme } from "src/utils/darkMode";

import { ClientOnly } from "../ClientOnly";
import { Logo } from "../Logo";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { colorMode, setColorMode } = useTheme();

  const [parent] = useAutoAnimate<HTMLButtonElement>({
    duration: 300,
  });
  const toggleColorMode = () => {
    if (colorMode === "dark") {
      setColorMode("light");
    } else {
      setColorMode("dark");
    }
  };
  return (
    <div className="min-h-screen">
      <aside className="min-h-nav fixed top-0 left-1/2 z-20 mt-8 flex w-11/12 max-w-xl -translate-x-1/2 flex-wrap  items-center justify-between gap-4 rounded-xl border border-zinc-400/30 bg-zinc-50 p-4 backdrop-blur-sm  dark:bg-zinc-800/60 sm:flex-nowrap md:left-0 md:mx-0  md:mt-0 md:h-full md:w-nav md:max-w-none md:translate-x-0 md:flex-col md:rounded-none md:border-0 md:border-r md:py-8">
        <div
          id="top-nav"
          className="flex items-center gap-4 font-bold text-zinc-500 dark:text-zinc-300 md:flex-col"
        >
          <Link href="/" className="group">
            <span className="sr-only">Home</span>
            {/* <HiHome className="h-8 w-8 transition group-hover:scale-110" /> */}
            <Logo />
          </Link>
        </div>
        <div
          id="bottom-nav"
          className="flex flex-wrap items-center gap-4 text-zinc-500 dark:text-zinc-300 sm:flex-nowrap sm:gap-6 md:flex-col"
        >
          <Link href="https://www.linkedin.com/in/rifat-hossain-dhrubo">
            <span className="sr-only">Linkedin link</span>
            <FaLinkedinIn className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link href="https://twitter.com/rifat_dhrubo">
            <span className="sr-only">Twitter link</span>
            <BsTwitter className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link href="https://www.facebook.com/rifat.dhrubo">
            <span className="sr-only">Facebook link</span>
            <FaFacebookF className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link href="https://github.com/HellBlazer616">
            <span className="sr-only">Github link</span>
            <GoMarkGithub className="h-6 w-6" aria-hidden="true" />
          </Link>
          <ClientOnly>
            <button
              type="button"
              onClick={toggleColorMode}
              className="group h-6 w-6 rounded-xl text-zinc-500 focus:outline-none  focus:ring-2 focus:ring-zinc-500 focus:ring-offset-4 dark:text-zinc-300 dark:hover:text-blue-500 dark:focus:ring-offset-black"
              ref={parent}
            >
              <span className="sr-only">
                Toggle {colorMode === "dark" ? "light" : "dark"} mode
              </span>
              {colorMode === "dark" ? (
                <HiSun className="h-6 w-6 transition group-hover:scale-110" />
              ) : (
                <HiMoon className="h-6 w-6 transition group-hover:scale-110" />
              )}
            </button>
          </ClientOnly>
        </div>
      </aside>

      <div className="min-h-screen pt-[calc(theme(width.nav)+2rem)] md:pl-nav md:pt-0">
        {children}
      </div>
    </div>
  );
};
