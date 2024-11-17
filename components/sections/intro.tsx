"use client";

import Image from "next/image";

import { motion } from "motion/react";

import image from "@/public/profile.png";

export default function Intro() {
  return (
    <section className='mb-28 text-center max-w-[50rem] sm:mb-0'>
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
              stiffness: 150,
              duration: 0.7,
              delay: 0.1,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <p className='mb-10 mt-4 px-4 text-2xl !leading-[1.5] font-medium sm:text-4xl'>
        <span className='font-bold'>Hey, I&apos;m Harry</span> — a London-based
        <span className='font-bold'> Software Developer</span> with over
        <span className='font-bold'> 3 years</span> of expertise in creating
        seamless, user-centric web applications. I specialize in front-end
        development with
        <span className='font-bold italic underline'> React (Next.js).</span>
      </p>
    </section>
  );
}
