import { motion } from "framer-motion";

import figmaCover from "../assets/peek/figma-cover.png";
import githubCover from "../assets/peek/github-cover.png";

import Overline from "./Overline";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

function TakeAPeek() {
  return (
    <Section>
      <SectionHeading overline="behind the scenes">
        Take a peek at Movie Marathon
      </SectionHeading>
      <motion.div layout className="flex flex-col lg:flex-row gap-8">
        <TechPeek
          label="design"
          title="Design and Code architecture"
          img={figmaCover}
          btn="Figma file"
          link="https://www.figma.com/file/goHvgb0ytH8WO8yBUJXGFT/MovieApp?type=design&t=5EZ4K8NbNIzrFPsG-6"
        >
          In this Figma file, you&apos;ll find an overview of the influences and
          design decisions shaping both the website and the web app (currently
          in development). Additionally, you&apos;ll discover the code
          architecture for the upcoming app.
        </TechPeek>
        <TechPeek
          label="github"
          title="Codebase"
          img={githubCover}
          btn="Github repository"
          link="https://github.com/dealencardavid/moviemarathon"
        >
          Here, you&apos;ll discover the repository for this project. Feel free
          to explore the code and see how it was developed! Your feedback and
          suggestions for improvement are greatly appreciated and welcomed.
        </TechPeek>
      </motion.div>
    </Section>
  );
}

export default TakeAPeek;

function TechPeek({ label, title, img, children, btn = "Link", link }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex-1 max-w-sm lg:max-w-xl flex flex-col gap-8 p-3 bg-stone-800 rounded-lg font-body shadow-xl"
    >
      <motion.div
        variants={{
          initial: { height: "192px" },
          hover: { height: "144px" },
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.3,
        }}
        className=" bg-stone-50 rounded shadow-inner overflow-hidden"
      >
        <img alt="Cover" src={img} className="" />
      </motion.div>
      <div className="overflow-hidden group flex flex-col gap-4 px-6">
        <div className="flex flex-col items-start">
          <Overline size="small">{label}</Overline>
          <p className="text-lg font-semibold text-stone-50">{title}</p>
        </div>
        <p className=" text-sm text-stone-50 mb-2">{children}</p>
        <motion.div
          variants={{
            initial: {
              height: "0px",
              opacity: 0,
            },
            hover: {
              height: "48px",
              opacity: 1,
            },
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
          }}
        >
          <a
            className="text-main-400 underline w-fit text-base font-medium rounded-md hover:text-main-500 transition-colors duration-200"
            href={link}
            target="blank"
          >
            {btn}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
