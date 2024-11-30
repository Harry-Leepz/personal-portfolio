import React from "react";

import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { SiCodementor } from "react-icons/si";

import nandlImage from "@/public/nandl.png";
import devjobsImage from "@/public/dev-jobs.png";
import primehavenImage from "@/public/prime-haven.png";

export const navLinks = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const projectsData = [
  {
    title: "Nourish and Lift",
    description:
      "E-Commerce website selling basic starting gym equipment, like dubmbells, kettlebells, and body weights.",
    tags: ["Python", "Django", "PostgresSQL", "Bootstrap", "Stripe"],
    imageUrl: nandlImage,
    link: "https://github.com/Harry-Leepz/Nourish-and-Lift",
  },
  {
    title: "Prime Haven",
    description:
      "A rental property website, allowing users to search for properties, view details, and contact the owner.",
    tags: [
      "React",
      "JavaScript",
      "Next.js",
      "Next-Auth",
      "Cloudinary",
      "Tailwind",
      "MongoDB",
    ],
    imageUrl: primehavenImage,
    link: "https://github.com/Harry-Leepz/prime-haven",
  },
  {
    title: "Developer Jobs",
    description:
      "Inspired by Indeed, this website allows users to search for developer jobs by technology.",
    tags: ["React", "TypeScript", "Tanstack-React Query", "Radix UI", "CSS"],
    imageUrl: devjobsImage,
    link: "https://github.com/Harry-Leepz/dev-jobs-react",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Python",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Prisma",
  "Django Rest Framework",
  "Node.js",
  "Framer Motion",
  "Git",
] as const;

export const experiencesData = [
  {
    title: "Graduated @ Code Institute",
    location: "London, UK",
    description:
      "Enrolled in the Full-Stack Software Development course at Code Institute. Graduated with a diploma in Full-Stack Software Development twelve months late.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Software Developer @ PwC",
    location: "London, UK",
    description:
      "I worked as a Software Developer at PwC. Working in the Advanced research and Enginnering Centre. Delivered complex projects in coordination with multi-faceted teams, encompassing designers, project managers, and QA engineers.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Course Mentor @ Code Institute",
    location: "Remote",
    description:
      "Mentoring over 50 students through the complete full-stack development process, covering HTML, CSS, JavaScript, Python, and Django. Guiding students and supporting them to build strong technical foundations and develop industry-relevant skills.",
    icon: React.createElement(SiCodementor),
    date: "2022 - present",
  },
] as const;
