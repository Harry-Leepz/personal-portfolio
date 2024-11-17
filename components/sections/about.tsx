"use client";

import { motion } from "motion/react";

import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
        Having gained experience across diverse industries, including{" "}
        <span className='font-medium'>retail, hospitality, and sales</span>, I
        made the decision to follow my passion for programming. I successfully
        completed a{" "}
        <span className='font-bold'>
          Diploma in Full Stack Software Development with Code Institute.
        </span>{" "}
        <span className='italic'>What I enjoy most about programming</span> is
        the challenge of problem-solving. I find immense satisfaction in
        discovering solutions to complex problems. My primary technology stack
        includes <span className='font-medium'>React and Next.js</span>, and I
        have working knowledge of{" "}
        <span className='font-medium'>TypeScript and Python</span>. Eager to
        expand my skill set, I am continually exploring new technologies. I am
        currently seeking a{" "}
        <span className='font-medium'>full-time position</span> as a software
        developer.{" "}
      </p>
      <p>
        <span className='italic'>Beyond coding</span>, I enjoy engaging in
        activities such as playing video games, watching movies or TV series,
        and reading. I am also passionate about{" "}
        <span className='font-medium'>continuous learning</span>. Currently, I
        am focusing on mastering data structures and algorithms, with plans to
        pursue a Computer Science degree at university.{" "}
      </p>
    </motion.section>
  );
}
