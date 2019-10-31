import React from "react";

function NatGeo() {
  return (
    <div className="project">
      <div className="project__header">
        <h5>Agency: Code and Theory</h5>
        <h5>Technologies: React, CSS, Drupal, HTML5, Javascript</h5>
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
        </div>
      </div>
      <style jsx>
        {`
          .project {
            margin-bottom: 30px;
          }
          .project__header {
            display: flex;
            flex-direction: row;
            margin-bottom: 25px;
          }

          h5 {
            flex-grow: 1;
            margin: 0;
            font-weight: 300;
          }

          .project__info {
            display: flex;
          }

          .project__left {
            flex-grow: 1;
          }

          .project__right {
            flex-grow: 1;
            position: relative;
          }

          video {
            height: auto;
            width: 500px;
          }

          h4 {
            font-size: 45px;
          }

          h5 {
            font-size: 25px;
          }

          p {
            margin: 0 0 0 20px;
            font-size: 22px;
            line-height: 28px;
          }
        `}
      </style>
    </div>
  );
}

export default NatGeo;
