import { Link } from "react-router-dom";

export function Projects() {
    return (
        <div id="projects" className="md:flex md:flex-row pt-10 w-[90%] mx-auto mt-8">
            {/* Title Section */}
            <div className="w-[80%] md:w-[10%] mx-auto flex items-center justify-center">
                <h1 className="text-black py-8 md:py-0 md:p-7 font-Rubik uppercase font-semibold text-4xl md:text-6xl md:transform md:-rotate-90">
                    Projects
                </h1>
            </div>

            {/* Project Sections */}
            <div className="space-y-20 w-[80%] md:w-[90%] mx-auto">
                {/* Project 1 */}
                <div className="space-y-4 md:flex md:flex-row md:space-x-8">
                    <div className="bg-[#1e1e1e] md:w-[50%] h-[217px] lg:h-[280px] mx-auto rounded-xl"></div>
                    <div className="flex flex-col w-[80%] md:w-[50%] md:text-lg mx-auto text-center md:text-left font-Rubik">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-Rubik uppercase font-semibold py-2 text-lg xl:text-2xl">Project 1</h2>
                            <p className="text-sm md:text-md xl:text-lg">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <Link to={''} className="flex items-center space-x-2 hover:underline gap-5 justify-center py-1">
                                watch live <img src="/live.svg" alt="live icon" className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Project 2 (Reverse order on larger screens) */}
                <div className="space-y-8 md:flex md:flex-row-reverse md:space-x-8">
                    <div className="bg-[#1e1e1e] h-[217px] md:w-[50%] lg:h-[280px] mx-auto rounded-xl"></div>
                    <div className="flex flex-col w-[80%] md:w-[50%] md:text-lg mx-auto text-center md:text-left font-Rubik">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-Rubik uppercase font-semibold py-2 text-lg xl:text-2xl">Project 2</h2>
                            <p className="text-sm md:text-md xl:text-lg">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <Link to={''} className="flex items-center space-x-2 hover:underline gap-5 justify-center py-2">
                                watch live <img src="/live.svg" alt="live icon" className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="space-y-4 md:flex md:flex-row md:space-x-8">
                <img 
                        src="/project-image/screen-one.png" 
                        alt="Weather App Project" 
                        className="bg-[#1e1e1e] h-[217px] md:w-[50%] lg:h-[380px] mx-auto rounded-xl  object-scale-down w-full"
                    />
                    <div className="flex flex-col md:w-[50%] md:text-lg mx-auto text-center md:text-left font-Rubik">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-Rubik uppercase font-semibold py-2 text-lg xl:text-2xl">Weather App</h2>
                            <p className="text-sm md:text-md xl:text-lg">
                                A minimalist weather app built with React & Tailwind CSS. Shows real-time forecasts, air quality, and 7-day outlooks. Fully responsive.
                            </p>
                            <div className="text-sm md:text-md xl:text-lg p-2 text-gray-800">
                                <span className="font-semibold">Key Features:</span>
                                <ul className="list-none space-y-1 mt-1">
                                    <li>✔ Current & hourly weather</li>
                                    <li>✔ 7-day forecasts</li>
                                    <li>✔ Air quality data</li>
                                    <li>✔ Clean UI</li>
                                </ul>
                            </div>
                            <a href="https://weather-app-khaki-mu-55.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline gap-5 justify-center py-1">
                                watch live <img src="/live.svg" alt="live icon" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="space-y-8 md:flex md:flex-row-reverse md:space-x-8 ">
                    <div className="w-full md:w-[50%] mx-auto">
                        <img 
                            src="/project-image/ux-design.png" 
                            alt="UI/UX Design Project" 
                            className=" bg-[#424040] h-fit w-full  object-scale-down rounded-md"
                        />
                    </div>
                    <div className="flex flex-col w-[80%] md:w-[50%] md:text-lg mx-auto text-center md:text-left font-Rubik">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-Rubik uppercase font-semibold py-2 text-lg xl:text-2xl">UI/UX Design Portfolio</h2>
                            <p className="text-sm md:text-md xl:text-lg">
                                A collection of modern UI/UX designs showcasing user-centered design principles, 
                                wireframing, and interactive prototypes. Focused on creating intuitive and 
                                engaging user experiences.
                            </p>
                            <div className="text-sm md:text-md xl:text-lg p-2 text-gray-800">
                                <span className="font-semibold">Design Skills:</span>
                                <ul className="list-none space-y-1 mt-1">
                                    <li>✔ User Research & Personas</li>
                                    <li>✔ Wireframing & Prototyping</li>
                                    <li>✔ Visual Design & Branding</li>
                                    <li>✔ User Testing & Iteration</li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
