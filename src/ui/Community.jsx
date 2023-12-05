import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import Overline from "./Overline";
import SupportParagraph from "./SupportParagraph";

import chronoquest from "../assets/marathons/chronoquest.png";
import criminalconundrum from "../assets/marathons/crimeconundrum.png";
import celestialodyssey from "../assets/marathons/celestialodyssey.png";
import midnightshivers from "../assets/marathons/midnightshivers.png";

const cards = [
  {
    marathonTitle: "ChronoQuest",
    description: "Movies about time travel adventures.",

    cover: chronoquest,
  },
  {
    marathonTitle: "Celestial Odyssey",
    description: "Unveiling cosmic mysteries and exploring the depths of space",
    cover: celestialodyssey,
  },
  {
    marathonTitle: "Criminal Conundrum",
    description:
      "Crime epics: unraveling the intricacies of power, greed, and intrigue.",
    cover: criminalconundrum,
  },
  {
    marathonTitle: "Midnight Shivers",
    description: "A haunting collection of horror classics.",
    cover: midnightshivers,
  },
];

function Community() {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["65%", "-30%"]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <>
      <section
        className="h-[300vh] relative bg-stone-900 -my-24 w-full hidden md:block"
        style={{ x }}
        ref={targetRef}
      >
        <div className="sticky top-0 h-screen flex justify-center items-center overflow-x-clip bg-stone-900">
          <motion.div
            className="absolute container flex flex-col gap-5 my-auto px-4 md:px-8 lg:px-28"
            style={{ opacity: headingOpacity }}
          >
            <div className="flex flex-col gap-2 items-start">
              <Overline>Inspiring Marathons</Overline>
              <h2 className="text-white text-4xl font-semibold text-left max-w-md">
                Engage with the community&apos;s curations
              </h2>
            </div>
            <SupportParagraph alignment="left">
              Join a vibrant community and get inspired by curated marathons
              shared by other users. Explore an array of thematic movie
              marathons created by the community, and find inspiration for your
              next film experience.
            </SupportParagraph>
          </motion.div>
          <motion.div className="flex gap-16" style={{ x }}>
            {cards.map((card, index) => (
              <CommunityCard
                title={card.marathonTitle}
                key={index}
                description={card.description}
                cover={card.cover}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <section className="md:hidden flex flex-col items-center gap-8 lg:gap-20 px-4 md:px-8 lg:px-28 py-16 font-body my-16 container mx-auto bg-stone-900">
        <div className="flex flex-col gap-2 items-start">
          <Overline>Inspiring Marathons</Overline>
          <h2 className="text-white text-4xl font-semibold text-left max-w-md">
            Engage with the community&apos;s curations
          </h2>
        </div>
        <SupportParagraph alignment="left">
          Join a vibrant community and get inspired by curated marathons shared
          by other users. Explore an array of thematic movie marathons created
          by the community, and find inspiration for your next film experience.
        </SupportParagraph>
        <div className="flex flex-col gap-8">
          {cards.map((card, index) => (
            <CommunityCard
              title={card.marathonTitle}
              key={index}
              description={card.description}
              cover={card.cover}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Community;

function CommunityCard({ title, description, cover }) {
  return (
    <motion.div className="relative h-[525px] md:h-[670px] w-80 md:w-96 rounded-xl bg-gradient-to-br from-main-400 to-main-700 font-body ">
      <div className="absolute inset-1 flex flex-col gap-6 p-6 rounded-xl bg-stone-800 shadow-xl">
        <div className="flex flex-col gap-2 h-28">
          <p className="text-left text-2xl font-semibold text-main-500">
            {title}
          </p>
          <p className="text-left text-md italic text-stone-300">
            {description}
          </p>
        </div>
        <img
          className=" w-56 self-center"
          loading="lazy"
          alt="movie poster"
          src={cover}
        />
      </div>
    </motion.div>
  );
}
