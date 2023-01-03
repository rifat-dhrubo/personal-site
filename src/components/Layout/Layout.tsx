import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import React from "react";
import { HiSun, HiMoon, HiHome } from "react-icons/hi2";

import { useTheme } from "src/utils/darkMode";

import { ClientOnly } from "../ClientOnly";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { colorMode, setColorMode } = useTheme();

  const [parent, enableAnimations] =
    useAutoAnimate<HTMLButtonElement>(/* optional config */);
  const toggleColorMode = () => {
    if (colorMode === "dark") {
      setColorMode("light");
    } else {
      setColorMode("dark");
    }
  };
  return (
    <div className="min-h-screen">
      <aside className="fixed top-0 left-1/2 mt-8 flex h-nav w-full  max-w-xl -translate-x-1/2 items-center justify-between rounded-xl border border-zinc-400/30 bg-zinc-50 p-4  backdrop-blur-sm dark:bg-zinc-800/60 md:left-0 md:mx-0 md:mt-0 md:h-full md:w-nav md:max-w-none md:translate-x-0 md:flex-col md:rounded-none md:border-0 md:border-r">
        <div
          id="top-nav"
          className="font-bold text-zinc-500 dark:text-zinc-300"
        >
          <Link href="/" className="group">
            <span className="sr-only">Home</span>
            <HiHome className="h-8 w-8 transition group-hover:scale-110" />
          </Link>
        </div>
        <div id="bottom-nav">
          <ClientOnly>
            <button
              type="button"
              onClick={toggleColorMode}
              className="group h-10 w-10 rounded-xl p-2 text-zinc-500 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:text-zinc-300 dark:hover:text-blue-500"
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

      <div className="pt-[calc(theme(width.nav)+2rem)] md:pl-nav md:pt-0">
        {children}
      </div>
    </div>
  );
};
