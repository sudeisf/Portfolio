import HeroPic from "@/assets/profile.png";
import HeroPicLarge from '@/assets/profile-large.png'
import { useEffect, useState } from "react";
import Heromotto from '@/components/hero/Heromotto'


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
        <div className="flex flex-col space-x-4">
                <div className="flex flex-col md:flex-row md:text-left bg-[#1e1e1e] space-x-5 p-5 md:p-3 items-center w-[95%] mx-auto rounded-xl mt-4 min-h-[400px] my-auto drop-shadow-2xl">
                            <div className="w-[60%] xl:p-5 ">
                            {
                                !isMobile ? (
                                    <img src={HeroPicLarge} alt="hero" className="w-[85%] ml-auto xl:w-[80%] " />
                                ) : (
                                    <img src={HeroPic} alt="hero" className="mx-auto " />
                                )
                            }
                            </div>
                            <div className="w-full p-4 md:p-0 flex flex-col">
                            <h1 className="text-white text-2xl text-center md:text-left lg:text-4xl xl:text-5xl xl:leading-tight md:p-0 font-Rubik md:mx-0 mx-auto uppercase">
                                    Hello! <br />
                                    my name is sudeis F. <br />
                                    i am full stack web <br />
                                    developer  
                                </h1>

                                <button className="bg-white text-black xl:text-lg capitalize py-2 lg:py-3 mt-4 rounded-lg mx-auto md:mx-0 w-[40%] md:w-[20%] font-Rubik ">
                                    hire me
                                </button>
                            </div>
                </div>
                <Heromotto />

            </div>
        
    )
}