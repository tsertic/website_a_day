"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../UI/Button";
import { NavListDesktop } from "./NavListDesktop";
import { NavMobileModal } from "./NavMobileModal";
export const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(true);
  return (
    <>
      <div className="w-full fixed top-5 ">
        <nav className="max-w-[1200px] w-full mx-auto px-2 flex justify-between">
          <div>
            <Image src="logo.svg" width={42} height={42} alt="logo" />
          </div>
          <NavListDesktop />

          <div className="hidden md:flex gap-[30px] items-center">
            <Link href="#" className="font-semibold">
              log in
            </Link>
            <Button>Sign up</Button>
          </div>

          <button onClick={() => setShowMobileNav(true)} className="md:hidden">
            <GiHamburgerMenu size={32} />
          </button>
        </nav>
      </div>

      <NavMobileModal
        showModal={showMobileNav}
        closeModal={() => setShowMobileNav(false)}
      />
    </>
  );
};
