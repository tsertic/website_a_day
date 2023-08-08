"use client";
import React from "react";
import { Button } from "../UI/Button";

export const Navigation = () => {
  return (
    <nav className="w-full px-[50px] py-3 min-h-[100px] flex items-center justify-between font-inconsolata fixed">
      <div>
        <a href="/" className="text-primary text-[30px] font-medium">
          TS
        </a>
      </div>
      <div className="flex gap-[15px]">
        <ul className="flex gap-[15px] items-center text-neutral-focus text-nav">
          <li className="p-[10px]">
            <a
              href="#"
              className="hover:text-primary duration-400 transition-all"
            >
              <span className="text-primary mr-[6px]">01.</span>About
            </a>
          </li>
          <li className="p-[10px]">
            <a
              href="#"
              className="hover:text-primary duration-400 transition-all"
            >
              <span className="text-primary mr-[6px]">02.</span>Experiance
            </a>
          </li>
          <li className="p-[10px]">
            <a
              href="#"
              className="hover:text-primary duration-400 transition-all"
            >
              <span className="text-primary mr-[6px]">03.</span>Work
            </a>
          </li>
          <li className="p-[10px]">
            <a
              href="#"
              className="hover:text-primary duration-400 transition-all"
            >
              <span className="text-primary mr-[6px]">04.</span>Contact
            </a>
          </li>
        </ul>
        <Button href="#" onClickF={() => {}}>
          Resume
        </Button>
      </div>
    </nav>
  );
};
