import { Provider } from "./_components/Provider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo app feature react query and json server",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cyberpunk">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
