import React from "react";

function Cfr() {
  return (
    <div className="project">
      <div className="project__header">
        <h5>
          Agency: <span>Code and Theory</span>
        </h5>

        <h5>
          Technologies:{" "}
          <span>HTML5, Javascript, jQuery, Drupal, Twig, EJS</span>
        </h5>
      </div>
      <div className="project__info left-empty">
        <div className="project__right">
          <p>
            Part of the Front-End team who built the Council Foreign Relations
            website.
          </p>
          <a href="https://www.cfr.org/" target="_blank">
            Visit site
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cfr;
