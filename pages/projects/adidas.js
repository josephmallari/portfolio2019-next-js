import React from "react";

function Adidas() {
  return (
    <div className="project">
      <div className="project__header">
        <h5>
          Agency: <span>Code and Theory</span>
        </h5>
        <h5>
          Technologies: <span>Javascript, HTML, CSS, PHP</span>
        </h5>
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
          <a href="https://www.adidas.de/rafsimons">Visit site</a>
        </div>
      </div>
    </div>
  );
}

export default Adidas;
