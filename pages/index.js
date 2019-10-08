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
              <span>02</span>adidas originals
            </div>
          </li>
          <li>
            <div className="project__text">
              <span>03</span>The Lot Radio
            </div>
          </li>
          <li>
            <div className="project__text">
              <span>04</span>american express
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
              <span>08</span>American Chemistry Society
            </div>
          </li>
          <li>
            <div className="project__text">
              <span>+</span>more
            </div>
          </li>
        </ul>
      </div>
      <div className="contact">
        <ul>
          <li>
            <a href="mailto:joseph.mallari48@gmail.com" target="_blank">
              email
            </a>
          </li>
          <li>
            <a href="http://www.github.com/josephmallari" target="_blank">
              github
            </a>
          </li>
          <br />
          <li>
            <a href="http://www.instagram.com/josephmallari" target="_blank">
              instagram
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/in/josephmallari" target="_blank">
              linkedin
            </a>
          </li>
        </ul>
      </div>
      <footer>
        <span>
          Lettering by{" "}
          <a href="http://www.austinredman.com" target="_blank">
            Austin Redman
          </a>
        </span>
        <span>
          Design by{" "}
          <a href="http://willieip.me" target="_blank">
            Willie Ip
          </a>
        </span>
        <span>DE {de}</span>
        <span>NY {ny}</span>
        <span>LA {la}</span>
      </footer>
    </div>
  );
}

export default Home;
