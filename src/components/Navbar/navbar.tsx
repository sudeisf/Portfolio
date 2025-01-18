import { useEffect, useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Menu from "@/assets/menu.svg";
import github from "@/assets/github.svg";
 // Add a close icon

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Create a ref for the sidebar
  const sidebarRef = useRef<HTMLDivElement>(null);

  // useEffect to check screen width
useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };
  
    handleResize(); // Run on initial render
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);
  

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar function
  const closeSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center p-2 md:px-8 md:py-3 lg:text-md font-Rubik z-10 space-x-2 sticky top-0 bg-[#ffffff] bg-opacity-90">
      {/* Left section (Social Links) */}
      <div className="flex md:gap-4 gap-2 items-center capitalize xl:text-xl">
        <Link to="/">linkedin</Link> /
        <Link to="/">instagram</Link> /
        <Link to="/">Telegram</Link>
      </div>

      {/* Desktop Navigation Links */}
      {!isMobile && (
        <div className="flex space-x-4">
          <div className="flex space-x-8 xl:text-xl">
            <a href="#about" className="hover:underline">
              About Me
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
          <div>
            <img src={github} alt="github" className="w-7" />
          </div>
        </div>
      )}

      {isMobile && (
        <div className="relative">
          {/* Menu Button */}
          <button onClick={toggleSidebar} className="p-2">
            <img src={Menu} alt="menu icon" className="w-6 h-6" />
          </button>

          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className={`w-64 h-svh bg-[#1e1e1e] absolute -top-2 -left-52  text-white transition-transform duration-600 ease-linear ${
                isOpen ? "translate-x-0" : "hidden -translate-x-full"
            }`}
>
            <div className="p-6">
              {/* Close Button */}
              <button onClick={closeSidebar} className="absolute top-4 right-4">
                <img src='./close.svg' alt="close icon" className="w-6 h-6" />
              </button>

              <NavLink to="#about" className="block py-4 hover:underline">
                About Me
              </NavLink>
              <Link to="#services" className="block py-4 hover:underline">
                Services
              </Link>
              <NavLink to="#projects" className="block py-4 hover:underline">
                Projects
              </NavLink>
              <NavLink to="#contact" className="block py-4 hover:underline">
                Contact
              </NavLink>
              <div className="mt-8">
                <img src={github} alt="github" className="w-7" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
