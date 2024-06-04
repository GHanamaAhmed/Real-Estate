import { useEffect, useRef } from "react";
import Card from "./card";
import { motion, useAnimation, useInView } from "framer-motion";
const translateVariants = {
  hide: {
    translateX: "100%",
    opacity: 0,
  },
  show: {
    translateX: 0,
    opacity: 1,
  },
};
const popupVariants = {
  hide: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};
export function Popular() {
  const mainControle = useAnimation();
  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
    amount: window.innerWidth < 768 ? 0.2 : 0.5,
  });
  useEffect(() => {
    if (inView) mainControle.start("show");
  }, [inView]);
  return (
    <motion.div
      ref={ref}
      initial="hide"
      animate={mainControle}
      transition={{
        staggerChildren: 0.5,
        delayChildren: 0.2,
      }}
      className="w-full grid grid-cols-1 gap-y-10 py-10"
    >
      <div className="flex justify-between justify-self-center px-5 md:w-11/12">
        <div className="flex flex-col gap-y-1">
          <motion.p
            variants={translateVariants}
            className="text-green-600 md:text-xl"
          >
            Popular
          </motion.p>
          <motion.p
            variants={translateVariants}
            className="text-slate-100 text-xl md:text-4xl"
          >
            Homes for Renty News And Stories
          </motion.p>
        </div>
        <div className="hidden md:flex flex gap-x-2 items-center">
          <motion.svg
            variants={popupVariants}
            className="prev h-10 w-10 stroke-slate-100 fill-slate-900 hover:stroke-slate-900 hover:fill-slate-100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </motion.svg>
          <motion.svg
            variants={popupVariants}
            className="next h-10 w-10 stroke-slate-100 fill-slate-900 hover:stroke-slate-900 hover:fill-slate-100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </motion.svg>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Card />
      </div>
    </motion.div>
  );
}
