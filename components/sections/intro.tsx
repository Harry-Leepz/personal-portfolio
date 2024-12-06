"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import { useActiveSectionContext } from "@/context/active-section-context";
import useSectionInView from "@/lib/hooks";
import image from "@/public/profile.png";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setCurrentActiveSection, setTimeSinceLastClicked } =
    useActiveSectionContext();

  return (
    <section
      ref={ref}
      className='mb-28 text-center max-w-[50rem] sm:mb-0 scroll-mt-[100rem]'
      id='home'
    >
      {/* Profile Image */}
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={image}
              alt='Harkarn Dhillon Portrait'
              width='192'
              height='192'
              quality={95}
              priority={true}
              className='h-26 w-26 rounded-full border-white border-[0.35rem] shadow-xl '
            />
          </motion.div>

          <motion.span
            className='text-5xl absolute bottom-0 right-5'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 0.7,
              delay: 0.1,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Introduction Text */}
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl !leading-[1.5] font-medium sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hey, I&apos;m Harry</span> — a London-based
        <span className='font-bold'> Software Developer</span> with over
        <span className='font-bold'> 3 years</span> of expertise in creating
        seamless, user-centric web applications. I specialize in front-end
        development with{" "}
        <span className='italic underline'>React (Next.js).</span>
      </motion.h1>

      {/* Navigation Links */}
      <motion.div
        className='flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href='#contact'
          className='group bg-slate-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 transition dark:bg-slate-800 dark:text-white/80'
          onClick={() => {
            setCurrentActiveSection("Contact");
            setTimeSinceLastClicked(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          href=''
          className='group bg-white text-slate-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110 hover:bg-slate-50 active:scale-105 transition border border-slate-900/10 dark:bg-white/10 dark:text-white/80'
        >
          Download CV{" "}
          <HiDownload className='opacity-70 group-hover:translate-y-1 transition' />
        </a>

        <a
          href='https://www.linkedin.com/in/harkarn-dhillon/'
          target='_blank'
          className='bg-white text-slate-700 flex p-4 items-center gap-2 rounded-full text-[1.25rem] outline-none 
          focus:scale-[1.15] hover:text-slate-950  hover:scale-[1.15] hover:bg-slate-50 active:scale-[1.15] transition border border-slate-900/10
          dark:bg-white/10 dark:text-white/80'
        >
          <BsLinkedin />
        </a>

        <a
          href='https://github.com/Harry-Leepz'
          target='_blank'
          className='bg-white text-slate-700 flex p-4 items-center gap-2 rounded-full text-[1.35rem] outline-none 
          focus:scale-[1.15] hover:text-slate-950 hover:scale-[1.15] hover:bg-slate-50 active:scale-[1.15] transition border border-slate-900/10
          dark:bg-white/10 dark:text-white/80'
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
