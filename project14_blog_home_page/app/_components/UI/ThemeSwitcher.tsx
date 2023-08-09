"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      setTheme("light");
    }
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`absolute right-[2rem] top-[50%] py-1  -translate-y-1/2 shadow-md border-[1px] border-base-content h-[45px] w-fit  border-1 bg-base-200 flex flex-col p-1 rounded-lg`}
    >
      <div
        className={`${
          theme === "light" && "translate-y-[20px]"
        }  transition-all duration-800`}
      >
        {theme === "light" && (
          <span onClick={() => setTheme("dark")}>
            <BsFillMoonFill cursor="pointer" />
          </span>
        )}
        {theme === "dark" && (
          <span onClick={() => setTheme("light")}>
            <BsFillSunFill cursor="pointer" />
          </span>
        )}
      </div>
    </div>
  );
};
