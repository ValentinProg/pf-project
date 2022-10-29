import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList";
import { GitHub } from "@material-ui/icons";
import "./ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <a href={project.url}>
        <img src={project.image} />
      </a>
      <p>
        <b>Skills:</b>
        {project.skills}
      </p>
      <a href={project.github}>
        <GitHub />
      </a>
    </div>
  );
}

export default ProjectDisplay;
