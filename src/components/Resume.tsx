import React from "react";
import SessionHeading from "./SessionHeading";
import SubHeading from "./SubHeading";
import {
  EducationData,
  ToolsData,
  SkillsData,
  CertificationsData,
} from "src/constants";
import { IoMdArrowDropright } from "react-icons/io";
const Resume = () => {
  return (
    <div className="" id="Resume">
      <SessionHeading>Resume</SessionHeading>
      <div className="p-6">
        <div className="bg-resume-texture bg-cover  text-primary px-16 py-20 rounded-xl ">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row justify-between gap-5">
              <Education />
              <Tools />
              <Skills />
            </div>
            <Certifications />
          </div>
        </div>
      </div>
    </div>
  );
};
const Education = () => {
  return (
    <div className="space-y-2">
      <SubHeading>
        <span className="font-semibold text-secondary">Education</span>
      </SubHeading>
      <div className="grid grid-cols-[auto_auto] gap-x-2 gap-y-3">
        {EducationData.map((data) => (
          <EducationCard
            key={data.id}
            title={data.title}
            school={data.school}
            period={data.period}
            id={data.id}
          />
        ))}
      </div>
    </div>
  );
};
const EducationCard = ({ id, title, school, period }) => {
  return (
    <>
      <div>
        <h4>{title}</h4>
        <p className="text-sm text-gray-300 font-extralight max-w-52">
          {school}
        </p>
      </div>
      <p>{period}</p>
    </>
  );
};
const Tools = () => {
  return (
    <div className="space-y-2">
      <SubHeading>
        <span className="font-semibold text-secondary">Tools</span>
      </SubHeading>
      <div className="space-y-3">
        {ToolsData.map((toolData) => (
          <React.Fragment key={toolData.id}>
            <ToolCard
              id={toolData.id}
              title={toolData.title}
              iconUrl={toolData.iconUrl}
              score={toolData.score}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
const ToolCard = ({ id, title, iconUrl, score }) => {
  return (
    <div className="flex w-full items-center gap-1 lg:gap-2">
      <img src={iconUrl} alt={title} width={40} />
      <p className=" text-lg  font-semibold">{title}</p>
      <p className="ml-auto justify-self-end ">{score}/10</p>
    </div>
  );
};
const Skills = () => {
  return (
    <div className="space-y-2">
      <SubHeading>
        <span className="font-semibold text-secondary">Skills</span>
      </SubHeading>
      <ul className="space-y-1 list-none">
        {SkillsData.map((skill, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-secondary">
              <IoMdArrowDropright />
            </span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
const Certifications = () => {
  return (
    <div className="space-y-2">
      <SubHeading>
        <span className="font-semibold text-secondary">Certifications</span>
      </SubHeading>
      <ul className="space-y-2 list-none lg:flex gap-5">
        {CertificationsData.map((cert, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-secondary">
              <IoMdArrowDropright />
            </span>
            <div>
              {cert.map((el) => (
                <div className="max-w-60" key={idx + el}>
                  {el}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
