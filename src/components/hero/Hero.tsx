import HeroPic from "@/assets/profile.png";
import HeroPicLarge from '@/assets/profile-large.png'
import { useEffect, useState } from "react";
import Heromotto from '@/components/hero/Heromotto'
import {motion as m } from 'motion/react'


export default function Hero() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 750)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    return (
        <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 , delay: 0.5 , ease: 'linear' }}
        className="flex flex-col space-x-4 ">
                <div className="flex flex-col md:flex-row md:text-left bg-[#1e1e1e] space-x-5 p-5 md:p-3 items-center w-[95%] mx-auto rounded-xl mt-8 min-h-[400px] my-auto shadow-[-16px_-12px_38px_-6px_rgba(163,_159,_159,_0.45)] ">
                            <m.div
                            initial={{ opacity: 0, x: -200 }}
                            animate={{ opacity: 1 , x: 0 }} 
                            transition={{ duration: 0.8 , delay: 1 , ease: 'linear' }}
                            className="w-[60%] xl:p-6">
                            {
                                !isMobile ? (
                                    <img src={HeroPicLarge} alt="hero" className="w-[85%] ml-auto xl:w-[80%] " />
                                ) : (
                                    <img src={HeroPic} alt="hero" className="mx-auto " />
                                )
                            }
                            </m.div>
                            <div className="w-full p-4 md:p-0 flex flex-col">
                            <m.h1
                             initial={{ opacity: 0, x: 130 }}
                             animate={{ opacity: 1 , x: 0 }} 
                             transition={{ duration: 0.8 , delay: 1 , ease: 'linear' }}
                             className=" text-xl text-center md:text-left md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight md:p-0 font-Rubik uppercase md:mx-0 mx-auto ">
                            <span className="text-[#ffffff]"> Hello! </span> <br />
                            <span className="text-[#ffffff]"> I'm sudeis F. </span> <br />
                            <span className="text-[#ffffff] ">
                            i am full stack web developer <br />
                             and UI/UX EnthusiastI 
                            </span>
                                </m.h1> 



                                <m.button
                                 initial={{ opacity: 0, y: 50 }}
                                 animate={{ opacity: 1 , y: 0 }} 
                                 transition={{ duration: 0.8 , delay: 1 , ease: 'linear' }}
                                 className="bg-[#ffffff] border-2 uppercase xl:text-lg  py-2 lg:py-3 mt-4 rounded-lg mx-auto md:mx-0 w-[40%] md:w-[20%] font-Rubik font-semibold ">
                                    hire me
                                </m.button>
                            </div>
                </div>
                <Heromotto />

            </m.div>
        
    )
}