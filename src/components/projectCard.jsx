import React from "react";

function ProjectCard(props) {
    return (
        <div class="col">
            <a href={props.link} class="text-decoration-none project-tile" target="_blank" rel="noreferrer">
                <div class="card bg-dark text-light border-0">
                    <img
                        src={props.img}
                        class="card-img-top"
                        alt="project"
                    />
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                    </div>
                </div>
            </a>
        </div>);
}

export default ProjectCard;