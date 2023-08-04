import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./_components/navigation/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farmers groceries",
  description: "Practice hero section exercise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="container min-h-screen mx-auto ">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
