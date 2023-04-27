import React from "react";
import { projects } from "../data";
import Project from "./Projects";


function ProjectsList() {
  return (
    <section className="project-container" id="projects">
      <div className="project-title">
        <h1>Project</h1>
      </div>
      {projects.map((project)=>{
        return <Project key={project.id} {...project} />;
      })}
    </section>
  );
}

export default ProjectsList;
