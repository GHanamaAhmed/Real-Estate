import React from "react";

export default function Card({ img, adress, bed, m, s, price }) {
  return (
    <div className="flex flex-col rounded-xl -translate-y-20 my-5 overflow-hidden">
      <img loading="lazy" className="md:w-72" src={img} alt="" height={300} />
      <div className="h-2/6 flex flex-col py-2 px-5 gap-y-2 md:gap-y-4 cards">
        <div className="flex gap-x-2">
          <img loading="lazy" src="./icons/Vector.svg" alt="" />
          <p className="text-slate-100">{adress}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-x-2">
            <img loading="lazy" src="./icons/Bed2.svg" alt="" />
            <p className="text-zinc-500">{bed}</p>
          </div>
          <div className="flex gap-x-2">
            <img loading="lazy" src="./icons/FrameCorners.svg" alt="" />
            <p className="text-zinc-500">{m}</p>
          </div>
          <div className="flex gap-x-2">
            <img loading="lazy" src="./icons/SquareLogo.svg" alt="" />
            <p className="text-zinc-500">{s}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button className="py-2 px-4 border border-green-700 rounded-lg text-green-700 hover:bg-green-500 hover:border-green-500 hover:text-slate-100">
            Book Now
          </button>
          <p className="text-slate-100 text-lg font-bold">{price}</p>
        </div>
      </div>
    </div>
  );
}
