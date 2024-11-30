import { FaPaperPlane } from "react-icons/fa";

import SectionHeading from "./section-heading";

export default function Contact() {
  return (
    <section id='contact'>
      <SectionHeading>Contact Me</SectionHeading>

      <p>
        Please contact me directly via{" "}
        <a
          className='italic underline font-semibold'
          href='mailto:hdhillon478@gmail.com'
          target='_blank'
        >
          email
        </a>{" "}
        or through this form
      </p>

      <form action=''>
        <input type='email' />
        <textarea name='' />
        <button type='submit'>
          Submit <FaPaperPlane />
        </button>
      </form>
    </section>
  );
}
