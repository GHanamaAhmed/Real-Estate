import { Pagination, A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
const popupVariants = {
  hide: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};
export default function Card() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  });
  return (
    <Swiper
      className="md:w-4/6"
      modules={[Pagination, A11y, Navigation]}
      spaceBetween={windowWidth <= 767 ? -windowWidth / 3 : 5}
      slidesPerView={windowWidth <= 767 ? 1 : 2}
      navigation={{
        nextEl: ".next",
        prevEl: ".prev",
      }}
    >
      <SwiperSlide className="flex justify-center">
        <motion.div variants={popupVariants} className="relative">
          <div className="opacity-0 transition-all duration-300 hover:opacity-100 absolute w-full h-full flex justify-center gap-y-2 flex-col items-center z-10 bg-black bg-opacity-25">
            <p className="text-slate-100 font-semibold">Editorial House</p>
            <p className="text-slate-100 text-xs">
              JL. Kencana oke. No2 universen
            </p>
          </div>
          <img
            className="rounded-xl"
            src="./icons/Rectangle731.webp"
            alt=""
            width={218}
            height={78}
          />
        </motion.div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <motion.div variants={popupVariants} className="relative">
          <div className="opacity-0 transition-all duration-300 hover:opacity-100 absolute w-full h-full flex justify-center gap-y-2 flex-col items-center z-10 bg-black bg-opacity-25">
            <p className="text-slate-100 font-semibold">Editorial House</p>
            <p className="text-slate-100 text-xs">
              JL. Kencana oke. No2 universen
            </p>
          </div>
          <img
            className="rounded-xl"
            src="./icons/Rectangle732.webp"
            alt=""
            width={218}
            height={78}
          />
        </motion.div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <motion.div variants={popupVariants} className="relative">
          <div className="opacity-0 transition-all duration-300 hover:opacity-100 absolute w-full h-full flex justify-center gap-y-2 flex-col items-center z-10 bg-black bg-opacity-25">
            <p className="text-slate-100 font-semibold">Editorial House</p>
            <p className="text-slate-100 text-xs">
              JL. Kencana oke. No2 universen
            </p>
          </div>
          <img
            className="rounded-xl"
            src="./icons/Rectangle733.webp"
            alt=""
            width={218}
            height={78}
          />
        </motion.div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <motion.div variants={popupVariants} className="relative">
          <div className="opacity-0 transition-all duration-300 hover:opacity-100 absolute w-full h-full flex justify-center gap-y-2 flex-col items-center z-10 bg-black bg-opacity-25">
            <p className="text-slate-100 font-semibold">Editorial House</p>
            <p className="text-slate-100 text-xs">
              JL. Kencana oke. No2 universen
            </p>
          </div>
          <img
            className="rounded-xl"
            src="./icons/Rectangle734.webp"
            alt=""
            width={218}
            height={78}
          />
        </motion.div>
      </SwiperSlide>
    </Swiper>
  );
}
