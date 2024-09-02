import React from "react";
import IconNav from "./IconNav";

import svgGroup from "@assets/svgGroup.svg";
import profile from "@assets/profile.png";
import avatar from "@assets/Avatar.png";

const Home = () => {
  return (
    <div className="xl:h-screen flex flex-col relative" id="Home">
      <div className="text-3xl md:text-5xl lg:text-7xl font-extrabold mx-auto mt-6 font-rowdies text-nowrap relative ">
        <span className="stylised-text">WELCOME </span>
        TO MY
        <span className="stylised-text"> PORTFOLIO</span>
      </div>
      <div className="flex *:flex-1 px-10  items-center h-full">
        <div className="w-fit h-fit">
          <div className="w-fit relative">
            <div className="text-xl md:text-3xl lg:text-5xl font-semibold">
              HI THERE!!
            </div>
            <div className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-nowrap outlined">
              I'M{" "}
              <span className="text-secondary font-extrabold font-rowdies">
                ARUN
              </span>
            </div>
            <div className=" md:text-lg lg:text-xl bg-secondary text-primary font-bold p-1 pr-4 border-2">
              UI/UX DESIGNER
            </div>
            <div className=" hidden sm:block absolute bottom-0 -right-7 w-10 lg:w-20 lg:-right-14">
              <img src={avatar.src} alt="" />
            </div>

            <div className="hidden md:block absolute -bottom-16 lg:-bottom-32 left-0 right-0 rounded-full overflow-hidden">
              <IconNav />
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center -z-10">
          <div className=" aspect-square ">
            <img
              src={profile.src}
              alt="Profile"
              className="h-full w-full object-cover "
            />
          </div>
          <div className="absolute opacity-50 md:opacity-70  -z-20 scale-125">
            <img src={svgGroup.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
