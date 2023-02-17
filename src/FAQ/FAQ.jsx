import React, { useCallback, useState } from 'react'
export default function FAQ() {
    const [display, setDisplay] = useState(["hidden", "hidden", "hidden", "hidden"]);
    const [color, setColor] = useState(["", "", "", ""]);
    const [rotate, setRotate] = useState(["rotate-45", "rotate-45", "rotate-45", "rotate-45"]);
    const toggler = useCallback((index) => {
        if (display[index] == "hidden") {
            setDisplay((prev) => {
                return prev.map((e, i) => i == index ? "" : "hidden")
            })
            setColor((prevs) => {
                return prevs.map((e, i) => i == index ? "bg-green-500" : "")
            })
            setRotate((prevs) => {
                return prevs.map((e, i) => i == index ? "" : "rotate-45")
            })
            
        } else {
            setDisplay((prev) => {
                return prev.map((e, i) => "hidden")
            })
            setColor((prev) => {
                return prev.map((e, i) => i == index ? "" : "")
            })
            setRotate((prevs) => {
                return prevs.map((e, i) => i == index ? "rotate-45" : "rotate-45")
            })
        }
    }, [display])
    return (
        <div className='w-full flex flex-col justify-center items-center bg-zinc-800 gap-y-5 py-10'>
            <div className='w-11/12 flex flex-col justify-center items-center md:mb-10'>
                <p className='text-slate-100 text-xl md:text-4xl'>FAQ’s – Frequently Asked Questions</p>
                <p className='text-justify text-zinc-500'>As you might imagine, real estate agents field quite a few questions every day. People are naturally curious, and it’s an agent’s job to guide.</p>
            </div>
            <div className={`flex justify-center flex-col gap-y-2 transition border border-green-500 ${color[0]} rounded-md py-4 px-5 w-5/6`}>
                <div className='flex justify-between items-center w-full'>
                    <p className='text-slate-100 text-lg font-semibold'>How can I build equity into my house?</p>
                    <svg onClick={() => { toggler(0) }} className={`h-10 w-10 stroke-slate-100 transition duration-300 ${rotate[0]}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
                <p className={`${display[0]} text-justify text-zinc-500 md:w-2/3 transition text-xs`}>You can build equity in three ways. First (and easiest) is from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.</p>
            </div>
            <div className={`flex justify-center flex-col gap-y-2 transition border border-green-500 ${color[1]} rounded-md py-4 px-5 w-5/6`}>
                <div className='flex justify-between items-center w-full'>
                    <p className='text-slate-100 text-lg font-semibold'>How big is an acre?</p>
                    <svg onClick={() => { toggler(1) }} className={`h-10 w-10 stroke-slate-100 transition duration-300 ${rotate[1]}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
                <p className={`${display[1]} text-justify text-zinc-500 md:w-2/3 transition text-xs`}>You can build equity in three ways. First (and easiest) is from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.</p>
            </div>
            <div className={`flex justify-center flex-col gap-y-2 transition border border-green-500 ${color[2]} rounded-md py-4 px-5 w-5/6`}>
                <div className='flex justify-between items-center w-full'>
                    <p className='text-slate-100 text-lg font-semibold'>What are closing costs?</p>
                    <svg onClick={() => { toggler(2) }} className={`h-10 w-10 stroke-slate-100 transition duration-300 ${rotate[2]}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
                <p className={`${display[2]} text-justify text-zinc-500 md:w-2/3 transition text-xs`}>You can build equity in three ways. First (and easiest) is from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.</p>
            </div>
            <div className={`flex justify-center flex-col gap-y-2 transition border border-green-500 ${color[3]} rounded-md py-4 px-5 w-5/6`}>
                <div className='flex justify-between items-center w-full'>
                    <p className='text-slate-100 text-lg font-semibold'>What is Title Insurance?</p>
                    <svg onClick={() => { toggler(3) }} className={`h-10 w-10 stroke-slate-100 transition duration-300 ${rotate[3]}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
                <p className={`${display[3]} text-justify text-zinc-500 md:w-2/3 transition text-xs`}>You can build equity in three ways. First (and easiest) is from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.</p>
            </div>
        </div>
    )
}
