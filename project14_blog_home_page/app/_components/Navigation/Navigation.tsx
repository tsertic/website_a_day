import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GradientButton } from "../UI/GradientButton";
import { BsSearch } from "react-icons/bs";
export const Navigation = () => {
  return (
    <div className="w-full bg-base-100 py-[40px] shadow-lg font-roboto">
      <nav className="max-w-[1140px] px-[16px] mx-auto flex justify-between items-center">
        <div>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <GradientButton>
              <label htmlFor="my-drawer" className=" ">
                <RxHamburgerMenu cursor="pointer" size={20} />
              </label>
            </GradientButton>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl font-black tracking-[.5rem]">
            Kontaku<span className="text-primary ">.</span>
          </p>
        </div>
        <div>
          <GradientButton>
            <BsSearch size={20} cursor="pointer" />
          </GradientButton>
        </div>
      </nav>
    </div>
  );
};
