import React, { useState } from "react";
import { Transition } from "react-transition-group";
import NatGeo from "./projects/natgeo";
import moment from "moment-timezone";
import "../styles/index.scss";

function Home() {
  const [inProp, setInProp] = useState(false);
  const [visible, setVisible] = useState(false);

  const date = moment.utc(new Date(), true);
  const de = date.tz("Europe/Berlin").format("LT z");
  const ny = date.tz("America/New_York").format("LT z");
  const la = date.tz("America/Los_Angeles").format("LT z");

  return (
    <div>
      <Transition in={inProp} timeout={500}>
        {state =>
          // ...
          console.log(state)
        }
      </Transition>
      <div className="lettering">
        <img src="/static/chrome.png" alt="lettering" />
      </div>
      <header>
        Hello, I'm Joseph. I'm a developer based in Berlin, Germany. I
        previously worked at Lateral GmbH (DE), and CODE AND THEORY (NY).
      </header>
      <div className="projects">
        <div className="projects__header">Projects I've worked on:</div>
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
          <br />
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
        <span>DE {de}</span>
        <span>NY {ny}</span>
        <span>LA {la}</span>
      </footer>
    </div>
  );
}

export default Home;
