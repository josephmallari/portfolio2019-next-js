import React, { useState, useRef } from "react";
import NatGeo from "../pages/projects/natgeo";
import Adidas from "../pages/projects/adidas";
import TheLot from "../pages/projects/lot";
import Cfr from "../pages/projects/cfr";
import Fader from "../pages/projects/fader";
import Nyl from "../pages/projects/nyl";
import Acs from "../pages/projects/acs";
import { Transition } from "react-transition-group";

function Project(props) {
  const { project, i } = props;
  const [inProp, setInProp] = useState(false);
  let visibleClass = inProp ? "project--visible" : "project--hidden";

  const defaultStyle = {
    transition: "max-height .5s ease-in-out",
    maxHeight: 0,
    overflow: "hidden"
  };

  const transitionStyles = {
    entering: { maxHeight: "550px" },
    entered: { maxHeight: "550px" },
    exiting: { maxHeight: 0 },
    exited: { maxHeight: 0 }
  };

  return (
    <li
      key={i}
      onClick={e => {
        setInProp(!inProp);
      }}
      className={visibleClass}
    >
      <div className="project__text">
        <span>0{i + 1}</span>
        {project.project}
      </div>
      <Transition in={inProp} timeout={500}>
        {state => (
          <div
            className="project__component"
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            {project.component}
          </div>
        )}
      </Transition>
      <style jsx>{``}</style>
    </li>
  );
}

function Projects() {
  const projectNames = [
    { project: "national geographic", component: <NatGeo /> },
    { project: "adidas originals", component: <Adidas /> },
    { project: "the lot radio", component: <TheLot /> },
    { project: "council foreign relations", component: <Cfr /> },
    { project: "the fader", component: <Fader /> },
    { project: "new york life", component: <Nyl /> },
    { project: "american chemistry society", component: <Acs /> },
    { project: "+ more", component: "" }
  ];

  const projectsMarkup = projectNames.map((project, i) => {
    return <Project project={project} i={i} key={i} />;
  });

  return (
    <div className="projects">
      <div className="projects__header">Some projects I've worked on:</div>
      <ul>{projectsMarkup}</ul>
    </div>
  );
}

export default Projects;
