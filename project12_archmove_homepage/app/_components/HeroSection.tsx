import React from "react";
import { Button } from "./Button";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <section>
      <h1 className="text-2xl md:text-4xl mb-[32px] md:mb-[64px]">
        Build Your
        <br />
        Dream <span className="text-primary">House</span>
      </h1>
      <div className="flex justify-between flex-col md:flex-row gap-[40px]">
        <div className="max-w-[300px]">
          <p className="mb-[40px]">
            100% guaranteed build safe, comfortable and transparent with a
            project management for the best result
          </p>
          <Button href="#" onClick={() => {}}>
            Free Consultation
          </Button>
        </div>
        <div>
          <Image
            width={768}
            height={480}
            alt="home decoration"
            src="/images/hero-section.png"
          />
        </div>
      </div>
    </section>
  );
};
