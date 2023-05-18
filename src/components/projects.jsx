import React from "react";
import image1 from "../img/keeper_app.png";
import image2 from "../img/wiki_api.png";
import image3 from "../img/todo_list.png";
import image4 from "../img/personal_blog.png";
import image5 from "../img/api_based_dictionary.png";
import image6 from "../img/cafe_and_wifi.png";
import ProjectCard from "./projectCard";


function Projects() {
    return (
        <section id="projects">
            <div class="container ms-auto me-auto text-center">
                <h2 class="text-decoration-underline text-light fw-bold pb-5">
                    These are some of my projects
                </h2>

                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <ProjectCard link={"https://github.com/lasanthamudalige/keeper-app"} img={image1} name={"Keeper app"} />
                    <ProjectCard link={"https://github.com/lasanthamudalige/wiki-api"} img={image2} name={"Wiki API"} />
                    <ProjectCard link={"https://github.com/lasanthamudalige/todo-list-node"} img={image3} name={"TO Do list"} />
                    <ProjectCard link={"https://github.com/lasanthamudalige/personal-blog-node"} img={image4} name={"Personal blog"} />
                    <ProjectCard link={"https://github.com/lasanthamudalige/api-based-dictionary"} img={image5} name={"Api based dictionary website"} />
                    <ProjectCard link={"https://github.com/lasanthamudalige/cafe-and-wifi-website"} img={image6} name={"Cafe and wifi website"} />
                </div>
            </div>
            <div class="row text-center pt-5">
                <div class="col">
                    <a class="btn btn-secondary" href="https://github.com/lasanthamudalige?tab=repositories" target="_blank" rel="noreferrer">See all</a>
                </div>
            </div>
        </section>

    );
};

export default Projects;