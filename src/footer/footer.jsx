import React from "react";

import { useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
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
export default function Footer() {
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
      className="w-full flex flex-col items-center py-10"
    >
      <div className="flex flex-col gap-y-3 w-11/12 md:flex-row md:justify-between">
        <div className="flex flex-col gap-y-2 md:gap-y-5">
          <div className="flex flex-col w-fit gap-y-1">
            <motion.p
              variants={translateVariants}
              className="text-lg text-slate-100 font-bold"
            >
              More Renty
            </motion.p>
            <motion.div
              variants={popupVariants}
              className="w-5/6 h-px rounded-3xl bg-green-500"
            ></motion.div>
          </div>
          <ul className="flex flex-col gap-y-3">
            <motion.p variants={translateVariants} className="text-zinc-500">
              FAQ
            </motion.p>
            <motion.p variants={translateVariants} className="text-zinc-500">
              About us
            </motion.p>
            <motion.p variants={translateVariants} className="text-zinc-500">
              Contact Us
            </motion.p>
            <motion.p variants={translateVariants} className="text-zinc-500">
              Feedback
            </motion.p>
            <motion.p variants={translateVariants} className="text-zinc-500">
              Join Our Community
            </motion.p>
            <motion.p variants={translateVariants} className="text-zinc-500">
              Agent support
            </motion.p>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2 md:w-5/12 md:gap-y-5">
          <div className="flex flex-col w-fit gap-y-1">
            <motion.p
              variants={translateVariants}
              className="text-lg text-slate-100 font-bold"
            >
              Stay connected
            </motion.p>
            <motion.div variants={translateVariants} className="w-5/6 h-px rounded-3xl bg-green-500"></motion.div>
          </div>
          <motion.p variants={translateVariants} className="text-zinc-500">
            Sign up for inspiration for nourishing your body, mind and shine
            from inside. Added bonus: you'll get 10% off your first Renty order.
          </motion.p>
          <motion.input
            variants={popupVariants}
            className="bg-transparent outline-none text-slate-100 py-2 px-4 border-b-2 border-b-zinc-500"
            placeholder="Email Address"
            type="email"
            name=""
            id=""
          />
          <motion.button
            variants={translateVariants}
            className="text-slate-100 py-2 px-5 md:w-fit md:self-end bg-green-600 rounded-md"
          >
            Subscribe
          </motion.button>
        </div>
      </div>
      <ul className="flex gap-x-4 items-center self-start py-5 self-center py-6 w-11/12">
        <motion.li variants={translateVariants}>
          <a href="https://github.com/GHanamaAhmed">
            <svg
              className="fill-zinc-600 hover:fill-slate-100 h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </motion.li>
        <motion.li variants={translateVariants}>
          <a href="https://www.upwork.com/freelancers/~01e4c549f574943046">
            <svg
              className="fill-zinc-600 hover:fill-slate-100 h-7 w-7"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Upwork</title>
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
            </svg>
          </a>
        </motion.li>
        <motion.li variants={translateVariants}>
          <a href="https://ar-ar.facebook.com/ahmed.ghanama.9/">
            <svg
              className="fill-zinc-600 hover:fill-slate-100 h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </a>
        </motion.li>
        <motion.li variants={translateVariants}>
          <a href="https://www.instagram.com/ahmed_ghanama/">
            <svg
              className="fill-zinc-600 hover:fill-slate-100 h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "}
            </svg>
          </a>
        </motion.li>
        <motion.li variants={translateVariants}>
          <a href="https://www.linkedin.com/ahmed-ghanama-989810245">
            <svg
              className="fill-zinc-600 hover:fill-slate-100 h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{" "}
            </svg>
          </a>
        </motion.li>
      </ul>
      <motion.p variants={translateVariants} className="text-zinc-500 w-11/12">
        Sign up for inspiration for nourishing your body, mind and shine from
        inside. Added bonus: you'll get 10% off your first Renty order.
      </motion.p>
      <motion.div
        variants={popupVariants}
        className="w-11/12 h-px bg-zinc-600 self-center my-7"
      ></motion.div>
      <div className="w-11/12 flex flex-col md:flex-row md:justify-between gap-y-2">
        <motion.p
          variants={translateVariants}
          className="text-zinc-500 gap-y-2"
        >
          ©uihut.com 2022. All Rights Reserved.
        </motion.p>
        <div className="flex flex-col md:flex-row md:gap-x-3">
          <motion.p variants={translateVariants} className="text-zinc-500">
            Terms of Use
          </motion.p>
          <motion.p variants={translateVariants} className="text-zinc-500">
            Terms & Privacy
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
