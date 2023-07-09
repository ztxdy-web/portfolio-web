import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <ul className='flex gap-1 items-center'>
            <Link to='/about'>
                <li className='flex flex-col justify-center items-center text-sm'>
                    <img src="/github-logo.svg" className='h-[100%] w-7' />
                </li>
            </Link>
            <Link to='https://www.linkedin.com/in/zidan-assadullah/'>
                <li className='flex flex-col justify-center items-center text-sm'>
                    <img src="/linkedin-logo.svg" className='h-[100%] w-10' />
                </li>
            </Link>
            <Link to='https://www.instagram.com/ztxdy/'>
                <li className='flex flex-col justify-center items-center text-sm'>
                    <img src="/instagram-logos.svg" className='h-[100%] w-8' />
                </li>
            </Link>
        </ul>
    )
}
