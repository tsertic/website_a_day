import React from "react";
import { FoodCard } from "../../cards/FoodCard";

export const HowOrderSection = () => {
  return (
    <section>
      <h1 className="section-title mb-[40px] lg:mb-[60px]">How To Order</h1>
      <div className="flex justify-center flex-wrap gap-[50px] lg:flex-nowrap lg:gap-[125px] ">
        <FoodCard
          index={1}
          cardData={{
            name: "Choose your location",
            iconSrc: "/decorative-icons/lolipop.svg",
          }}
        />
        <FoodCard
          index={2}
          cardData={{
            name: "Choose what to eat",
            iconSrc: "/decorative-icons/person.svg",
          }}
        />
        <FoodCard
          index={3}
          cardData={{
            name: "May your first order",
            iconSrc: "/decorative-icons/burger.svg",
          }}
        />
        <FoodCard
          index={4}
          cardData={{
            name: "Now! Your food in way",
            iconSrc: "/decorative-icons/house.svg",
          }}
        />
      </div>
    </section>
  );
};
