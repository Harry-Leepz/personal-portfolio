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
  },
  {
    title: "Developer Jobs",
    description:
      "Inspired by Indeed, this website allows users to search for developer jobs by technology.",
    tags: ["React", "TypeScript", "Tanstack-React Query", "Radix UI", "CSS"],
    imageUrl: devjobsImage,
  },
] as const;
