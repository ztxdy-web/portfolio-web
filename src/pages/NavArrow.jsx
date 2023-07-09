import React from 'react'
import { Link } from 'react-router-dom'

export default function NavArrow(props) {

    return (
        <>
            <div className='hidden md:block fixed text-center  right-8 bottom-[50vh]'>
                <Link to={props.kanan == "Home" ? "/" : `/${props.kanan.toLowerCase()}`} className='text-transparent font-semibold hover:text-black ease-in-out duration-500'>
                    <div className='w-12 h-12 border-4 border-black rounded-full flex justify-center items-center'>
                        <img src="/arrow-right.svg" alt="" className='w-6' />
                    </div>
                    {props.kanan}
                </Link>
            </div>
            <div className='hidden md:block fixed text-center left-8 bottom-[50vh]'>
                <Link to={props.kiri == "Home" ? "/" : `/${props.kiri.toLowerCase()}`} className='text-transparent font-semibold hover:text-black ease-in-out duration-500'>
                    <div className='w-12 h-12 border-4 border-black rounded-full flex justify-center items-center'>
                        <img src="/arrow-left.svg" alt="" className='w-6' />
                    </div>
                    {props.kiri}
                </Link>
            </div>
        </>
    )
}
