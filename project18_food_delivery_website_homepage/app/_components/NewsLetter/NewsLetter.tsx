import React from "react";
import { RoundInput } from "../UI/RoundInput";

export const NewsLetter = () => {
  return (
    <div className="bg-[#FFEFEC] py-[103px] px-[20px] lg:px-[100px] flex flex-col lg:flex-row justify-between items-center gap-[40px] lg:gap-0">
      <div>
        <p className="section-title text-left">Subscribe our newsletter</p>
        <p>
          Browse local restaurants and businesses for delivery by entering your
          address blow.
        </p>
      </div>
      <div className="w-full max-w-[700px] lg:flex lg:justify-end">
        <RoundInput
          placeholderText="Enter your email address"
          bgColor="bg-base-100"
          buttonText="Send"
        />
      </div>
    </div>
  );
};
