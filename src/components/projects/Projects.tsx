import { Link } from "react-router-dom";

export function Projects() {
    return (
        <div id="projects" className="md:flex md:flex-row pt-10 w-[90%] mx-auto">
            {/* Title Section */}
            <div className="w-[80%] md:w-[10%] mx-auto flex items-center justify-center ">
                <h1 className="text-black py-8 md:py-0 md:p-7 font-Rubik uppercase  font-semibold text-4xl md:text-6xl md:transform md:-rotate-90">
                    Projects
                </h1>
            </div>

            {/* Project Sections */}
            <div className="space-y-8 w-[80%] md:w-[90%] mx-auto">
                {/* Project 1 */}
                <div className="space-y-4 md:flex md:flex-row md:space-x-8">
                    <div className="bg-[#1e1e1e]  md:w-[50%] h-[217px] lg:h-[280px] mx-auto rounded-xl"></div>
                    <div className="flex flex-col w-[80%] md:w-[50%] md:text-lg mx-auto text-center md:text-left font-Rubik">
                    <div className="flex flex-col gap-2">
                            <h2 className="font-Rubik uppercase font-semibold py-2 text-lg xl:text-2xl">Project 1</h2>
                            <p className="text-sm md:text-md xl:text-lg ">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <Link to={''} className="flex items-center space-x-2 hover:underline gap-5 justify-center py-2">
                            wath live <img src="/live.svg" alt="" className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Project 2 (Reverse order on larger screens) */}
                <div className="space-y-8 md:flex md:flex-row-reverse md:space-x-8">
                    <div className="bg-[#1e1e1e]  h-[217px] md:w-[50%] lg:h-[280px] mx-auto rounded-xl"></div>
                    <div className="flex flex-col w-[80%] md:w-[50%] md:text-lg mx-auto text-center md:text-left font-Rubik">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-Rubik uppercase font-semibold py-2 text-lg xl:text-2xl">Project 2</h2>
                            <p className="text-sm md:text-md xl:text-lg ">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <Link to={''} className="flex items-center space-x-2 hover:underline gap-5 justify-center py-2">
                            wath live <img src="/live.svg" alt="" className="w-6 h-6" />
                            </Link>
                        </div>
                      
                    </div>
                </div>

                {/* Project 3 */}
                <div className="space-y-4 md:flex md:flex-row md:space-x-8">
                    <div className="bg-[#1e1e1e]  h-[217px] md:w-[50%] lg:h-[280px] mx-auto rounded-xl"></div>
                    <div className="flex flex-col  md:w-[50%] md:text-lg mx-auto text-center md:text-left font-Rubik">
                    <div className="flex flex-col gap-2">
                            <h2 className="font-Rubik uppercase font-semibold py-2 text-lg xl:text-2xl">Project 3</h2>
                            <p className="text-sm md:text-md xl:text-lg ">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <Link to={''} className="flex items-center space-x-2 hover:underline gap-5 justify-center py-2">
                            wath live <img src="/live.svg" alt="" className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
