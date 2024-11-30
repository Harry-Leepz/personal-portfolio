"use client";

import { motion } from "motion/react";
import { FaPaperPlane } from "react-icons/fa";

import useSectionInView from "@/lib/hooks";
import SectionHeading from "./section-heading";

import { sendEmail } from "@/actions/actions";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={ref}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className='text-slate-700 -mt-6'>
        Please contact me directly via{" "}
        <a
          className='underline font-semibold'
          href='mailto:hdhillon478@gmail.com'
          target='_blank'
        >
          email
        </a>{" "}
        or through this form.
      </p>

      <form action={sendEmail} className='mt-10 flex flex-col'>
        <input
          name='senderEmail'
          type='email'
          className='h-14 rounded-lg border border-black/20 px-4'
          placeholder='Your email'
          required
          maxLength={500}
        />
        <textarea
          name='message'
          placeholder="What's on your mind?"
          className='h-52 rounded-lg border border-black/20 p-4 my-3'
          required
          maxLength={500}
        />
        <button
          type='submit'
          className='h-[3rem] w-[8rem] rounded-full outline-none transition-all text-white bg-slate-900 flex items-center justify-center gap-2 group focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 '
        >
          Submit{" "}
          <FaPaperPlane className='text-xs opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
      </form>
    </motion.section>
  );
}
