import React from "react";
import ProjectWrapper from "../../UI/ProjectWrapper";
import "./Project.scss";
import movieDBScreen from "../../UI/Image/moviedbScreen.png";
import travelScreen from "../../UI/Image/projet-Travel.png";
import formFilterList from "../../UI/Image/form-screen.png";
import jumpMan from "../../UI/Image/jumpMan.png";

const Project = () => {
  return (
    <ProjectWrapper>
      <div id="portofolio" className="project__box project__box--1">
        <img className="project__screen" src={jumpMan} alt="jump-man" />
        <h1 className="project__status">Projects</h1>
        <p className="project__description">
          *All of this projects were made for personnal purpose/training
          <button type="button" className="project__button">
            GitHub
          </button>
        </p>
      </div>
      <div className="project__box project__box--2">
        <div className="project__card project__card--card1">
          <div className="project__container">
            <h2 className="project__title">Movie DB</h2>
            <img
              className="project__screen"
              src={movieDBScreen}
              alt="project-screen"
            />
            <p className="project__description">
              Creation of an app with the API Movie DB: A Top ten rated Movies
              carrousel and a list of popular movies sortable by alphabetic and
              newest/oldest. You can navigate through that list with a infinite
              scroll. The entire App is responsive. I'm using React.Js/HTML/CSS
            </p>

            <button type="button" className="project__button">
              Link
            </button>
          </div>
        </div>
        <div className="project__card project__card--card2">
          <div className="project__container">
            <h2 className="project__title">Project</h2>
            <img
              className="project__screen"
              src={travelScreen}
              alt="project-screen"
            />
            <p className="project__description">
              Un texte est une série orale ou écrite de mots perçus comme
              constituant un ensemble cohérent, porteur de sens et utilisant les
            </p>

            <button type="button" className="project__button">
              Link
            </button>
          </div>
        </div>
        <div className="project__card project__card--card3">
          <div className="project__container">
            <h2 className="project__title">Project</h2>
            <img
              className="project__screen"
              src={formFilterList}
              alt="project-screen"
            />
            <p className="project__description">
              Un texte est une série orale ou écrite de mots perçus comme
              constituant un ensemble cohérent, porteur de sens et utilisant les
            </p>

            <button type="button" className="project__button">
              Link
            </button>
          </div>
        </div>
        <div className="project__card project__card--card4">
          <div className="project__container">
            <h2 className="project__title">Project</h2>
            <img
              className="project__screen"
              src={movieDBScreen}
              alt="project-screen"
            />
            <p className="project__description">
              Un texte est une série orale ou écrite de mots perçus comme
              constituant un ensemble cohérent, porteur de sens et utilisant les
            </p>
            <button type="button" className="project__button">
              Link
            </button>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default Project;
