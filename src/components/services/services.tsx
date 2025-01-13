import { Link } from "react-router-dom";
import design from "@/assets/design.svg";
import arrow from "@/assets/arrow.svg";
import consult from "@/assets/consult.svg";
import android from "@/assets/android.svg";
import website from "@/assets/website.svg";
import { motion as m } from "motion/react";
import { useRef } from "react";
import { Marquee } from "../marquee/marquee";


export default function Services() {
  // Create a ref to the container
  const servicesRef = useRef<HTMLDivElement>(null);

  const handleHoverStart = () => {
    if (servicesRef.current) {
      // Get the fourth element (index 3)
      const fourthElement = servicesRef.current.children[3];
      if (fourthElement) {
        // Scroll to the fourth element
        servicesRef.current.scrollTo({
          left: (fourthElement as HTMLElement).offsetLeft, // Scroll to the 4th element's position
          behavior: "smooth",
        });
      }
    }
  };

  const handleHoverEnd = () => {
    if (servicesRef.current) {
      // Reset scroll position to the leftmost side
      servicesRef.current.scrollTo({
        left: 0, // Go back to the leftmost position
        behavior: "smooth",
      });
    }
  };
  const svgPaths = Array.from({ length: 12 }, (_, i) => `/${i + 1}.svg`);

  return (
    <m.div className="py-4 space-y-12" id="services">
      <h1 className="text-4xl text-center font-Rubik uppercase font-semibold  py-4">
        Services
      </h1>

      <m.div
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        ref={servicesRef} 
        className="flex flex-row overflow-x-scroll scrollbar-hide items-center w-[90%] space-x-4 mx-auto snap-x snap-mandatory"
        style={{ transition: "scroll-left 1s ease-out" }} // Add smooth transition
      >
        <div className="bg-[#1e1e1e] text-white p-5 font-Rubik w-[360px] h-[360px] rounded-[20px] border-none space-y-4 flex-shrink-0 snap-center">
          <div className="flex gap-4 p-2 items-center border-[#ffffff]">
            <img src={design} alt="design" />
            <h1 className="text-5xl uppercase font-Rubik font-semibold">
              UI/UX <br /> <span className="text-3xl">Design</span>
            </h1>
          </div>
          <p className="p-2 text-justify text-md">
            I design intuitive, user-centric interfaces that blend
            functionality with aesthetics, ensuring seamless and engaging
            digital experiences.
          </p>
          <Link to="/" className="text-sm p-2 flex gap-4 items-center">
            Learn more <img src={arrow} alt="" className="inline-block w-5" />
          </Link>
        </div>

        <div className="bg-[#1e1e1e] text-white p-5 font-Rubik w-[380px] h-[360px] rounded-[20px] border-none space-y-4 flex-shrink-0 snap-center">
          <div className="flex gap-4 p-2 items-center">
            <img src={android} alt="design" className="w-24" />
            <h1 className="text-[2.5rem] uppercase font-Rubik font-semibold leading-10">
              Android
              <br />
              <span className="text-2xl">Development</span>
            </h1>
          </div>
          <p className="p-2 text-justify text-md">
            I develop efficient and user-friendly Android applications,
            focusing on intuitive design, smooth performance, and seamless
            navigation.
          </p>
          <Link to="/" className="text-sm p-2 flex gap-4 items-center">
            Learn more <img src={arrow} alt="" className="inline-block w-5" />
          </Link>
        </div>

        <div className="bg-[#1e1e1e] text-white p-5 font-Rubik w-[360px] h-[360px] rounded-[20px] border-none space-y-4 flex-shrink-0 snap-center">
          <div className="flex gap-4 p-2 items-center">
            <img src={website} alt="design" />
            <h1 className="text-[2.5rem] uppercase font-Rubik font-semibold leading-10">
              Website <br /> <span className="text-2xl">Development</span>
            </h1>
          </div>
          <p className="p-2 text-left text-md leading-relaxed">
            I build responsive and dynamic websites focused on performance,
            user experience, and modern design principles.
          </p>
          <Link to="/" className="text-sm p-2 flex gap-4 items-center">
            Learn more <img src={arrow} alt="" className="inline-block w-5" />
          </Link>
        </div>

        <div className="bg-[#1e1e1e] text-white p-5 font-Rubik w-[360px] h-[360px] rounded-[20px] border-none space-y-4 flex-shrink-0 snap-center">
          <div className="flex gap-4 p-2 items-center">
            <img src={consult} alt="design" className="w-20" />
            <h1 className="text-[2rem] uppercase font-Rubik font-semibold leading-10">
              Consulting
              <br />
              <span className="text-2xl">Services</span>
            </h1>
          </div>
          <p className="p-2 text-justify text-md">
            I design intuitive, user-centric interfaces that blend
            functionality with aesthetics, ensuring seamless and engaging
            digital experiences.
          </p>
          <Link to="/" className="text-sm p-2 flex gap-4 items-center">
            Learn more <img src={arrow} alt="" className="inline-block w-5" />
          </Link>
        </div>
      </m.div>
     <div >
      <Marquee 
          duration={15} containerClassName="bg-[#ffffff] py-6">
            {/* Render all SVGs dynamically */}
        {svgPaths.map((path, index) => (
          <img
            key={index}
            src={path}
            alt={`Icon ${index + 1}`}
            className="h-14 mx-8"
          />
        ))}
      </Marquee>
     </div>
    </m.div>
  );
}
