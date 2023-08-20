"use client";
import { Disclosure } from "@headlessui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
export const Sidebar = () => {
  return (
    <Disclosure as="nav">
      <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center p-2 rounded-md peer outline-none focus:ring-2 focus:ring-inset focus:ring-base-100 hover:bg-base-content hover:text-base-100 group transition-colors duration-500">
        <GiHamburgerMenu
          aria-hidden="true"
          className="block w-6 h-6 md:hidden"
        />
      </Disclosure.Button>
      <div className="fixed h-screen w-1/2 bg-base-100 -left-96 top-0 z-20 lg:left-0 lg:w-[300px] peer-focus:left-0 peer:transition ease-out delay-100 duration-200"></div>
    </Disclosure>
  );
};
