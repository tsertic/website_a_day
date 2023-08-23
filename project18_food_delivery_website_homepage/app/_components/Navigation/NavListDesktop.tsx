import { NAVIGATION_LINKS } from "@/data/siteContent";
import Link from "next/link";
import React from "react";

export const NavListDesktop = () => {
  return (
    <ul className="absolute  w-0 top-[-200px] md:top-[50%] md:-translate-y-1/2 md:w-auto md:left-1/2 md:-translate-x-1/2 md:max-w-[9999px] md:transition-all md:duration-500 overflow-hidden  gap-[45px] flex">
      {NAVIGATION_LINKS.map((navItem) => {
        return (
          <Link href={navItem.path} className="font-medium text-sm">
            {navItem.name}
          </Link>
        );
      })}
    </ul>
  );
};
