import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";

function HamburguerBtn({ isOpen, setIsOpen }) {
  const iconVariants = {
    initial: { rotate: 180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: -180, opacity: 0 },
  };

  return (
    <motion.button
      onClick={() => setIsOpen((isOpen) => !isOpen)}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.9 }}
      className="group p-2 bg-stone-800 border border-stone-200 text-stone-200 rounded-md drop-shadow-sm lg:hidden hover:border-main-400 transition-colors duration-200"
    >
      <span className="sr-only">Open nav</span>
      <motion.div
        aria-hidden
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.2 },
        }}
        transition={{
          type: "spring",
          duration: 0.2,
        }}
        className="group-hover:text-main-400 transition-colors duration-200"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="icon-1"
              className="block"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.125, ease: "linear" }}
            >
              <HiXMark />
            </motion.span>
          ) : (
            <motion.span
              key="icon-2"
              className="block"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.125, ease: "linear" }}
            >
              <HiOutlineBars3 />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}

export default HamburguerBtn;
