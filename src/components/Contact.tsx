import React from "react";
import SessionHeading from "./SessionHeading";
import SubHeading from "./SubHeading";
import { MediaData } from "src/constants";
import { CgArrowTopRight } from "react-icons/cg";

const Contact = () => {
  return (
    <div id="Contact">
      <SessionHeading>Contact</SessionHeading>
      <div className="py-10 px-6 space-y-20">
        <span className="space-y-3">
          <span className="font-semibold text-xl">
            Feel free to connect with me anytime
          </span>
          <p className="leading-8 w-3/4">
            whether you have a project in mind or just want to brainstorm ideas.
            Together, we can create something truly amazing and bring your
            vision to life.
          </p>
        </span>
        <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-20 ">
          {MediaData.map((medium) => (
            <a
              key={medium.id}
              href={medium.link}
              className="flex items-center gap-2 group "
            >
              <img src={medium.iconURL} alt="" width={30} className="" />
              <span>{medium.displayName}</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CgArrowTopRight />
              </span>
            </a>
          ))}
        </div>
        <div className="mx-auto w-fit font-bold">
          <SubHeading>THANK YOU FOR PATIENCE!!</SubHeading>
        </div>
      </div>
    </div>
  );
};

export default Contact;
