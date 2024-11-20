"use client";

import { createContext, useState } from "react";

import { navLinks } from "@/lib/data";

type ContextProviderProps = {
  children: React.ReactNode;
};

type TSectionName = (typeof navLinks)[number]["name"];

type ActiveSectionContextType = {
  currentActiveSection: TSectionName;
  setCurrentActiveSection: React.Dispatch<React.SetStateAction<TSectionName>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ContextProviderProps) {
  const [currentActiveSection, setCurrentActiveSection] =
    useState<TSectionName>("Home");

  return (
    <ActiveSectionContext.Provider
      value={{ currentActiveSection, setCurrentActiveSection }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
