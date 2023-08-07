import Image from "next/image";
import React from "react";
import { BsSearch } from "react-icons/bs";
import Logo from "@/public/logo-arch.svg";
import { Button } from "./Button";
export const Navbar = () => {
  return (
    <div className="fixed w-full">
      <nav className="mx-auto max-w-[1400px] px-4 py-[20px] flex justify-between items-center text-body">
        <div className="flex gap-[40px]">
          <a href="/">
            <Image
              src="/logo-arch.svg"
              width={60}
              height={28}
              alt="arch move logo"
              className="w-[84px] md:w-[60px]"
            />
          </a>
          <ul className=" gap-[24px] md:flex hidden">
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Design Gallery</a>
            </li>
            <li>
              <a href="#">Architects</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
          </ul>
        </div>

        <div className="flex gap-[24px] items-center">
          <button className="bg-base-200 p-[8px] rounded-full">
            <BsSearch size={20} cursor="pointer" />
          </button>
          <div className="hidden md:flex gap-[24px] items-center">
            <a href="#">Sign In</a>
            <Button onClick={() => {}} href="#">
              Sign Up
            </Button>
          </div>
          <Image
            src="/hamburger.svg"
            width={32}
            height={32}
            alt="menu icon"
            className=" md:hidden cursor-pointer"
          />
        </div>
      </nav>
    </div>
  );
};
