import React from "react";
import Card from "./card";
import { motion } from "framer-motion";
import Counter from "../counter/counter";
const variants = {
  hide: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};
const textVariants = {
  hide: {
    opacity: 0,
    translateX: "100%",
  },
  show: {
    translateX: 0,
    opacity: 1,
  },
};
export default function Sectio1() {
  return (
    <>
      <img
        className="absolute -z-20 top-0 -left-10"
        height={200}
        width={200}
        src="./icons/Bgabstrack.png"
        alt=""
      />
      <img
        height={100}
        width={100}
        className="absolute -z-20 left-0 top-80"
        src="./icons/Ellipse2.png"
        alt=""
      />
      <img
        height={100}
        width={100}
        className="absolute -z-20 translate-x-full left-1/3 top-44"
        src="./icons/Ellipse3.png"
        alt=""
      />
      <motion.div
        initial="hide"
        whileInView={"show"}
        viewport={{
          once: true,
        }}
        transition={{
          staggerChildren: 0.5,
          delayChildren: 0.2,
        }}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-0 pt-5"
      >
        <div className="flex justify-center items-center md:justify-start">
          <motion.div className="w-10/12 flex flex-col gap-y-4 md:gap-y-10">
            <motion.h1
              variants={textVariants}
              className="text-slate-100 text-4xl"
            >
              Discover the ideal property here
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="text-zinc-500 text-justify"
            >
              As soon as I had found a few properties that suited me, I was able
              to forget about how difficult it was to find a suitable home.
            </motion.p>
            <motion.div
              variants={variants}
              className="bg-slate-100 rounded-lg py-2 px-4 justify-between md:flex-row flex gap-y-5 flex-col"
            >
              <div className="flex gap-x-3">
                <img src="./icons/Icon-1.svg" alt="" />
                <div className="flex flex-col">
                  <div className="flex gap-x-4 items-center">
                    <p className="text-zinc-500">Location</p>
                    <img src="./icons/flesh.svg" alt="" />
                  </div>
                  <p className="text-zinc-900 font-semibold">Yogyakarta</p>
                </div>
              </div>
              <div className="flex gap-x-3">
                <img src="./icons/Icon.svg" alt="" />
                <div className="flex flex-col">
                  <div className="flex gap-x-4 items-center">
                    <p className="text-zinc-500">Type</p>
                    <img src="./icons/flesh.svg" alt="" />
                  </div>
                  <p className="text-zinc-900 font-semibold">Industrial Home</p>
                </div>
              </div>
              <button className="text-slate-100 bg-emerald-500 text-center py-2 rounded-md md:px-5">
                Search
              </button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          variants={variants}
          className="flex justify-center items-center py-6 md:col-start-1 md:row-start-1 md:row-span-2"
        >
          <Card />
        </motion.div>
        <div className="flex w-full flex-row justify-center items-center md:justify-start md:col-start-2">
          <div className="flex justify-between items-center w-10/12">
            <motion.div variants={variants}>
              {" "}
              <div className="flex">
                <Counter delay={1.8} from={0} to={280} duration={4} />
                <p className="font-bold text-lg text-sky-600">+</p>
              </div>
              <p className="text-neutral-500 text-xs sm:text-lg">
                Google Review{" "}
              </p>
            </motion.div>
            <motion.div variants={variants}>
              {" "}
              <div className="flex">
                <Counter delay={1.8} from={0} to={10} duration={5} />
                <p className="font-bold text-lg text-sky-600">+</p>
              </div>
              <p className="text-neutral-500 text-xs sm:text-lg">
                Years Experience
              </p>
            </motion.div>
            <motion.div variants={variants}>
              {" "}
              <div className="flex">
                <Counter delay={1.8} from={0} to={150} duration={6} />
                <p className="font-bold text-lg text-sky-600">+</p>
              </div>
              <p className="text-neutral-500 text-xs sm:text-lg">
                Awward Winning
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
