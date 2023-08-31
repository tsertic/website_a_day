import React from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
export const ClientsFeedbackSection = () => {
  return (
    <section>
      <h1 className="section-title">Our Clients Feedback</h1>
      <h3 className="text-center mb-[55px]">
        The food at your doorstep. Why starve when you have us. You hunger
        partner. Straight out of the oven to your doorstep.
      </h3>
      <div className="flex flex-col items-center w-full px-1 max-w-[800px] mx-auto gap-[42px] mb-[25px]">
        <img
          src="/images/orange-quotation.svg"
          alt="giant quotation for decorative purpose"
        />
        <p className="font-medium italic text-2xl text-center leading-[34px] ">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi”
        </p>
        <div className="text-center">
          <p className="font-semibold">Mitchell Marsh</p>
          <p className="text-base-content/80">CEO, Bexon Agency</p>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button className="round-button bg-base-200 ">
          <BiChevronLeft size={26} />
        </button>
        <button className="round-button bg-primary  text-primary-content">
          <BiChevronRight size={26} />
        </button>
      </div>
    </section>
  );
};
