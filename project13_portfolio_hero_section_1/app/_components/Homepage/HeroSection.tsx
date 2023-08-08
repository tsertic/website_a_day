"use client";
import React from "react";
import { Button } from "../UI/Button";

export const HeroSection = () => {
  return (
    <section className=" min-h-screen flex flex-col justify-center items-start">
      <h2 className="text-primary font-inconsolata mb-3">Hi, my name is</h2>
      <h1 className="text-2xl md:text-4xl mb-2 text-neutral-focus">
        Tomislav Sertic.
      </h1>
      <h1 className="text-2xl md:text-4xl mb-4">I build things for the web.</h1>
      <p className="w-full md:max-w-[640px] mb-[50px]">
        Welcome to my software developer portfolio! With a passion for crafting
        digital solutions, I specialize in{" "}
        <span className="text-primary">full-stack development</span>, utilizing
        the power of <span className="text-primary">JavaScript</span>,{" "}
        <span className="text-primary">TypeScript</span>, and{" "}
        <span className="text-primary">Node.js</span>. From seamless user
        experiences on the front end to robust server-side logic, I strive to
        create applications that marry functionality with elegance. Explore a
        collection of my projects that reflect my dedication to clean code,
        problem-solving, and a relentless pursuit of innovation. Join me on a
        journey through lines of code that bring ideas to life in the digital
        realm.
      </p>
      <Button href="#">Check out my projects</Button>
    </section>
  );
};
