import React from "react";

function ProjectCard(props) {
    return (
        <div className="col">
            <a href={props.link} className="text-decoration-none project-tile" target="_blank" rel="noreferrer">
                <div className="card bg-dark text-light border-0">
                    <img
                        src={props.imgUrl}
                        className="card-img-top"
                        alt="project"
                    />
                    <div className="card-body">
                        <h5 className="card-title pb-2 fw-bold">{props.title}</h5>

                        <div className="row">
                            <div className="col">
                                {
                                    props.technologies.map((technology) =>
                                        <span className="border border-white fw-bold p-1 m-1 rounded">{technology}</span>
                                    )
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </a>
        </div>);
}

export default ProjectCard;