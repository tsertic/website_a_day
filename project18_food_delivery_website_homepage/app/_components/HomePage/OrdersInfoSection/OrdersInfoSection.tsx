import React from "react";
import { OrderCard } from "../../cards/OrderCard";
import Image from "next/image";
export const OrdersInfoSection = () => {
  return (
    <section>
      <div className="mb-[40px]">
        <h1 className="section-title">
          More Than <span className="text-primary">10,000</span> Dishes <br />{" "}
          To Order!
        </h1>
        <p className="text-center">
          Welcome to The Biggest Network of Food Ordering & Delivery
        </p>
      </div>
      <div className="flex flex-col gap-[45px]">
        <div className="flex justify-end flex-col md:flex-row items-center gap-[30px] ">
          <div className="flex  gap-[15px]  md:gap-[32px] ">
            <OrderCard
              cardData={{
                iconSrc: "/decorative-icons/pizza.svg",
                name: "pizza",
              }}
            />
            <OrderCard
              cardData={{
                iconSrc: "/decorative-icons/burger.svg",
                name: "burger",
              }}
            />
            <OrderCard
              cardData={{
                iconSrc: "/decorative-icons/sushi.svg",
                name: "sushi",
              }}
            />
          </div>
          <div className="w-full max-w-[600px] p-[32px] bg-base-200 rounded-[30px]">
            <p className="max-w-[430px] w-full text-2xl font-medium">
              Find <span className="text-primary">deals</span>,{" "}
              <span className="text-accent">free delivery</span>, and more from
              our restaurant partners.
            </p>
            <Image
              className="ml-auto"
              src="/images/motorcycle.svg"
              width={192}
              height={116}
              alt="scooter decorative image"
            />
          </div>
        </div>
        <div className="flex justify-start flex-col-reverse md:flex-row items-center  ">
          <div className="w-full max-w-[600px] p-[32px] rounded-[30px]">
            <Image
              className="mb-[30px] w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
              src="/images/black-quotation.svg"
              width={60}
              height={60}
              alt="scooter decorative image"
            />
            <p className=" w-full text-xl md:text-2xl font-regular ">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
          </div>

          <div>
            <div className="flex  gap-[15px]  md:gap-[32px] ">
              <OrderCard
                cardData={{
                  iconSrc: "/decorative-icons/pasta.svg",
                  name: "pasta",
                }}
              />
              <OrderCard
                cardData={{
                  iconSrc: "/decorative-icons/salad.svg",
                  name: "salad",
                }}
              />
              <OrderCard
                cardData={{
                  iconSrc: "/decorative-icons/deserts.svg",
                  name: "deserts",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
