import React from "react";
import moment from "moment-timezone";
import "../styles/index.scss";
import IndexHead from "../components/IndexHead";
import Projects from "../components/projects";
import Router from "next/router";
import withGA from "next-ga";

function Home() {
  const date = moment.utc(new Date(), true);
  const de = date.tz("Europe/Berlin").format("LT z");
  const ny = date.tz("America/New_York").format("LT z");
  const la = date.tz("America/Los_Angeles").format("LT z");

  return (
    <div className="wrapper">
      <IndexHead />
      <div className="lettering">
        <picture>
          <source
            srcSet="/static/chrome.png"
            alt="lettering"
            media="(min-width: 1024px)"
          />
          <img
            src="/static/mono.png"
            alt="lettering"
            onLoad={console.log("image loaded")}
          />
        </picture>
      </div>
      <h2>
        Hello, I&rsquo;m Joseph. I'm a developer living in Berlin, Germany. I'm
        currently working at{" "}
        <a href="http://www.visualmeta.com" target="_blank">
          Visual Meta GmbH (DE).
        </a>
      </h2>
      <h2>
        I most recently worked at{" "}
        <a href="http://lateral.io" target="_blank">
          Lateral GmbH (DE)
        </a>
        , a Machine Learning start up, and CODE AND THEORY (NY), a digital
        agency.
      </h2>
      <Projects />
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

export default withGA("UA-71907935-2", Router)(Home);
