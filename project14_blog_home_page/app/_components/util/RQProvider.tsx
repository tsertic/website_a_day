"use client";
interface IRQProvider {
  children: React.ReactNode;
}
import { QueryClientProvider, QueryClient } from "react-query";

import React, { useState } from "react";

export const RQProvider: React.FC<IRQProvider> = ({ children }) => {
  const [client] = useState(new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
