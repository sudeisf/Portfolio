import { Link } from "react-router-dom"
import design from "@/assets/design.svg"
import arrow from "@/assets/arrow.svg"
import consult from "@/assets/consult.svg"
import android from "@/assets/android.svg"
import website from "@/assets/website.svg"


export default function Services() {
    return (
        <div className="py-4  space-y-8 " id="services">
            <h1 className="text-4xl text-center font-Rubik uppercase font-semibold ">Services</h1>

            <div className="flex flex-row overflow-x-scroll scrollbar-hide items-center w-[90%] space-x-4 mx-auto snap-x snap-mandatory ">
                <div className="bg-[#1e1e1e] text-white p-5 font-Rubik w-[360px] h-[360px] rounded-[20px] border-none space-y-4 flex-shrink-0 snap-center">
                    <div className="flex gap-4 p-2 items-center">
                    <img src={design} alt="design" />
                    <h1 className="text-5xl uppercase font-Rubik font-semibold">UI/UX <br /> <span className="text-3xl">Design</span></h1>
                    </div>
                    <p className="p-2 text-justify text-md">
                    I design intuitive, user-centric interfaces that blend functionality with aesthetics, ensuring seamless and engaging digital experiences.
                    </p>
                    <Link to="/" className="text-sm p-2 flex gap-4 items-center">Learn more <img src={arrow} alt="" className="inline-block w-5" /></Link>
                </div>

                <div className="bg-[#1e1e1e] text-white p-5 font-Rubik w-[380px] h-[360px] rounded-[20px] border-none space-y-4 flex-shrink-0 snap-center">
                    <div className="flex gap-4 p-2 items-center">
                    <img src={android} alt="design" className="w-24" />
                    <h1 className="text-[2.5rem] uppercase font-Rubik font-semibold leading-10">Android<br /><span className="text-2xl">Development</span></h1>
                    </div>
                    <p className="p-2 text-justify text-md">
                    I develop efficient and user-friendly Android applications, focusing on intuitive design, smooth performance, and seamless navigation
                    </p>
                    <Link to="/" className="text-sm p-2 flex gap-4 items-center">Learn more <img src={arrow} alt="" className="inline-block w-5" /></Link>
                </div>

                <div className="bg-[#1e1e1e] text-white p-5 font-Rubik w-[360px] h-[360px] rounded-[20px] border-none space-y-4 flex-shrink-0 snap-center">
                    <div className="flex gap-4 p-2 items-center">
                    <img src={website} alt="design" />
                    <h1 className="text-[2.5rem] uppercase font-Rubik font-semibold leading-10">Website <br /> <span className="text-2xl">Development</span></h1>
                    </div>
                    <p className="p-2 text-left text-md leading-relaxed">
                        I build responsive and dynamic websites focused on performance, user experience, and modern design principles.
                        </p>    
                    <Link to="/" className="text-sm p-2 flex gap-4 items-center">Learn more <img src={arrow} alt="" className="inline-block w-5" /></Link>
                </div>

                <div className="bg-[#1e1e1e] text-white p-5 font-Rubik w-[360px] h-[360px] rounded-[20px] border-none space-y-4 flex-shrink-0 snap-center">
                    <div className="flex gap-4 p-2 items-center">
                    <img src={consult} alt="design" className="w-20" />
                    <h1 className="text-[2rem] uppercase font-Rubik font-semibold leading-10">Consulting <br /> <span className="text-2xl">Services</span></h1>
                    </div>
                    <p className="p-2 text-justify text-md">
                    I design intuitive, user-centric interfaces that blend functionality with aesthetics, ensuring seamless and engaging digital experiences.
                    </p>
                    <Link to="/" className="text-sm p-2 flex gap-4 items-center">Learn more <img src={arrow} alt="" className="inline-block w-5" /></Link>
                </div>

            </div>


        </div>
    )
}