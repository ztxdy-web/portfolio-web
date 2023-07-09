import React from 'react'
import NavArrow from './NavArrow'
import TechStack from '../components/TechStack'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Contact from '../components/Contact'


function Cert(props) {
    return (
        <div className='flex flex-col md:w-[30%] items-center my-1'>
            <Link to={props.link} className='flex justify-center'>
                <img src={`/cert/${props.fileName}`} alt="" className='w-[80%] hover:w-full duration-100 ease-in-out' />
            </Link>
            <h3 className='font-semibold'>{props.title}</h3>
        </div>
    )
}

export default function About() {
    const listCert = [
        {
            fileName: "dicoding_web.jpg",
            title: "Dicoding Web Developer",
            link: "https://drive.google.com/file/d/1yfkoZHKPzZxWDRvbcYHTZYWi1oxmboKy/view"
        },
        {
            fileName: "dicoding_js.jpg",
            title: "Dicoding Javascript",
            link: "https://drive.google.com/file/d/1CqsRsJYxHTJgrOoBbtSGilUw8hgDaEa_/view"
        },
        {
            fileName: "dicoding_backend.jpg",
            title: "Dicoding Backend",
            link: "https://drive.google.com/file/d/1F9Rvjh2nQzhqd-0CiLGICXrI0gNIUKEx/view"
        },
        {
            fileName: "dicoding_aws.jpg",
            title: "Dicoding AWS Cloud",
            link: "https://drive.google.com/file/d/11937M8_IfuoMkiYV2LT7rDriCiWSFo5_/view"
        },
        {
            fileName: "digitalent_jwd.jpg",
            title: "Digitalent Web Developer",
            link: "https://drive.google.com/file/d/1EDMOY3fC95WpS0dhy-pl31enou9VDBPf/view"
        }

    ]

    const listPortrait = [
        {
            fileName: "bnsp_jwd.jpg",
            title: "BNSP Web Developer",
            link: "https://drive.google.com/file/d/17rRi8r7BKL9dRQRR2quQTUGBUnT-kmzK/view"
        },
        {
            fileName: "sanbercode_react.jpg",
            title: "SanberCode React JS",
            link: "https://drive.google.com/file/d/17cS1w9Qe40oreOtp0HsrRER0rvTCBlDQ/view"
        }
    ]


    return (
        <>
            <NavArrow kiri="Home" kanan="Project" />
            <motion.div

                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <div className='flex flex-col md:flex-row gap-5 w-[80%] mx-[10%]'>
                    <div className='flex flex-col justify-between w-full h-full border-4 border-black px-[5%] py-[3%] md:px-[3%] md:py-[2%] md:max-w-lg rounded-xl shadow-xl'>
                        <h3 className='text-xl font-bold'>About Me</h3>
                        <p className='text-sm text-justify'>I am a <span className='font-bold'>Fullstack Web Developer</span>, I have expertise in software development on both frontend and backend. I am skilled in using frameworks like <span className='font-bold'>React.js</span> to create attractive and responsive user interfaces. On the backend side, I have experience with Node.js, <span className='font-bold'>Express.js</span>, and databases like <span className='font-bold'>MongoDB</span> or <span className='font-bold'>MySQL</span>. I am used to using tools like Git and Postman for software development and testing. I also have experience using css frameworks such as <span className='font-bold'>Tailwindcss</span> and <span className='font-bold'>Bootstrap</span>.</p>
                    </div>
                    <div className='w-full h-fit flex flex-col gap-5'>
                        <div className='flex flex-col justify-between w-full h-fit border-4 border-black px-[5%] py-[3%] md:px-[3%] md:py-[2%] md:max-w-lg rounded-xl shadow-xl'>
                            <h3 className='text-xl font-bold'>Expertise</h3>
                            <ul>
                                <li className='flex justify-between'>
                                    <h3>Javascript</h3>
                                    <h3>Advanced</h3>
                                </li>
                                <li className='flex justify-between'>
                                    <h3>React.js</h3>
                                    <h3>Advanced</h3>
                                </li>
                                <li className='flex justify-between'>
                                    <h3>Express.js</h3>
                                    <h3>intermediate</h3>
                                </li>
                                <li className='flex justify-between'>
                                    <h3>Next.js</h3>
                                    <h3>Intermediate</h3>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col justify-between w-full h-fit border-4 border-black px-[5%] py-[3%] md:px-[3%] md:py-[2%] md:max-w-lg rounded-xl shadow-xl gap-2'>
                            <h3 className='text-xl font-bold'>Tech Stack</h3>
                            <TechStack />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-5 w-[80%] mx-[10%] mt-5'>
                    <div className='flex flex-col justify-between w-full h-fit border-4 border-black px-[5%] py-[3%] md:px-[3%] md:py-[2%] rounded-xl shadow-xl'>
                        <h3 className='text-xl font-bold mb-2'>Certificate</h3>
                        <div className='flex flex-wrap justify-center grayscale'>
                            {listCert.map((cert) => {
                                return (
                                    <Cert fileName={cert.fileName} title={cert.title} link={cert.link} />
                                )
                            })}
                        </div>
                        <div className='flex flex-wrap justify-center grayscale'>
                            {listPortrait.map((cert) => {
                                return (
                                    <Cert fileName={cert.fileName} title={cert.title} link={cert.link} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Contact />
            </motion.div>
        </>
    )
}
