import React from "react";

import profile from "@assets/profile.png";

const StickyNav = () => {
  const Links = ["Home", "About", "Resume", "Projects", "Contact"];
  return (
    <div className="hidden md:flex  w-60 lg:w-80 bg-secondary h-screen flex-col">
      <div className="bg-nav-profile-texture bg-contain">
        <img src={profile.src} alt="" />
      </div>
      <div className="flex justify-center items-center h-full border border-l">
        <ul className=" flex flex-col justify-center items-center gap-y-5 font-semibold text-xl relative py-10">
          {Links.map((link) => (
            <li
              key={link}
              className="relative z-20 bg-secondary hover:text-primary active:bg-primary active:text-secondary px-2 py-1"
            >
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
          <div className="w-[2px]  absolute h-full z-10 ">
            <div className="bg-black h-full w-full rounded-full"></div>
          </div>
          <div className="w-2  absolute h-2 z-10 top-0 ">
            <div className="bg-black h-full w-full rounded-full"></div>
          </div>
          <div className="w-2  absolute h-2 z-10 bottom-0 ">
            <div className="bg-black h-full w-full rounded-full"></div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default StickyNav;
