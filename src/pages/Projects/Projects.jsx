import React from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import "./Projects.css";
import { projectList } from "../../helpers/ProjectList";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image}/>
        })}
      </div>
    </div>
  );
};

export default Projects;
