import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Practice is important",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let themeDataPool = ["coffee", "winter", "luxury"];
  return (
    <html
      lang="en"
      data-theme={themeDataPool[Math.floor(Math.random() * 2)]}
      className="bg-neutral"
    >
      <body className="bg-neutral">{children}</body>
    </html>
  );
}
