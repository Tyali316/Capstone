import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from '@material-ui/icons/Visibility';
import "../styles/ProjectDisplay.css";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (  
//  eslint-disable-next-line
    <div className="project"> 
  
      <h1> {project.name}</h1>    
      <img src={project.image}  alt="logo"/>
    <div className="project-desc">
      <p>View Code</p>
      <a href="https://github.com/Tyali316" target="_blank" rel="noreferrer">
      <GitHubIcon />
      </a>
      <p>View Project</p>
      <a href={project.url} target="_blank" rel="noreferrer">
      <VisibilityIcon />
      </a>
    </div>
    </div>
  );
}

export default ProjectDisplay;