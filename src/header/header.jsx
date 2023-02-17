
export default function Header() {
    return (
        <div className='flex w-full py-4 justify-between md:justify-around px-3'>
            <ul className='hidden md:flex gap-x-5 lg:gap-x-7'>
                <li className="text-slate-100 border-transparent border-b-2 py-1 hover:border-b-2 hover:border-green-400">Buying</li>
                <li className="text-slate-100 border-transparent border-b-2 py-1 hover:border-b-2 hover:border-green-400">Renting</li>
                <li className="text-slate-100 border-transparent border-b-2 py-1 hover:border-b-2 hover:border-green-400">Selling</li>
            </ul>
            <a className='flex gap-x-2 h-fit my-1' href="https://ghanamaahmed.github.io/Real-Estate/">
                <img src="./icons/Subtract.png" alt="" />
                <p className='text-slate-100 font-semibold'>Renty</p>
            </a>
            <ul className='hidden md:flex gap-x-5 lg:gap-x-7'>
                <li className="text-slate-100 border-transparent border-b-2 py-1 hover:border-b-2 hover:border-green-400">About Us</li>
                <li className="text-slate-100 border-transparent border-b-2 py-1 hover:border-b-2 hover:border-green-400">Services</li>
                <li className="text-slate-100 border-transparent border-b-2 py-1 hover:border-b-2 hover:border-green-400">Contact</li>
            </ul>
            <button className="md:hidden">
                <img src="./icons/Menu.png" alt="" />
            </button>

        </div>
    )
}
