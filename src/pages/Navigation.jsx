import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Navigation() {
    return (
        <>
            <div className=' flex border-4 text-xl font-bold border-slate-800 justify-between items-center mx-[10%] px-[3%] md:h-20 h-18 rounded-full shadow-xl my-[5%] md:my-[2%]'>
                <h1 className='text-xl md:text-2xl'>Assadullah.</h1>
                <ul className='hidden md:flex md:gap-5'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/project'>Project</Link></li>
                </ul>
                <Logo />
            </div>
            <div className='fixed inset-x-0 bottom-4 text-center flex rounded-full border-4 border-black bg-white w-fit mx-auto z-10 md:hidden'>
                <ul className='md:hidden flex font-bold'>
                    <Link to='/'>
                        <li className='px-5 py-3 hover:bg-slate-200 rounded-l-full'>
                            Home
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li className='px-5 py-3 hover:bg-slate-200'>
                            About
                        </li>
                    </Link>
                    <Link to='/project'>
                        <li className='px-5 py-3 hover:bg-slate-200 rounded-r-full'>
                            Project
                        </li>
                    </Link>
                </ul>
            </div >
        </>
    )
}
