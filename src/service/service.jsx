import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
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
export default function Service() {
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
    <motion.section
      ref={ref}
      initial="hide"
      animate={mainControle}
      transition={{
        staggerChildren: 0.5,
        delayChildren: 0.2,
      }}
      className="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-y-10 px-5 pb-5"
    >
      <div className="flex flex-col md:col-start-2 md:justify-center md:gap-y-7 gap-y-4 md:9/12 w-11/12">
        <motion.p
          variants={translateVariants}
          className="text-green-600 md:text-xl"
        >
          Our Services
        </motion.p>
        <motion.p
          variants={translateVariants}
          className="text-slate-100 text-xl md:text-4xl"
        >
          We make your comfort our top priority.
        </motion.p>
        <motion.p
          variants={translateVariants}
          className="text-justify text-zinc-500"
        >
          In a free hour, when our power of choice is untrammelled and when
          nothing prevents our being able to do what we like best.
        </motion.p>
        <div className="grid gap-y-3 grid-cols-2 grid-rows-2">
          <div className="col-start-1 row-start-1 flex gap-x-2">
            <motion.img
              loading="lazy"
              variants={popupVariants}
              src="./icons/hello.svg"
              alt=""
            />
            <motion.p
              variants={translateVariants}
              className="text-slate-100 text-md font-semibold"
            >
              Best market
            </motion.p>
          </div>
          <div className="col-start-2 row-start-1 flex gap-x-2">
            <motion.img
              loading="lazy"
              variants={popupVariants}
              src="./icons/hello.svg"
              alt=""
            />
            <motion.p
              variants={translateVariants}
              className="text-slate-100 text-md font-semibold"
            >
              Unstable prices
            </motion.p>
          </div>
          <div className="col-start-1 row-start-2 flex gap-x-2">
            <motion.img
              loading="lazy"
              variants={popupVariants}
              src="./icons/hello.svg"
              alt=""
            />
            <motion.p
              variants={translateVariants}
              className="text-slate-100 text-md font-semibold"
            >
              Top sell
            </motion.p>
          </div>
          <div className="col-start-2 row-start-2 flex gap-x-2">
            <motion.img
              loading="lazy"
              variants={popupVariants}
              src="./icons/hello.svg"
              alt=""
            />
            <motion.p
              variants={translateVariants}
              className="text-slate-100 text-md font-semibold"
            >
              Security of data
            </motion.p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:col-start-1 md:max-w-xs md:justify-self-center md:row-start-1">
        <motion.img
          loading="lazy"
          variants={popupVariants}
          className="outline outline-4 outline-zinc-700 rounded-lg border border-zinc-700 border-8"
          src="./icons/Rectangle730.webp"
          alt=""
        />
      </div>
    </motion.section>
  );
}
