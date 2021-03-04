import React from "react";

const ProjectCard = ({ title, subTitle, link, picture }) => {
  return (
    <div className="home-projects__card">
      <div className="card__image-box">
        <img src={picture} alt="project" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title} </h3>
        <p className="card__text">{subTitle} </p>
        <p className="card__link">{link} </p>
      </div>
    </div>
  );
};

export default ProjectCard;
