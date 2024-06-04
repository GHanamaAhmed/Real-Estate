import React, { useEffect, useRef } from "react";
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
export default function Benifits() {
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
      className="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-y-10 px-5 py-20 bg-zinc-800"
    >
      <div className="flex flex-col md:col-start-1 md:w-9/12 md:justify-self-center md:justify-center md:gap-y-5 gap-y-4 md:9/12 w-11/12">
        <motion.p
          variants={translateVariants}
          className="text-green-600 md:text-xl"
        >
          Benefits
        </motion.p>
        <motion.p
          variants={translateVariants}
          className="text-slate-100 text-xl md:text-4xl"
        >
          Why Choose us
        </motion.p>
        <motion.p
          variants={translateVariants}
          className="text-justify text-zinc-500"
        >
          Renty is a trustworthy developer in the real estate business. He has
          developed a reputation for trust and will have that reputation for
          years to come.
        </motion.p>
        <div className="grid gap-y-5 grid-cols-1 grid-rows-2">
          <div className="flex gap-x-2">
            <motion.img
              variants={popupVariants}
              src="./icons/Icon-uihut.svg"
              alt=""
            />
            <motion.p
              variants={translateVariants}
              className="text-slate-100 text-md font-semibold"
            >
              Trusted Developer
            </motion.p>
          </div>
          <div className="flex gap-x-2">
            <motion.img
              variants={popupVariants}
              src="./icons/Icon-uihut-1.svg"
              alt=""
            />
            <motion.p
              variants={translateVariants}
              className="text-slate-100 text-md font-semibold"
            >
              No Commisions
            </motion.p>
          </div>
          <div className="flex gap-x-2">
            <motion.img
              variants={popupVariants}
              src="./icons/Icon-uihut-2.svg"
              alt=""
            />
            <motion.p
              variants={translateVariants}
              className="text-slate-100 text-md font-semibold"
            >
              A safe and Trustworthy
            </motion.p>
          </div>
          <div className="flex gap-x-2">
            <motion.img
              variants={popupVariants}
              src="./icons/Icon-uihut-3.svg"
              alt=""
            />
            <motion.p
              variants={translateVariants}
              className="text-slate-100 text-md font-semibold"
            >
              Buy with Confidence
            </motion.p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:col-start-2 md:row-start-1">
        <motion.div
          variants={translateVariants}
          transition={{
            staggerChildren: 0.5,
            delayChildren: 0.4,
          }}
          className="relative outline outline-4 outline-zinc-700 rounded-lg rounded-tl-full cardbenefits overflow-hidden md:max-w-xs border border-zinc-700 border-8"
        >
          <motion.img
            variants={popupVariants}
            className="-z-10"
            src="./icons/Rectangle73.png"
            alt=""
          />
          <div className="flex absolute w-11/12 justify-around -translate-x-1/2 left-1/2 bottom-5 gap-x-3 backdrop-blur-md py-3 items-center rounded-xl px-5">
            <div className="flex flex-col">
              <motion.p
                variants={translateVariants}
                className="text-slate-100 text-lg"
              >
                70+ Employee
              </motion.p>
              <div className="flex items-center gap-x-2">
                <div className="flex gap-y-2 items-center gap-x-1">
                  <motion.svg
                    variants={popupVariants}
                    aria-hidden="true"
                    className="w-5 h-5 text-slate-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </motion.svg>
                  <motion.p
                    variants={translateVariants}
                    className="text-slate-100 font-semibold"
                  >
                    4.9
                  </motion.p>
                </div>
                <motion.p
                  variants={translateVariants}
                  className="text-slate-400 text-xs"
                >
                  (6.4k reviews)
                </motion.p>
              </div>
            </div>
            <div className="flex -space-x-4 items-center">
              <motion.img
                variants={popupVariants}
                className="w-10 h-10 border-2 hover:scale-125 transition duration-500 border-white rounded-full dark:border-gray-800"
                src="./icons/profile-picture-5.jpg"
                alt=""
              />
              <motion.img
                variants={popupVariants}
                className="w-10 h-10 border-2 hover:scale-125 transition duration-500 border-white rounded-full dark:border-gray-800"
                src="./icons/Ellipse5.png"
                alt=""
              />
              <motion.img
                variants={popupVariants}
                className="w-10 h-10 border-2 hover:scale-125 transition duration-500 border-white rounded-full dark:border-gray-800"
                src="./icons/Ellipse6.png"
                alt=""
              />
              <motion.img
                variants={popupVariants}
                className="w-10 h-10 border-2 hover:scale-125 transition duration-500 border-white rounded-full dark:border-gray-800"
                src="./icons/Ellipse7.png"
                alt=""
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
