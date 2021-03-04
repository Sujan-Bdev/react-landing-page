import React from "react";
import { Row, Col } from "antd";
import ProjectCard from "components/ProjectCard";

import project1 from "assets/img/projects/project-1.png";
import project2 from "assets/img/projects/project-2.png";
import project3 from "assets/img/projects/project-3.png";

const Projects = () => {
  return (
    <div className="home-projects">
      <div className="container">
        <div className="section__title">
          <h2>Projects</h2>
        </div>

        <div className="card__container">
          <ProjectCard
            title="All You Need to Start"
            subTitle="Add WooCommerce plugin to any WordPress site and set up a new store in minutes."
            link="Ecommerce for Wordpress ›"
            picture={project1}
          />

          <ProjectCard
            title="All You Need to Start"
            subTitle="Add WooCommerce plugin to any WordPress site and set up a new store in minutes."
            link="Ecommerce for Wordpress ›"
            picture={project2}
          />

          <ProjectCard
            title="All You Need to Start"
            subTitle="Add WooCommerce plugin to any WordPress site and set up a new store in minutes."
            link="Ecommerce for Wordpress ›"
            picture={project3}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
