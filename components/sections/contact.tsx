"use client";

import { motion } from "motion/react";
import toast from "react-hot-toast";

import useSectionInView from "@/lib/hooks";
import SectionHeading from "./section-heading";

import { sendEmail } from "@/actions/actions";
import SubmitBtn from "@/components/buttons/submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const handleSubmit = async (formData: FormData) => {
    const { data, error } = await sendEmail(formData);
    if (error) {
      toast.error(error);
      return;
    }
    if (data?.data === null) {
      toast.error(data.error?.message || "An unexpected error occurred.");
      return;
    }

    toast.success("Message sent!");
  };

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

      <form action={handleSubmit} className='mt-10 flex flex-col'>
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
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
