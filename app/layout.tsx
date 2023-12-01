import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";

import { Header } from "./components/Header/Header";
import { HeaderChildren } from "./components/Header/HeaderChildren";

const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Prime Anime",
  description: "Prime Anime Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pt_sans.className} antialiased bg-bgBlue1`}>
        <Header>
          <HeaderChildren />
        </Header>
        {children}
      </body>
    </html>
  );
}
