"use client";

import React from "react";

import SectionHeading from "./section-heading";
import Project from "./project";

import useSectionInView from "@/lib/hooks";
import { projectsData } from "@/lib/data";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section id='projects' ref={ref} className='scroll-mt-28 mb-28'>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
