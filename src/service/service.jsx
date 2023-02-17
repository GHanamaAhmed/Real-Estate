
export default function Service() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-y-10 px-5 py-5">
        <div className="flex flex-col md:col-start-2 md:justify-center md:gap-y-7 gap-y-4 md:9/12 w-11/12">
                <p className="text-green-600 md:text-xl">Our Services</p>
                <p className="text-slate-100 text-xl md:text-4xl">We make your comfort our top priority.</p>
                <p className="text-justify text-zinc-500">In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.</p>
                <div className="grid gap-y-3 grid-cols-2 grid-rows-2">
                        <div className="col-start-1 row-start-1 flex gap-x-2">
                            <img src="./icons/hello.svg" alt="" />
                            <p className="text-slate-100 text-md font-semibold">Best market</p>
                        </div>
                        <div className="col-start-2 row-start-1 flex gap-x-2">
                            <img src="./icons/hello.svg" alt="" />
                            <p className="text-slate-100 text-md font-semibold">Unstable prices</p>
                        </div>
                        <div className="col-start-1 row-start-2 flex gap-x-2">
                            <img src="./icons/hello.svg" alt="" />
                            <p className="text-slate-100 text-md font-semibold">Top sell</p>
                        </div>
                        <div className="col-start-2 row-start-2 flex gap-x-2">
                            <img src="./icons/hello.svg" alt="" />
                            <p className="text-slate-100 text-md font-semibold">Security of  data</p>
                        </div>
                </div>
        </div>
        <div className="flex justify-center items-center md:col-start-1 md:max-w-xs md:justify-self-center md:row-start-1">
            <img className="outline outline-4 outline-zinc-700 rounded-lg border border-zinc-700 border-8" src="./icons/Rectangle730.png" alt="" />
        </div>
    </div>
  )
}
