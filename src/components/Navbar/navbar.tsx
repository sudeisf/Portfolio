import { useEffect, useState } from "react";
import { NavLink ,Link } from "react-router-dom";
import Menu from  "@/assets/menu.svg";
import github from  "@/assets/github.svg";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,

    NavigationMenuList,
    NavigationMenuTrigger,
   

}
from "@/components/UI/navigation-menu"
export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 850)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    return (
        <div className=" flex justify-between items-center p-2 md:px-8 md:py-4  lg:text-md font-Rubik  z-10 space-x-2 sticky top-0 bg-[#ffffff]">
            <div className="flex md:gap-4 gap-2 items-center capitalize xl:text-xl "> 
                <Link to="/">linkedin</Link> /
                <Link to="/">instagram</Link> /
                <Link to="/">Telegram</Link>
            </div>

             {
                !isMobile && (
                    <div className="flex space-x-4">
                        <div className="flex space-x-8 xl:text-xl">
                        <a href="#about" className="hover:underline">About Me</a>
                        <a href="#services" className="hover:underline">Services</a>
                        <a href="#projects" className="hover:underline">Projects</a>
                        <a href="#contact" className="hover:underline">Contact</a>
                        </div>
                        <div>
                            <img src={github} alt="github" className="w-7" />
                        </div>
                    
                </div>
                )
             }

             {
                isMobile && (
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <img src={Menu} alt="menu icon" />
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="flex flex-col px-2 py-3 text-[14px]">
                                        <NavLink to="/">About me</NavLink> 
                                        <NavLink to="/">Services</NavLink> 
                                        <NavLink to="/">Projects</NavLink>
                                        <NavLink to="/">Contact</NavLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                )
             }
        </div>
    )
}