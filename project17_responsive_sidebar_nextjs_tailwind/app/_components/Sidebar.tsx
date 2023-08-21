"use client";
import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarNavigation } from "./SidebarNavigation";

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <Disclosure as="nav">
      <Disclosure.Button
        onClick={() => setOpenSidebar(!openSidebar)}
        className="absolute top-4 right-4 inline-flex items-center p-2 rounded-md peer outline-none focus:ring-2 focus:ring-inset focus:ring-base-100 hover:bg-base-content hover:text-base-100 group transition-colors duration-500"
      >
        <GiHamburgerMenu
          aria-hidden="true"
          className="block w-6 h-6 md:hidden"
        />
      </Disclosure.Button>
      <div
        className={`fixed h-screen w-1/2 max-w-[300px] bg-base-100  top-0 z-20 lg:left-0 lg:w-[300px]   
        ease-out delay-100 duration-500
      ${openSidebar ? "left-0 transition-all " : "-left-96 "}`}
      >
        <div className="flex flex-col pl-10 pt-10">
          <h1 className=" text-2xl text-primary font-bold capitalize mb-4 border-b-[1px] border-base-content/10 w-[300px] block">
            Dashboard
          </h1>
          <SidebarNavigation />
        </div>
      </div>
    </Disclosure>
  );
};
