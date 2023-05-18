import React from "react";
import ProjectItem from "./projectItem";
import projects from "../data/projects";


function Projects() {
    return (
        <section id="projects">
            <div className="container ms-auto me-auto text-center">
                <h2 className="text-decoration-underline text-light fw-bold pb-5">
                    These are some of my projects
                </h2>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {projects.map(project => (
                        <ProjectItem key={project.id} title={project.title} imgUrl={project.imgUrl} link={project.link} technologies={project.technologies} />
                    ))}
                </div>
            </div>
            <div className="row text-center pt-5">
                <div className="col">
                    <a className="btn btn-secondary" href="https://github.com/lasanthamudalige?tab=repositories" target="_blank" rel="noreferrer">See all</a>
                </div>
            </div>
        </section>

    );
};

export default Projects;