"use client";
import { useRef } from "react";

import Image from "next/image";
import { useScroll, motion, useTransform } from "motion/react";
import { BsGithub } from "react-icons/bs";

import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className='bg-slate-50 max-w-[42rem] border border-black/5 
      overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 group even:pl-8 hover:bg-slate-100 transition rounded-lg
      dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'
    >
      <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]'>
        <a href={link} target='_blank' className='flex items-center gap-2'>
          <BsGithub className='text-xl dark:text-white' />
          <h3 className='text-2xl font-semibold dark:text-white'>{title}</h3>
        </a>
        <p className='mt-2 leading-relaxed text-slate-700 dark:text-white/70'>
          {description}
        </p>
        <ul className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
          {tags.map((tag, index) => (
            <li
              className='bg-slate-900/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={90}
        className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
        group-even:right-[initial] group-even:-left-40 
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-hover:scale-105

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        transition
        '
      />
    </motion.section>
  );
}
