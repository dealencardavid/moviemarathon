import { useState } from "react";
import { motion } from "framer-motion";

import { HiOutlineChevronLeft } from "react-icons/hi2";
import Section from "./Section";

const questions = [
  {
    id: 1,
    question: "Is movie marathon out yet?",
    answer:
      "At this moment, movie marathon is still under development. But stay around, we will launch as soon as possible!",
  },
  {
    id: 2,
    question: "Will Movie Marathon be free to use?",
    answer:
      "Yes! Movie Marathon is a project that is born out of a passion for films and the desire to deepen my knowledge in web development. I want to share it with whoever desire to have fun creating their own film marathons.",
  },
  {
    id: 3,
    question: "How many movies can I pick per marathon?",
    answer:
      "The goal in Movie Marathon is to estimulate curating choices. For that reason, each marathon could be composed of 3 to 9 movies.",
  },
  {
    id: 4,
    question: "How is the curation score calculated?",
    answer:
      "Since our goal is to collecting movies into a single experience, we do not rate each movie individually. Rather, each movie is rated by the user according to its relevance to the selected theme. When the marathon is over, the user rate the overall flow and experience to generate the final curation score.",
  },
];

function Faq() {
  return (
    <Section>
      <div className="flex flex-col gap-4 bg-stone-800 border border-stone-200 py-3 px-4 shadow-xl lg:w-[800px] md:py-8 rounded-xl">
        <p className="text-white font-semibold text-4xl">
          Frequently asked questions
        </p>
        <div className="flex flex-col gap-2">
          {questions.map((question) => (
            <Question
              key={question.id}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Faq;

function Question({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-stone-200 last:border-0"
    >
      <button
        onClick={() => setOpen((open) => !open)}
        className="py-4 w-full flex items-center justify-between"
      >
        <motion.span
          variants={{
            open: {
              color: "#F78855",
            },
            closed: {
              color: "#e7e5e4",
            },
          }}
          className="text-base text-start font-medium"
        >
          {question}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "-90deg",
              color: "#F78855",
            },
            closed: {
              rotate: "0deg",
              color: "#e7e5e4",
            },
          }}
        >
          <HiOutlineChevronLeft className="text-xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "16px" : "0px",
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="overflow-hidden text-stone-200"
      >
        <p className=" text-sm">{answer}</p>
      </motion.div>
    </motion.div>
  );
}
