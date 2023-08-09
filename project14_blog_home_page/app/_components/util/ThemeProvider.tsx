"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
const ThemeProviderC: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeProviderC;
