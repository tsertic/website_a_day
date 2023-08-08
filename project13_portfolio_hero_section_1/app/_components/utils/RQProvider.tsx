"use client";
interface IRQProvider {
  children: React.ReactNode;
}
import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

export const RQProvider: React.FC<IRQProvider> = ({ children }) => {
  const [queryClient] = useState(new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
