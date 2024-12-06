"use client";

import { motion } from "motion/react";

import useSectionInView from "@/lib/hooks";
import SectionHeading from "./section-heading";

import { skillsData } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay * 0.1,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id='skills'
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-slate-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            className='border bg-white border-black/20 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/70'
            key={skill}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
