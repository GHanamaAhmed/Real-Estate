import React, { useEffect, useRef } from "react";
import Card from "./card";
import { motion, stagger, useAnimation, useInView } from "framer-motion";
const items = {
  hide: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

export default function Popular() {
  const imgRef = useRef();
  const paragraphControle = useAnimation();
  const inViewImage = useInView(imgRef, {
    amount: window.innerWidth < 768 ? 0.2 : 0.5,
    once: true,
  });
  const imageControle = useAnimation();
  const cardControle = useAnimation();
  const exploreControle = useAnimation();
  useEffect(() => {
    if (inViewImage)
      paragraphControle
        .start("show")
        .then(() =>
          imageControle
            .start("show")
            .then(() =>
              cardControle
                .start("show")
                .then(() => exploreControle.start("show"))
            )
        );
  }, [inViewImage]);
  return (
    <motion.section className="w-ful flex flex-col items-center pt-10 gap-y-3">
      <motion.div
        animate={paragraphControle}
        initial={"hide"}
        transition={{
          staggerChildren: 0.5,
          delayChildren: 0.2,
        }}
        className="w-10/12 flex flex-col mb-20 md:flex-row md:justify-between"
      >
        <motion.div variants={items} className="flex flex-col gap-y-1">
          <p className="text-green-600 md:text-xl">Popular</p>
          <p className="text-slate-100 text-xl md:text-4xl">
            Our Popular Residence
          </p>
        </motion.div>
        <motion.div
          variants={items}
          className="hidden md:flex flex gap-x-2 items-center"
        >
          <p className="text-slate-100 cursor-pointer">Explore All</p>
          <img
              loading="lazy"
            className="cursor-pointer"
            src="./icons/arrow-uihut.svg"
            alt=""
            width={30}
          />
        </motion.div>
      </motion.div>
      <div ref={imgRef} className="w-full flex justify-center relative">
        <motion.img
              loading="lazy"
          animate={imageControle}
          initial={"hide"}
          variants={items}
          className="absolute -z-10 h-full w-full md:hidden"
          src="./icons/BG.svg"
          alt=""
        />
        <motion.img
              loading="lazy"
          animate={imageControle}
          initial={"hide"}
          variants={items}
          className="absolute hidden -z-10 h-full w-full md:block"
          src="./icons/BG2.svg"
          alt=""
        />
        <motion.ul
          animate={cardControle}
          initial={"hide"}
          transition={{
            staggerChildren: 0.5,
            delayChildren: 0.2,
          }}
          className="flex flex-col items-center gap-y-4 md:flex-row  md:gap-x-10 md:justify-around w-10/12"
        >
          <motion.li variants={items}>
            <Card
              img={"./icons/Rectangle720-1.webp"}
              adress={"Jakarta Barat, USA"}
              bed={"4 bed"}
              m={"10x10 m"}
              s={"1900 s"}
              price={"$5,200,000"}
            />
          </motion.li>
          <motion.li variants={items}>
            <Card
              img={"./icons/Rectangle720-2.webp"}
              adress={"Jakarta Barat, London"}
              bed={"3 bed"}
              m={"9x9 m"}
              s={"1800 s"}
              price={"$4,300,000"}
            />
          </motion.li>
          <motion.li variants={items}>
            {" "}
            <Card
              img={"./icons/Rectangle720.webp"}
              adress={"Jakarta Barat, Japan"}
              bed={"6 bed"}
              m={"12x12 m"}
              s={"2400 s"}
              price={"$7,000,000"}
            />
          </motion.li>
        </motion.ul>
      </div>
      <motion.div
        initial={"hide"}
        animate={exploreControle}
        variants={items}
        className="flex gap-x-2 items-center md:hidden"
      >
        <p className="text-slate-100 cursor-pointer">Explore All</p>
        <img
              loading="lazy"
          className="cursor-pointer"
          src="./icons/arrow-uihut.svg"
          alt=""
          width={30}
        />
      </motion.div>
    </motion.section>
  );
}
