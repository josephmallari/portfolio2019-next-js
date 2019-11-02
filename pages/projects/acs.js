import React from "react";

function Acs() {
  return (
    <div className="project">
      <div className="project__header">
        <h5>
          Agency: <span>Code and Theory</span>
        </h5>
        <h5>
          Technologies: <span>HTML5, CSS, SASS, Drupal, Twig, Javascript</span>
        </h5>
      </div>
      <div className="project__info left-empty">
        <div className="project__right">
          <p>
            Worked with a cross functional team to build American Chemistry
            Society's Front-End.
          </p>
          <a href="https://www.acs.org/content/acs/en.html" target="_blank">
            Visit site
          </a>
        </div>
      </div>
    </div>
  );
}

export default Acs;
