import React from "react";
import { StoreButton } from "../../UI/StoreButton";
import Image from "next/image";
import { Button } from "../../UI/Button";

export const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[80px] justify-between">
      <div className="flex-1 ">
        <div className="mb-[32px]">
          <h1 className="font-bold text-[30px] text-center lg:text-start md:text-[50px] lg:text-[55px] mb-4">
            Your Favorite Food Delivery Partner
          </h1>
          <p className="text-[1.15rem]">
            The food at your doorstep. Why starve when you have us. You hunger
            partner. Straight out of the oven to your doorstep.
          </p>
        </div>
        <div>
          <div className="relative lg:max-w-[450px] w-full bg-base-200 rounded-[30px] p-4 flex justify-between">
            <input
              type="text"
              className=" bg-transparent outline-none"
              placeholder="Enter your delivery location"
            />
            <Button>Order Now</Button>
          </div>
          <div className="flex justify-center lg:justify-start mt-[35px] gap-[35px]">
            <StoreButton path="#">
              <Image
                src="/apple-store.svg"
                height={34}
                width={147}
                alt="apple store"
              />
            </StoreButton>
            <StoreButton path="#">
              <Image
                src="/google-store.svg"
                height={34}
                width={147}
                alt="google store"
              />
            </StoreButton>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/images/hero-img.png"
          width={570}
          height={470}
          alt="delivery man looking at his phone"
          className="w-full"
        />
      </div>
    </div>
  );
};
