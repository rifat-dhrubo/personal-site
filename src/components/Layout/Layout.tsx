import Link from "next/link";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

import { ModeToggle } from "@/components/mode-toggle";

import { Logo } from "../Logo";

type Props = {
  children: React.ReactNode;
};

const linkArray = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/rifat-hossain-dhrubo",
    Icon: FaLinkedinIn,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/rifat_dhrubo",
    Icon: BsTwitter,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/rifat.dhrubo",
    Icon: FaFacebookF,
  },
  {
    name: "Github",
    href: "https://github.com/rifat-dhrubo",
    Icon: GoMarkGithub,
  },
];

export const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <aside className="min-h-nav fixed left-1/2 top-0 z-20 mt-8 flex w-11/12 max-w-xl -translate-x-1/2 flex-wrap items-center  justify-between gap-4 rounded-xl border border-border p-4  backdrop-blur-sm sm:flex-nowrap md:left-0  md:mx-0 md:mt-0 md:h-full md:w-nav md:max-w-none md:translate-x-0 md:flex-col md:rounded-none md:border-0 md:border-r md:py-8">
        <div
          id="top-nav"
          className="flex items-center gap-4 font-bold md:flex-col"
        >
          <Link href="/" className="group">
            <span className="sr-only">Home</span>
            {/* <HiHome className="h-8 w-8 transition group-hover:scale-125" /> */}
            <Logo />
          </Link>
        </div>
        <div
          id="bottom-nav"
          className="flex flex-wrap items-center gap-4 sm:flex-nowrap sm:gap-6 md:flex-col"
        >
          {linkArray.map(({ name, href, Icon }) => (
            <Link
              key={href}
              className="group"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{name}</span>
              <Icon
                className="h-6 w-6 transition group-hover:scale-125"
                aria-hidden="true"
              />
            </Link>
          ))}

          <ModeToggle />
        </div>
      </aside>

      <div className="min-h-screen pt-[calc(theme(width.nav)+2rem)] md:pl-nav md:pt-0">
        {children}
      </div>
    </div>
  );
};
