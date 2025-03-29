"use client";

import AllScreenSec from "@/components/AllScreenSec";
import VideoSec from "@/components/VideoSec";
import { motion, useScroll } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scrollToTop = () => {
    window.scrollTo({
      top: 20, // Scroll to the top of the page
      behavior: "smooth", // Smooth scroll behavior
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        id="nav"
        className="navbar bg-base-300 shadow-sm sticky top-0 z-20 flex lg:justify-end px-8"
      >
        <div className="flex justify-between items-center md:w-[100%] lg:w-[53.5%]">
          <a className="text-4xl jersey-20-regular">PIXELVERSE</a>
          <ul className="menu menu-horizontal gap-5 md:text-[14px] lg:text-[16px]">
            <li className="border-1 rounded-md border-black  hover:bg-black hover:text-white">
              <a href="#videos">Features</a>
            </li>
            <li className="border-1 rounded-md border-black  hover:bg-black hover:text-white">
              <a href="#all-screens">All Screens</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* SCROLL INDICATOR */}
      <motion.div
        id="scroll-indicator"
        className="bg-gray-700 z-50"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 65,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          // backgroundColor: "#ff0088",
        }}
      />
      <div className="mt-8 ml-10 px-16 relative">
        {/* Header Section */}
        {/* <section
          id="header"
          className="flex justify-center gap-12 bg-secondary rounded-4xl h-[60vh] mt-20 overflow-hidden mb-20"
        >
          <img
            src="/images/header_img.png"
            alt="iPhone Bezel"
            className="w-[100%] object-cover"
          />
        </section> */}
        <section
          id="header"
          className="relative flex justify-center items-center bg-secondary rounded-4xl h-[60vh] mt-20 overflow-hidden mb-20"
        >
          {/* Background Image */}
          <img
            src="/images/header_img.png"
            alt="Header"
            className="w-full h-full object-cover"
          />

          {/* Text Overlay */}
          <div className="absolute flex items-center justify-center py-15 px-20 rounded-2xl bg-black/60 h-full w-full">
            <div className="text-center text-white max-w-2xl">
              <h2 className="sm:text-2xl 2xl:text-3xl font-bold mb-4">
                Discover & Share
              </h2>
              <p className="sm:text-lg 2xl:text-xl">
                Pixelverse is a smart video-sharing platform that makes finding,
                uploading, and managing videos effortless. Advanced search helps
                users discover content instantly. Users can customize profiles
                and enjoy a seamless viewing experience.
              </p>
            </div>
          </div>
        </section>
        {/* Videos */}
        <VideoSec />
        {/* All screens */}
        <h1 id="all-screens" className="text-4xl font-medium mb-10 mt-20">
          All Screens
        </h1>
        <AllScreenSec />

        <button
          onClick={scrollToTop}
          className="tooltip btn rounded-[50%] p-1 bg-black right-[1%] bottom-[3%] z-10 flex flex-col fixed "
        >
          <img
            src="/icons/arrow_up.png"
            alt="iPhone Bezel"
            className="w-[30px] object-cover"
          />
          <span className="tooltiptext">back to top</span>
        </button>
      </div>
      <style jsx>
        {`
          /* Tooltip container */
          .tooltip {
            position: fixed;
            display: inline-block;
            border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
          }

          /* Tooltip text */
          .tooltip .tooltiptext {
            visibility: hidden;
            min-width: 90px;
            background-color: gray;
            color: #fff;
            text-align: center;
            padding: 4px 0;
            border-radius: 6px;
            font-size: 12px;

            /* Position the tooltip text - see examples below! */
            position: absolute;
            z-index: 1;
            top: -30;
            right: 20;
          }

          /* Show the tooltip text when you mouse over the tooltip container */
          .tooltip:hover .tooltiptext {
            visibility: visible;
          }

          .tooltip .tooltiptext::after {
            content: " ";
            position: absolute;
            top: 78%; /* At the bottom of the tooltip */
            right: 1%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-raidus: 20%;
            border-color: transparent gray transparent transparent;
          }
        `}
      </style>
    </>
  );
}
