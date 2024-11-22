"use client";

import { createContext, useState, useContext } from "react";

import { TSectionName } from "@/lib/types";

type ContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  currentActiveSection: TSectionName;
  setCurrentActiveSection: React.Dispatch<React.SetStateAction<TSectionName>>;
  timeSinceLastClicked: number;
  setTimeSinceLastClicked: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ContextProviderProps) {
  const [currentActiveSection, setCurrentActiveSection] =
    useState<TSectionName>("Home");
  const [timeSinceLastClicked, setTimeSinceLastClicked] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        currentActiveSection,
        setCurrentActiveSection,
        timeSinceLastClicked,
        setTimeSinceLastClicked,
      }}
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
