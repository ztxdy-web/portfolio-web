import React from 'react'
import NavArrow from './NavArrow'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Project() {
    return (
        <>
            <NavArrow kiri="About" kanan="Home" />
            <motion.div
                className='flex flex-col gap-5 w-[80%] mx-[10%]'

                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <div className='mx-auto px-10 py-2 border-4 border-black rounded-full font-bold text-xl'>Project</div>
                <div className='flex flex-col justify-center flex-wrap md:flex-row gap-5 w-full'>
                    <div className="bg-[url('/coc/jobcoc.png')] bg-cover bg-no-repeat bg-center flex md:w-[30%] border-4 border-black rounded-xl shadow-xl grayscale">
                        {/* <img src="/coc/jobcoc.png" alt="" className='max-w-[80%]' /> */}
                        <div className='h-[380px] w-full rounded-lg flex flex-col justify-center text-center bg-slate-500 md:opacity-0 bg-opacity-80 hover:opacity-100 text-white px-[5%] py-[3%] md:px-[3%] md:py-[2%] ease-in-out duration-300'>
                            <h3 className='font-semibold md:text-xl my-1'>COC JOB SEEKER</h3>
                            <h3 className='font-bold'>React, Tailwind</h3>
                            <p className='mx-[10%] text-justify leading-5'>
                                This is a website for finding jobs where we can add, edit, and delete jobs. In addition, this website can also create a new account and of course can log in as well. This website is made to represent the use of consuming api from the internet.
                            </p>
                            <Link to={"https://cocjob-ztxdycode.vercel.app/"} className='btn btn-outline text-white hover:bg-white hover:text-gray-950 hover:border-0 mx-[20%] my-2'>
                                Link Page
                            </Link>
                        </div>
                    </div>
                    <div className="bg-[url('/pustaka/pustakadigital.png')] bg-cover bg-no-repeat bg-center flex md:w-[30%] border-4 border-black  rounded-xl shadow-xl md:mb-0 mb-20 grayscale">
                        {/* <img src="/coc/jobcoc.png" alt="" className='max-w-[80%]' /> */}
                        <div className='h-[380px] w-full rounded-lg flex flex-col justify-center text-center bg-slate-500 md:opacity-0 bg-opacity-80 hover:opacity-100 text-white px-[5%] py-[3%] md:px-[3%] md:py-[2%] ease-in-out duration-300'>
                            <h3 className='font-semibold md:text-xl my-1'>Pustaka Wisata Apps</h3>
                            <h3 className='font-bold'>Express, React, Tailwind, MySQL</h3>
                            <p className='mx-[10%] text-justify leading-5'>
                                In this project I created a web dashboard (React.js) and api (Express.js) using database MySQL to support this library application base on android.
                            </p>
                            <Link to={"https://pustakadigital-dewi.com/"} className='btn btn-outline text-white hover:bg-white hover:text-gray-950 hover:border-0 mx-[20%] mt-3'>
                                Link Page
                            </Link>
                            <Link to={"https://api.pustakadigital-dewi.com/books/web"} className='text-[10pt] hover:underline'>
                                link api
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
