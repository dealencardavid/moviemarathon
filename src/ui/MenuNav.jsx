import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pages } from "../utils/lists";

function MenuNav({ isOpen, setIsOpen }) {
  const border = !isOpen ? "" : " border-b border-stone-200";

  const navMenuVariants = {
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
      },
    },
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={navMenuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className={`absolute left-0 right-0 origin-top flex gap-3 bg-stone-900 top-full p-4 shadow-2xl lg:hidden transition-all duration-75 ${border}`}
    >
      <ul className="w-full flex flex-col items-center justify-center gap-8">
        {pages.map((page, index) => {
          return (
            <li key={index}>
              <LinkNav
                name={page.name}
                to={page.to}
                setIsOpen={setIsOpen}
                type="link"
              />
            </li>
          );
        })}
        <li>
          <LinkNav
            name="Login"
            to="login"
            setIsOpen={setIsOpen}
            type="outlineBtn"
          />
        </li>
        <li>
          <LinkNav
            name="Create account"
            to="login"
            setIsOpen={setIsOpen}
            type="primaryBtn"
          />
        </li>
      </ul>
    </motion.div>
  );
}

export default MenuNav;

function LinkNav({ name, to, setIsOpen, type }) {
  const navigate = useNavigate();

  const navLinkVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: -10,
      opacity: 0,
    },
  };

  const styles = {
    link: "font-medium text-stone-200 group relative hover:text-main-400",
    primaryBtn:
      "py-2 px-4 text-sm bg-main-500 text-stone-50 text-center rounded-lg hover:bg-main-600 transition-all duration-300",
    outlineBtn:
      "py-2 px-4 text-sm border border-stone-200 text-stone-200 text-center rounded-lg  hover:text-main-400 hover:border-main-400 transition-all duration-300",
  };

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
    navigate(to);
  }

  return (
    <motion.button
      onClick={handleClick}
      variants={navLinkVariants}
      className={styles[type]}
    >
      {name}
      {type === "link" && (
        <span className="bg-main-400 absolute -bottom-1 left-0 h-[1px] w-0 transition-all duration-200 ease-in-out group-hover:w-full" />
      )}
    </motion.button>
  );
}
