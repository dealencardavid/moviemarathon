import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import Overline from "./Overline";
import SupportParagraph from "./SupportParagraph";
import mockup from "../assets/mockup/main-screen.svg";

function Hero() {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.65]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <>
      <motion.section
        style={{ opacity }}
        ref={targetRef}
        className="relative h-screen py-16 px-28 lg:flex flex-col items-center bg-stone-900 before:h-72 before:w-72 before:rounded-full  before:pointer-events-none before:absolute before:z-0 before:bg-main-500 before:opacity-40 before:blur-[200px] before:left-1/2 before:-translate-x-1/2 before:-top-36 hidden"
      >
        <motion.div
          style={{ scale, x: "-50%", position }}
          className="left-1/2 z-10 flex flex-col items-center gap-8 max-w-xl"
        >
          <div className="flex flex-col items-center gap-6 container">
            <div className="flex flex-col items-center justify-center gap-3">
              <Overline>Create, Curate, Celebrate</Overline>
              <h1 className="font-display font-semibold text-center text-white text-9xl">
                Made for film lovers
              </h1>
            </div>
            <SupportParagraph>
              Create your film marathons, choose a theme that moves you, curate
              the best movies and rate your creation.
            </SupportParagraph>
          </div>
        </motion.div>
      </motion.section>
      <section className="relative h-screen py-16 px-28 flex flex-col items-center gap-16  bg-stone-900 before:h-72 before:w-72 before:rounded-full  before:pointer-events-none before:absolute before:z-0 before:bg-main-500 before:opacity-40 before:blur-[200px] before:left-1/2 before:-translate-x-1/2 before:-top-36 lg:hidden">
        <div className="flex flex-col items-center gap-6 container mx-auto max-w-md">
          <div className="flex flex-col items-center gap-3">
            <Overline>create, curate, celebrate</Overline>
            <h1 className="font-display font-semibold text-center text-white text-8xl">
              Made for film lovers
            </h1>
          </div>
          <SupportParagraph>
            Create your film marathons, choose a theme that moves you, curate
            the best movies and rate your creation.
          </SupportParagraph>
        </div>
        <img
          alt="Mockup screen of the MovieMarathon app"
          src={mockup}
          className=" min-w-full border-[0.35px] border-stone-200 rounded-lg drop-shadow-main"
        />
      </section>
    </>
  );
}

export default Hero;
