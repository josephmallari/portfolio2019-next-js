import React, { useState } from "react";
import NatGeo from "../pages/projects/natgeo";
import Adidas from "../pages/projects/adidas";

function projects() {
  const [visible, setVisible] = useState(false);

  const projectNames = [
    { project: "national geographic", component: <NatGeo /> },
    { project: "adidas originals", component: <Adidas /> },
    { project: "the lot radio", component: "" },
    { project: "council foreign relations", component: "" },
    { project: "the fader", component: "" },
    { project: "new york life", component: "" },
    { project: "american chemistry society", component: "" },
    { project: "more", component: "" }
  ];

  const projectsMarkup = projectNames.map((project, i) => {
    if (i === 8) {
      return (
        <li key={i}>
          <div className="project__text">
            <span>+</span>
            {project.project}
          </div>
        </li>
      );
    }

    let visibleClass = visible ? "project--visible" : "project--hidden";

    return (
      <li key={i} onClick={() => setVisible(!visible)} className={visibleClass}>
        <div className="project__text">
          <span>0{i + 1}</span>
          {project.project}
        </div>
        {/* <div className="project__component">{project.component}</div> */}
        <style jsx>{``}</style>
      </li>
    );
  });

  return (
    <div className="projects">
      <div className="projects__header">Some projects I've worked on:</div>
      <ul>{projectsMarkup}</ul>
    </div>
  );
}

export default projects;
