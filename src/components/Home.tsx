import React from "react";
import IconNav from "./IconNav";

import svgGroup from "@assets/svgGroup.svg";
import profile from "@assets/profile.png";
import avatar from "@assets/Avatar.png";

import { FaCaretRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="xl:h-screen flex flex-col relative" id="Home">
      <div className="flex flex-col gap-3 sm:flex-row items-center text-4xl md:text-5xl lg:text-7xl font-extrabold mx-auto mt-6 font-rowdies text-nowrap relative ">
        <span className="stylised-text">WELCOME </span>
        <span>TO MY</span>
        <span className="stylised-text"> PORTFOLIO</span>
      </div>
      <div className="flex flex-col-reverse sm:flex-row *:flex-1 px-10  items-center h-full">
        <div className="w-fit h-fit">
          <div className="w-fit relative my-6 flex flex-col items-center sm:items-start">
            <div className="text-3xl lg:text-5xl font-bold">HI THERE!!</div>
            <div className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-nowrap outlined">
              I'M{" "}
              <span className="text-secondary font-extrabold font-rowdies">
                ARUN
              </span>
            </div>
            <div className=" w-full text-center sm:text-left text-lg lg:text-xl bg-secondary text-primary font-bold p-1 pr-4 border-2">
              UI/UX DESIGNER
            </div>
            <div className="  sm:block absolute bottom-0 -right-7 w-10 lg:w-20 lg:-right-14">
              <img src={avatar.src} alt="" />
            </div>

            <div className="hidden md:block absolute -bottom-16 lg:-bottom-32 left-0 right-0 rounded-full border-2 overflow-hidden">
              <IconNav />
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center -z-10">
          <div className=" aspect-square w-[80%] md:w-full ">
            <img
              src={profile.src}
              alt="Profile"
              className="h-full w-full object-cover "
            />
          </div>
          <div className="absolute -z-20 w-[80%] md:w-full scale-125">
            <img src={svgGroup.src} alt="" />
          </div>
        </div>
      </div>

      <a
        href="#About"
        className="mx-auto flex items-center gap-1 sm:hidden py-2 px-4 mt-2 mb-10 border-2 border-secondary text-secondary hover:bg-secondary rounded-xl hover:text-primary "
      >
        Know More
        <FaCaretRight />
      </a>
    </div>
  );
};

export default Home;
