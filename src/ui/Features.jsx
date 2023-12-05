import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

import img from "../assets/mockup/main-screen.svg";
import Overline from "./Overline";
import SupportParagraph from "./SupportParagraph";

function Features() {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.2, 0.4],
    [1, 1.6, 1.6, 1.3, 1]
  );

  const y = useTransform(scrollYProgress, [0, 0.1], ["80%", "0%"]);

  const x = useTransform(
    scrollYProgress,
    [0, 0.4, 0.45, 0.6, 0.75, 0.8, 0.9, 1],
    ["0%", "0%", "-5%", "50%", "50%", "55%", "-50%", "-50%"]
    // [0, 0.5, 0.55, 0.6, 0.75, 0.8, 0.85, 1],
    // ["0%", "0%", "-5%", "50%", "50%", "55%", "-50%", "-50%"]
  );
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.55, 0.6, 0.75, 0.8],
    [0, 0, 1, 1, 0]
  );
  const opacity2 = useTransform(scrollYProgress, [0.8, 0.85], [0, 1]);

  return (
    <section className="mt-[-30vh] mb-[-10vh]  bg-stone-900 hidden lg:block">
      <div ref={targetRef} className="h-[700vh] w-full px-28">
        <div className="sticky top-1/2 transform -translate-y-1/2">
          <motion.div
            style={{ opacity: opacity1 }}
            className="absolute  top-1/2 -translate-y-1/2 left-1/2 -translate-x-[30rem] max-w-md flex flex-col gap-5"
          >
            <div className="flex flex-col items-start gap-2">
              <Overline>Unique capabilities</Overline>
              <h2 className="text-white font-semibold text-4xl">
                Effortlessly craft your movie marathons
              </h2>
            </div>
            <SupportParagraph alignment="left">
              Create, name, and define themes for your movie marathons
              effortlessly. Select your movies according to your chosen theme,
              watch your curated list smoothly and easily track your progress.
            </SupportParagraph>
          </motion.div>
          <motion.div
            style={{ opacity: opacity2 }}
            className="absolute  top-1/2 -translate-y-1/2 right-1/2 translate-x-[30rem] max-w-md text-right flex flex-col gap-5"
          >
            <div className="flex flex-col items-end gap-2">
              <Overline>Insights</Overline>
              <h2 className="text-white font-semibold text-4xl">
                Everything is just easy
              </h2>
            </div>
            <SupportParagraph alignment="right">
              Preview the most relevant infomation of your next movie. Plus,
              explore the statistics that reveal your movie-watching habits.
            </SupportParagraph>
          </motion.div>
          <div className="flex justify-center">
            <motion.div style={{ scale, y, x }} className="origin-center">
              <img
                src={img}
                className="h-[75vh] max-h-[45vw] w-auto border-[0.35px] border-stone-200 rounded-lg drop-shadow-main"
                alt="screen"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
