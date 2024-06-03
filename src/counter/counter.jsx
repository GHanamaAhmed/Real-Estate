import { animate, easeInOut, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Counter({ from, to, duration,delay }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    inView &&
      animate(from, to, {
        duration,
        delay,
        ease: easeInOut,
        onUpdate: (latest) =>
          (ref.current.innerHTML = latest.toString().split(".")[0]),
      });
  }, [inView, from, to, duration]);
  return <p className="text-slate-100 font-bold text-xl" ref={ref} />;
}
