"use client";
import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";

import useSectionInView from "@/lib/hooks";

import { experiencesData } from "@/lib/data";

import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <section ref={ref} id='experience' className='mb-28 scroll-mt-28 sm:mb-40'>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <ExperienceTimelineItem key={index} item={item} index={index} />
        ))}
      </VerticalTimeline>
    </section>
  );
}

type ExperienceTimelineItemProps = {
  item: {
    date: string;
    icon: React.ReactNode;
    title: string;
    location: string;
    description: string;
  };
  index: number;
};

function ExperienceTimelineItem({ item, index }: ExperienceTimelineItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div key={index} ref={ref} className='vertical-timeline-element'>
      <VerticalTimelineElement
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af",
        }}
        visible={inView}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: "white",
          fontSize: "1.5rem",
        }}
      >
        <h3 className='font-semibold capitalize'>{item.title}</h3>
        <p className='!mt-0 font-normal'>{item.location}</p>
        <p className='!mt-1 !font-normal text-gray-700'>{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
}
