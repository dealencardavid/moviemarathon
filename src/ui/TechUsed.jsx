import { motion } from "framer-motion";
import Overline from "./Overline";
import { techs } from "../utils/lists";

function TechUsed() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cards = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <Overline>Technologies used</Overline>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
        }}
        className="w-full place-items-center  grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-auto md:gap-y-12  xl:grid-cols-3"
      >
        {techs.map((tech, index) => {
          return (
            <motion.a
              variants={cards}
              viewport={{
                once: true,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: {
                  duration: 0.02,
                  ease: "circInOut",
                },
              }}
              className=" w-72 flex items-center justify-between p-6 bg-stone-800 rounded-xl shadow-xl transition-all duration-200 hover:outline hover:outline-main-500 hover:shadow-2xl"
              key={index}
              href={tech.href}
              target="_blank"
            >
              <div className="flex flex-col items-start">
                <Overline size="small">{tech.label}</Overline>
                <p className="text-stone-50 font-extrabold text-xl">
                  {tech.name}
                </p>
              </div>
              <img
                alt={`${tech.name} logo`}
                href={tech.href}
                src={tech.icon}
                className=" h-12"
              />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}

export default TechUsed;
