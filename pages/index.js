import React, { useState } from "react";
import { Transition } from "react-transition-group";
import NatGeo from "./projects/natgeo";
import "../styles/index.scss";

function Home() {
  const [inProp, setInProp] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Transition in={inProp} timeout={500}>
        {state =>
          // ...
          console.log(state)
        }
      </Transition>
      <div className="lettering">
        <img src="/static/lettering.png" alt="lettering" />
      </div>
      <div>
        Hello, I'm Joseph. I'm a developer based in Berlin, Germany. I
        previously worked at Lateral GmbH (DE), and CODE AND THEORY (NY)
      </div>
      <div className="projects">
        <div>Projects</div>
        <ul>
          <li>
            <div className="project__text">
              <span>01</span>National Geographic
            </div>
          </li>
          <li>
            <div className="project__text">
              <span>02</span>American Chemistry Society
            </div>
          </li>
          <li>
            <div className="project__text">
              <span>03</span>Adidas
            </div>
          </li>
          <li>
            <div className="project__text">
              <span>04</span>Amex
            </div>
          </li>
          <li>
            <div className="project__text">
              <span>05</span>Council Foregin Relations
            </div>
          </li>
          <li>
            <div className="project__text">
              <span>06</span>The Fader
            </div>
          </li>
          <li>
            <div className="project__text">
              <span>07</span>New York Life
            </div>
          </li>
          <li>
            <div className="project__text">
              <span>08</span>The Lot Radio
            </div>
          </li>
        </ul>
      </div>
      <div className="contact">
        <ul>
          <li>
            <a>email</a>
          </li>
          <li>
            <a>github</a>
          </li>
          <li>
            <a>instagram</a>
          </li>
          <li>
            <a>linkedin</a>
          </li>
        </ul>
      </div>
      <footer>
        <span>Lettering by Austin Redman</span>
        <span>Design by Willie Ip</span>
        <span>Berlin Time</span>
        <span>NY Time</span>
        <span>LA Time</span>
      </footer>
    </div>
  );
}

export default Home;
