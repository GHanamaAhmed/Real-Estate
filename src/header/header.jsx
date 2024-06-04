import { motion } from "framer-motion";
const variants = {
  hide: {
    scale: 0,
  },
  left: {
    translateX: -100,
    opacity: 0,
  },
  right: {
    translateX: 100,
    opacity: 0,
  },
  center: {
    translateX: 0,
    opacity: 1,
    scale: 1,
  },
};
export default function Header() {
  return (
    <motion.header
      initial="hide"
      whileInView={"center"}
      viewport={{
        once: true,
      }}
      className="flex w-full py-4 justify-between md:justify-around px-3"
    >
      <motion.ul
        initial="left"
        whileInView={"center"}
        viewport={{
          once: true,
        }}
        transition={{
          staggerChildren: 0.5,
          delayChildren: 0.4,
        }}
        className="hidden md:flex gap-x-5 lg:gap-x-7"
      >
        <motion.li
          variants={variants}
          className="text-slate-100 border-transparent border-b-2 py-1 hover:border-b-2 hover:border-green-400"
        >
          Buying
        </motion.li>
        <motion.li
          variants={variants}
          className="text-slate-100 border-transparent border-b-2 py-1 hover:border-b-2 hover:border-green-400"
        >
          Renting
        </motion.li>
        <motion.li
          variants={variants}
          className="text-slate-100 border-transparent border-b-2 py-1 hover:border-b-2 hover:border-green-400"
        >
          Selling
        </motion.li>
      </motion.ul>
      <motion.a
        variants={variants}
        initial="hide"
        whileInView={"center"}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="flex gap-x-2 h-fit my-1"
        href="https://ghanamaahmed.github.io/Real-Estate/"
      >
        <img src="./icons/Subtract.webp" alt="" />
        <p className="text-slate-100 font-semibold">Renty</p>
      </motion.a>
      <motion.ul
        initial="right"
        whileInView={"center"}
        viewport={{
          once: true,
        }}
        transition={{
          staggerChildren: 0.5,
          delayChildren: 0.4,
        }}
        className="hidden md:flex gap-x-5 lg:gap-x-7"
      >
        <motion.li
          variants={variants}
          className="text-slate-100 border-transparent border-b-2 py-1 hover:border-b-2 hover:border-green-400"
        >
          About Us
        </motion.li>
        <motion.li
          variants={variants}
          className="text-slate-100 border-transparent border-b-2 py-1 hover:border-b-2 hover:border-green-400"
        >
          Services
        </motion.li>
        <motion.li
          variants={variants}
          className="text-slate-100 border-transparent border-b-2 py-1 hover:border-b-2 hover:border-green-400"
        >
          Contact
        </motion.li>
      </motion.ul>
      <motion.button variants={variants} className="md:hidden">
        <img src="./icons/Menu.webp" alt="" />
      </motion.button>
    </motion.header>
  );
}
