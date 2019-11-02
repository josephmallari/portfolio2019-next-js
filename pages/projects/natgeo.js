import React from "react";

function NatGeo() {
  return (
    <div className="project">
      <div className="project__header">
        <h5>
          Agency: <span>Code and Theory</span>
        </h5>
        <h5>
          Technologies: <span>React, CSS, Drupal, HTML5, Javascript</span>
        </h5>
      </div>
      <div className="project__info">
        <div className="project__left">
          <video
            src="/static/NG.mov"
            preload="true"
            muted
            autoPlay
            loop
          ></video>
        </div>
        <div className="project__right">
          <p>
            One of two Front-End Engineers who built National Geographics's
            multisite. The site was broken down into components with React and
            had appealing animations. The Back-End was built with Drupal. Other
            tasks involved binding the Front-End and Back-End with twig.
          </p>
          <a href="https://www.nationalgeographic.com/">Visit site</a>
        </div>
      </div>
    </div>
  );
}

export default NatGeo;
