import { RQProvider } from "@/components/RQProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App v4",
  description: "Tech: React-query,axios,daisyui,json-server",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="forest">
      <body className={inter.className}>
        <RQProvider>{children}</RQProvider>
      </body>
    </html>
  );
}
