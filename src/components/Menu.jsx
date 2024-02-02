import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

import { navLinks } from "@constants/constant";
import Button from "./Button";

const animateMenu = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      type: "spring",
      mass: 0.3,
      ease: "easeIn",
      when: "beforeChildren",
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

function Menu({ setOpenMenu }) {
  return (
    <motion.div
      className="block lg:hidden bg-body z-50 w-full flex-column fixed inset-0 h-screen bg-opacity-30 backdrop-blur-sm"
      variants={animateMenu}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => setOpenMenu(false)}
    >
      <div
        className="w-[80%] isolate h-full absolute top-0 right-0 bg-body border-l border-solid border-br-light flex-column gap-4 !items-center pb-6"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute top-4 right-4 p-1 transition-sm active:scale-95 shadow-sm"
          onClick={() => setOpenMenu(false)}
          title="close-menu"
        >
          <CgClose size="25" />
        </span>
        <nav className="flex-1 flex-column gap-6 mt-16 mb-16 md:mt-[20%] md:mb-[15%] px-[4%] overflow-y-auto">
          {navLinks.map((link, idx) => (
            <NavLinks
              key={idx}
              {...link}
              idx={idx}
              onClick={() => setOpenMenu(false)}
            />
          ))}
        </nav>
        <Button title="Buy on Dagora" className="!w-[70%]" type="normal" />
      </div>
    </motion.div>
  );
}

export default Menu;
