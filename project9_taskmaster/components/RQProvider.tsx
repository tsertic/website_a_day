"use client";
interface RQProvider {
  children: React.ReactNode;
}
import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

export const RQProvider: React.FC<RQProvider> = ({ children }) => {
  const [client] = useState(new QueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
