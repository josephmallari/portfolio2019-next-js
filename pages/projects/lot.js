import React from "react";

function TheLot() {
  return (
    <div className="project">
      <div className="project__header">
        <h5>Agency: Code and Theory</h5>
        <h5>Technologies: CSS, HTML5, Javascript, jQuery, Drupal</h5>
      </div>
      <div className="project__info">
        <div className="project__left">
          left
          {/* <video
            src="/static/NG.mov"
            preload="true"
            muted
            autoPlay
            loop
          ></video> */}
        </div>
        <div className="project__right">
          <p>
            One of two Front-End Engineers who built Nat Geo's multi site. The
            site was broken down into components with React and had appealing
            animations. The Back-End was done with Drupal and also helped
            binding the Front-End and Back-End with Twig.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TheLot;
