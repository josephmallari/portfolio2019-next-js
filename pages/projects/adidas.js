import React from "react";

function Adidas() {
  return (
    <div className="project">
      <div className="project__header">
        <h5>Agency: Code and Theory</h5>
        <h5>Technologies: Javascript, HTML, CSS, PHP</h5>
      </div>
      <div className="project__info">
        <div className="project__left">
          <video
            src="/static/raf2.mov"
            preload="true"
            muted
            autoPlay
            loop
          ></video>
        </div>
        <div className="project__right">
          <p>
            Built the Raf Simons micro-site. It features a nice design and
            assets. I built the site from scratch and handled all the animations
            with plain Javascript. These involved the scroll parallax effect and
            the image rotation.
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

export default Adidas;
