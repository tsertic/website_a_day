import React from "react";
import { Button } from "./Button";
interface IRoundInput {
  buttonText: string;
  placeholderText: string;
  bgColor: string;
}
export const RoundInput: React.FC<IRoundInput> = ({
  buttonText,
  placeholderText,
  bgColor,
}) => {
  return (
    <div
      className={`relative lg:max-w-[450px] w-full ${bgColor} rounded-[30px] p-4 flex justify-between`}
    >
      <input
        type="text"
        className=" bg-transparent outline-none"
        placeholder={placeholderText}
      />
      <Button>{buttonText}</Button>
    </div>
  );
};
