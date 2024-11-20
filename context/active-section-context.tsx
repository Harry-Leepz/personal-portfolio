"use client";

import { createContext, useState, useContext } from "react";

import { navLinks } from "@/lib/data";

type ContextProviderProps = {
  children: React.ReactNode;
};

type TSectionName = (typeof navLinks)[number]["name"];

type ActiveSectionContextType = {
  currentActiveSection: TSectionName;
  setCurrentActiveSection: React.Dispatch<React.SetStateAction<TSectionName>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

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

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection must be used within a ActiveSectionContextProvider"
    );
  }
  return context;
}
