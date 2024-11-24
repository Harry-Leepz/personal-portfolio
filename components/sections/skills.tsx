import SectionHeading from "./section-heading";

import { skillsData } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id='skills'
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-slate-800'>
        {skillsData.map((skill) => (
          <li
            className='border bg-white border-black/20 rounded-xl px-5 py-3'
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
