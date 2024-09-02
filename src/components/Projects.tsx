import React, { useState } from "react";
import SessionHeading from "./SessionHeading";
import { ProjectTypes, ProjectsData } from "src/constants";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  console.log(filter);

  return (
    <div className="lg:min-h-screen" id="Projects">
      <SessionHeading>Projects</SessionHeading>
      <div className="p-6 space-y-10">
        <ProjectTypesList filter={filter} setFilter={setFilter} />
        <ProjectsList filter={filter} />
      </div>
    </div>
  );
};

const ProjectTypesList = ({ filter, setFilter }) => {
  const AllProjectTypes = ["All", ...ProjectTypes];
  return (
    <div className="flex flex-wrap gap-6 text-xl ">
      {AllProjectTypes.map((t, idx) => (
        <button
          key={idx}
          onClick={() => {
            setFilter(t);
          }}
          className={`${
            filter == t && "bg-secondary text-primary"
          } px-4 py-2 rounded-full`}
        >
          {t}
        </button>
      ))}
    </div>
  );
};
const ProjectsList = ({ filter }) => {
  let Projects = ProjectsData;
  if (ProjectTypes.includes(filter)) {
    Projects = ProjectsData.filter((p) => p.type == filter);
  }

  return (
    <ul className="flex flex-wrap  gap-10 justify-between lg:justify-around ">
      {Projects.map((project) => (
        <li>
          <a href={project.link}>
            <ProjectCard {...project} />
          </a>
        </li>
      ))}
    </ul>
  );
};
const ProjectCard = ({ name, description, imgUrl }) => {
  return (
    <div>
      <img
        src={imgUrl}
        alt=""
        width={266}
        height={196}
        className="h-[196px] w-[266px] object-cover"
      />
      <h3 className="uppercase font-bold text-lg mt-3">{name}</h3>
      <p className="">{description}</p>
    </div>
  );
};
export default Projects;
