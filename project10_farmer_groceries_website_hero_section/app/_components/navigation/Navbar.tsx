import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex items-center relative justify-between mx-5 py-5">
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        width={300}
        height={70}
        className="w-40"
      />
      <ul className=" text-white  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-5">
        <li className="hover:text-yellow-200 transition-colors duration-500">
          <a href="#">Home</a>
        </li>
        <li className="hover:text-yellow-200 transition-colors duration-500">
          <a href="#">About</a>
        </li>
        <li className="hover:text-yellow-200 transition-colors duration-500">
          <a href="#">Feature</a>
        </li>
        <li className="hover:text-yellow-200 transition-colors duration-500">
          <a href="#">Contact</a>
        </li>
      </ul>
      <Image
        src="/assets/images/cart.png"
        alt="shopping cart"
        width={65}
        height={70}
        className="w-8"
      />
    </nav>
  );
};
