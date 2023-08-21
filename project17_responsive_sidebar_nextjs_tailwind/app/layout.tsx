import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "./_components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Responsive sidebar",
  description: " Tailwind | headlesui/react | daisyui ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-base-200 text-base-content`}>
        <Sidebar />

        {children}
      </body>
    </html>
  );
}
