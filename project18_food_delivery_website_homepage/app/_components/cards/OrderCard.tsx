import { IOrderCardData } from "@/types/types";
import React from "react";
import Image from "next/image";
export const OrderCard: React.FC<IOrderCardData> = ({ cardData }) => {
  return (
    <div className="inline-block p-[15px] md:p-[32px] rounded-[28px] bg-base-200 ">
      <div className="p-[14px] xl:p-[27px] rounded-full bg-base-100 mb-[32px]">
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
