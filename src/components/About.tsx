import React from "react";
import SessionHeading from "./SessionHeading";
import SubHeading from "./SubHeading";

import Design from "@assets/About/Design.svg";
import Prototype from "@assets/About/Prototype.svg";
import Wireframe from "@assets/About/Wireframe.svg";

const About = () => {
  return (
    <div className="w-full" id="About">
      <SessionHeading>About Me</SessionHeading>
      <div className="px-8 py-10">
        <div className="">
          <SubHeading>
            I'm <span className="font-semibold">ARUN</span>, UX/UI Designer
          </SubHeading>
          <p className="mt-3 lg:text">
            Passionate and enthusiastic UX/UI Designer with fast learning
            skills, currently enhancing my expertise in user-centered design. I
            focus on creating visually pleasing and highly functional user
            interfaces and am seeking an opportunity to gain experience in UX/UI
            design.
          </p>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row gap-10 *:flex-1">
          <div>
            <SubHeading>
              <span className="font-semibold">WHAT I DO ?</span>
            </SubHeading>
            <div className="mt-6 grid grid-cols-[auto_auto] gap-y-2">
              <SkillCard
                title={"MOBILE & WEB APPLICATION DESIGN "}
                icon={Design.src}
              >
                I craft intuitive and visually appealing designs for mobile apps
                and websites, ensuring a seamless user experience.
              </SkillCard>
              <SkillCard title={"Wireframing"} icon={Wireframe.src}>
                Creating simple, low-fidelity layouts to outline the structure
                and functionality of a design.
              </SkillCard>
              <SkillCard title={"Prototype"} icon={Prototype.src}>
                Building interactive models to visualize and test how the final
                product will work.
              </SkillCard>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <InfoBlock bottomText={"Experience"}>0+</InfoBlock>
            <InfoBlock bottomText={"Projects"}>3+</InfoBlock>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ title, icon, children }) => {
  return (
    <>
      <div>
        <img src={icon} alt="" />
      </div>
      <div>
        <h3 className=" font-bold">{title}</h3>
        <p className="">{children}</p>
      </div>
    </>
  );
};

const InfoBlock = ({ children, bottomText }) => {
  return (
    <div className="flex-1 bg-resume-texture bg-left-bottom flex justify-center  rounded-xl relative -z-0">
      <h1 className=" pt-8 pb-12 text-8xl font-bold text-secondary">
        {children}
      </h1>
      <h3 className="absolute bottom-1  text-primary font-bold tracking-wider text-xl">
        {bottomText}
      </h3>
    </div>
  );
};
export default About;
