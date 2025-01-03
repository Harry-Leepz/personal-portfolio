"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function LightDarkBtn() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem]
        border border-white border-opactiy-40 shadow-2xl rounded-full font-2xl flex items-center justify-center
        hover:scale-[1.15] active:scale-105 transition-all dark:bg-slate-950'
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
