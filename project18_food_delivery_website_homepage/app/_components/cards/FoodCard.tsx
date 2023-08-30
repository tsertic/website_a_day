import { IOrderCardData } from "@/types/types";
import React from "react";
import Image from "next/image";
export const FoodCard: React.FC<IOrderCardData> = ({ index, cardData }) => {
  return (
    <div className=" p-[15px] md:py-[44px] md:px-[23px] rounded-[28px] bg-base-200 w-full max-w-[303px] flex flex-col items-center">
      <div className="py-[18px] px-[24px] rounded-[16px] bg-base-100 mb-[32px] inline-block">
        <Image
          src={cardData.iconSrc}
          width={54}
          height={54}
          alt={`${cardData.name} icon`}
        />
      </div>
      <p className="text-center text-2xl font-medium capitalize">
        {cardData.name}
      </p>
    </div>
  );
};
