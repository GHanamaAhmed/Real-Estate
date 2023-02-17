import React from 'react'
import Card from './card'

export default function Popular() {
    return (
        <div className='w-ful flex flex-col items-center py-10 gap-y-3'>
            <div className='w-10/12 flex flex-col mb-20 md:flex-row md:justify-between'>
                <div className='flex flex-col gap-y-1'>
                    <p className='text-green-600 md:text-xl'>Popular</p>
                    <p className='text-slate-100 text-xl md:text-4xl'>Our Popular Residence</p>
                </div>
                <div className='hidden md:flex flex gap-x-2 items-center'>
                    <p className='text-slate-100 cursor-pointer'>Explore All</p>
                    <img className='cursor-pointer' src="./icons/arrow-uihut.svg" alt="" width={30} />
                </div>
            </div>
            <div className='w-full flex justify-center relative'>
                <img className='absolute -z-10 h-full w-full md:hidden' src="./icons/BG.svg" alt="" />
                <img className='absolute hidden -z-10 h-full w-full md:block' src="./icons/BG2.svg" alt="" />
                <div className='flex flex-col items-center gap-y-4 md:flex-row  md:gap-x-10 md:justify-around w-10/12'>
                    <Card img={"./icons/Rectangle720-1.png"} adress={"Jakarta Barat, USA"} bed={"4 bed"} m={"10x10 m"} s={"1900 s"} price={"$5,200,000"} />
                    <Card img={"./icons/Rectangle720-2.png"} adress={"Jakarta Barat, London"} bed={"3 bed"} m={"9x9 m"} s={"1800 s"} price={"$4,300,000"} />
                    <Card img={"./icons/Rectangle720.png"} adress={"Jakarta Barat, Japan"} bed={"6 bed"} m={"12x12 m"} s={"2400 s"} price={"$7,000,000"} />
                </div>
            </div>
            <div className='flex gap-x-2 items-center md:hidden'>
                <p className='text-slate-100 cursor-pointer'>Explore All</p>
                <img className='cursor-pointer' src="./icons/arrow-uihut.svg" alt="" width={30} />
            </div>
        </div>
    )
}
