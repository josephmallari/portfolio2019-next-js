import React from "react";

function TheLot() {
  return (
    <div className="project">
      <div className="project__info">
        <div className="project__left">
        <h5>
          Technologies: <span>React, CSS, Javascript, JSON, Digital Ocean</span>
        </h5>
        <video
            src="/static/lot.mov"
            preload="true"
            muted
            autoPlay
            loop
          ></video>
        </div>
        <div className="project__right">
          <p>
            Built The Lot Photo's portfolio site. Worked with beautiful assets
            provided by New York based photographer Daniel Dorsa and designer
            Adam Ridgeway. Built with React and used React CSS transition
            groups.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TheLot;
