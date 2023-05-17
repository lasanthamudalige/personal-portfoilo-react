import React from "react";
import image1 from "../img/keeper_app.png";
import image2 from "../img/wiki_api.png";
import image3 from "../img/todo_list.png";
import image4 from "../img/personal_blog.png";
import image5 from "../img/api_based_dictionary.png";
import image6 from "../img/cafe_and_wifi.png";


function Projects() {
    return (
        <section id="projects">
            <div class="container ms-auto me-auto text-center">
                <h2 class="text-decoration-underline text-light fw-bold pb-5">
                    These are some of my projects
                </h2>

                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <a href="a" class="text-decoration-none project-tile">
                            <div class="card bg-dark text-light border-0">
                                <img
                                    src={image1}
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Keeper app</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="a" class="text-decoration-none project-tile">
                            <div class="card bg-dark text-light">
                                <img
                                    src={image2}
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Wiki API</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="a" class="text-decoration-none project-tile">
                            <div class="card bg-dark text-light">
                                <img
                                    src={image3}
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">TO-Do List</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="a" class="text-decoration-none project-tile">
                            <div class="card bg-dark text-light">
                                <img
                                    src={image4}
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Personal blog</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="a" class="text-decoration-none project-tile">
                            <div class="card bg-dark text-light">
                                <img
                                    src={image5}
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Api based dictionary website</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="a" class="text-decoration-none project-tile">
                            <div class="card bg-dark text-light">
                                <img
                                    src={image6}
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Cafe and wifi website</h5>
                                </div>
                            </div></a
                        >
                    </div>
                </div>
            </div>
            <div class="row text-center pt-5">
                <div class="col">
                    <a class="btn btn-secondary" href="https://github.com/lasanthamudalige?tab=repositories" target="_blank" rel="noreferrer">See all</a
                    >
                </div>
            </div>
        </section>

    );
};

export default Projects;