"use client";
interface IRQProvider {
  children: React.ReactNode;
}
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const RQProvider: React.FC<IRQProvider> = ({ children }) => {
  const [client] = useState(new QueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
