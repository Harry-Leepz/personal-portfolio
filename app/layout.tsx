import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";

import ActiveSectionContextProvider from "@/context/active-section-context";

import RedBlur from "@/components/background/red-blur";
import BlueBlur from "@/components/background/blue-blur";
import Header from "@/components/header/header";
import Footer from "@/components/sections/footer";
import LightDarkBtn from "@/components/buttons/light-dark-btn";

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
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-slate-200 text-slate-950 pt-28 sm:pt-36 dark:bg-slate-950 dark:text-slate-50 dark:text-opacity-90`}
      >
        <RedBlur />
        <BlueBlur />
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position='top-right' />
          <Footer />
        </ActiveSectionContextProvider>
        <LightDarkBtn />
      </body>
    </html>
  );
}
