import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div className='flex flex-col md:flex-row gap-5 w-[80%] mx-[10%] mt-5'>
            <div className='flex flex-col justify-between w-full h-fit border-4 border-black px-[5%] py-[3%] md:px-[3%] md:py-[2%] md:mb-0 mb-20 rounded-xl shadow-xl'>
                <h3 className='text-xl font-bold'>Contact</h3>
                <div className='flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start'>
                    <div className='w-[100%] flex flex-col gap-3 mb-2'>
                        <p>Feel free to contact me if you're interested in what I have to offer, or if you have any questions.</p>
                        <div className='flex flex-col items-center md:flex-row gap-2'>
                            <Link to={"https://api.whatsapp.com/send?phone=6285156361035&text=Hello%2C%20I%20want%20more%20info%20about%20your%20portfolio%20%F0%9F%98%83"} className='flex items-center justify-between w-fit border-2 border-black py-[2%] px-[5%] md:px-[3%] rounded-full gap-3'>
                                <img src="/whatsapp.svg" alt="" className='w-[20px] md:w-[30px]' />
                                <h3 className='font-bold tet-md md:text-xl'>+62 85156361035</h3>
                            </Link>
                            <Link to={"mailto:assadullahmail@gmail.com?subject=Portfolio%20Website&body=Hello%2C%20I%20want%20more%20info%20about%20your%20portfolio%20%F0%9F%98%83"} className='flex items-center justify-between w-fit border-2 border-black py-[2%] px-[5%] md:px-[3%] rounded-full gap-3'>
                                <img src="/email.svg" alt="" className='w-[20px] md:w-[30px]' />
                                <h3 className='font-bold text-md md:text-xl'>assadullahmail@gmail.com</h3>
                            </Link>
                        </div>
                    </div>
                    {/* <div className='md:max-w-[50%] flex justify-center'>
                        <div className='flex justify-center border-[10px] border-black w-[100%] md:w-[300px] md:h-[300px] rounded-full'>
                            Hello
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Contact
