"use client";

import { motion } from "motion/react";

import Link from "next/link";
import clsx from "clsx";

import { useActiveSectionContext } from "@/context/active-section-context";
import { navLinks } from "@/lib/data";
import { TSectionName } from "@/lib/types";

export default function Header() {
  const {
    currentActiveSection,
    setCurrentActiveSection,
    setTimeSinceLastClicked,
  } = useActiveSectionContext();

  const handleNavLinkClick = (navLink: TSectionName) => {
    setCurrentActiveSection(navLink);
    setTimeSinceLastClicked(Date.now());
  };

  return (
    <header className='z-[999] relative'>
      <motion.div
        className='fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white 
        border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.3] backdrop-blur-[0.5rem] 
        sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        initial={{ y: -300, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[inital] sm:py-0'>
        <ul
          className='flex w-[22.rem] flex-wrap items-center justify-center 
          gap-y-1 text-[0.9rem] font-medium text-slate-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.hash}
              className='relative h-3/4 flex items-center justify-center'
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-slate-950 transition",
                  { "text-slate-950": currentActiveSection === link.name }
                )}
                onClick={() => handleNavLinkClick(link.name)}
              >
                {link.name}

                {currentActiveSection === link.name && (
                  <motion.span
                    className='absolute bg-slate-200 rounded-full inset-0 -z-10'
                    layoutId='currentActiveSection'
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
