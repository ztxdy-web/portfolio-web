import React from 'react'
import NavArrow from './NavArrow'
import TechStack from '../components/TechStack'
import Zidan from "/zidan12.jpg"
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <>
            <NavArrow kiri="Project" kanan="About" />
            <motion.div
                className='md:flex-row flex flex-col-reverse justify-between w-[80%] h-fit mx-[10%] border-4 border-black px-[3%] py-[2%] rounded-xl shadow-xl'

                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, fill: "forwards", }}
                transition={{ duration: 0.5 }}
            >
                <div className='flex flex-col justify-center content-center w-full my-auto'>
                    <div className='flex justify-between items-center'>
                        <div className='md:text-6xl text-4xl font-bold'>Hi! I'm</div>
                        <div className='text-sm md:text-xl text-white font-bold bg-black py-2 px-6 rounded-full md:mr-[10%]'>Fullstack</div>
                    </div>
                    <div className='text-5xl font-bold'>Zidan Assadullah</div>
                    <div className='my-2'>
                        <div className='font-mono font-bold'>TechStack</div>
                        <TechStack />
                    </div>
                </div>
                <div className='w-full flex justify-center my-5 md:my-0 md:justify-end'>
                    <img src={Zidan} alt="" className='w-[70%] rounded-full border-4 border-black grayscale' />
                </div>
            </motion.div>
        </>
    )
}
