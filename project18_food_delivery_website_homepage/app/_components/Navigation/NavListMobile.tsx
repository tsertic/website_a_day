import React from "react";
import { NAVIGATION_LINKS } from "@/data/siteContent";
import Link from "next/link";
export const NavListMobile = () => {
  return (
    <ul className="flex flex-col text-primary-content gap-4 uppercase tracking-[2px] ">
      {NAVIGATION_LINKS.map((navItem) => {
        return (
          <Link href={navItem.path} key={navItem._id}>
            {navItem.name}
          </Link>
        );
      })}
    </ul>
  );
};
