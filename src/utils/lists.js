export const pages = [
  { name: "Home", to: "/" },
  { name: "About", to: "about" },
  { name: "Contact", to: "contact" },
];

import { FaGithub, FaLinkedin } from "react-icons/fa6";
export const socials = [
  { name: "Github", icon: FaGithub, link: "https://github.com/dealencardavid" },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/david-de-alencar",
  },
];

import figma from "../assets/logos/figma.png";
import react from "../assets/logos/react.png";
import tailwind from "../assets/logos/tailwind.png";
import framermotion from "../assets/logos/framermotion.png";
import reactrouter from "../assets/logos/reactrouter.png";
import netlify from "../assets/logos/netlify.png";
import reactquery from "../assets/logos/reactquery.png";
import supabase from "../assets/logos/supabase.png";

export const techs = [
  {
    name: "Figma",
    label: "Design",
    icon: figma,
    href: "https://www.figma.com/",
  },
  { name: "React", label: "Frontend", icon: react, href: "https://react.dev/" },
  {
    name: "TailwindCSS",
    label: "Styling",
    icon: tailwind,
    href: "https://tailwindcss.com/",
  },
  {
    name: "FramerMotion",
    label: "Animation",
    icon: framermotion,
    href: "https://www.framer.com/motion/",
  },
  {
    name: "React Query",
    label: "Data-Fetching",
    icon: reactquery,
    href: "https://tanstack.com/query/latest",
  },
  {
    name: "React Router",
    label: "Routing",
    icon: reactrouter,
    href: "https://reactrouter.com/en/main",
  },
  {
    name: "Supabase",
    label: "Backend",
    icon: supabase,
    href: "https://supabase.com/",
  },
  {
    name: "Netlify",
    label: "Hosting",
    icon: netlify,
    href: "https://www.netlify.com/",
  },
];
