import { motion } from "framer-motion";
import {
  HiOutlinePuzzlePiece,
  HiOutlineFilm,
  HiOutlineHandThumbUp,
} from "react-icons/hi2";

import SectionHeading from "./SectionHeading";
import Section from "./Section";

const cardSteps = [
  {
    step: "1",
    title: "Create a theme",
    content:
      "Let your imagination flow and create a theme that best matches your mood.",
    icon: HiOutlinePuzzlePiece,
  },
  {
    step: "2",
    title: "Add your movies",
    content:
      "Curate your marathon with films that perfectly match your chosen theme",
    icon: HiOutlineFilm,
  },
  {
    step: "3",
    title: "Rate your marathon",
    content: "Rate your movie marathon cohesion and overall experience.",
    icon: HiOutlineHandThumbUp,
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    };
  },
};

function HowItWorks() {
  return (
    <Section>
      <SectionHeading overline="how it works">
        Curating your next marathon couldn&apos;t be easier
      </SectionHeading>
      <ul className="flex flex-col md:flex-row items-stretch justify-stretch gap-6 lg:gap-8">
        {cardSteps.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.li
              key={index}
              className="relative p-4 bg-stone-800 rounded-xl border border-stone-200 shadow-md flex-1 overflow-hidden group transition-all duration-300 ease-in-out"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-main-400 to-main-700 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-in-out" />

              <p className="absolute z-10 top-0 -right-0 text-9xl text-stone-700 group-hover:text-main-300 group-hover:rotate-12 transition-transform duration-300">
                {card.step}
              </p>
              <Icon className="mb-2 text-2xl text-main-500 group-hover:text-white transition-colors relative z-10 duration-300" />

              <div className="flex flex-col gap-2 z-10 relative">
                <p className="text-main-500 uppercase text-sm group-hover:text-white">
                  Step {card.step}
                </p>
                <p className="text-white font-semibold text-xl group-hover:text-stone-900">
                  {card.title}
                </p>
                <p className="text-stone-50 text-base z-10 group-hover:text-stone-800">
                  {card.content}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}

export default HowItWorks;
