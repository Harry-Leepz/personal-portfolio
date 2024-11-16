import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import RedBlur from "@/components/background/red-blur";
import BlueBlur from "@/components/background/blue-blur";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry | Personal Portfolio",
  description: "Full Stack Developer with over 3 years experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-slate-200 text-slate-950 pt-28 sm:pt-36`}
      >
        <RedBlur />
        <BlueBlur />
        <Header />
        {children}
      </body>
    </html>
  );
}
