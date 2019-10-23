import React from "react";
import ReactPlayer from "react-player";
import { about_intro } from "./content.json";
import { about_body } from "./content.json";
import drone from "../svg/drone.svg"
import clouds from "../svg/clouds.svg"
import relax from "../svg/relax.svg"
import Countdown from "./countdown.jsx";

function About() {
  let videoURL = "https://player.vimeo.com/video/368159554";
  return (
    <div id="about">
      <div className="floating-illustration drone"><img src={drone} /></div>
      <div className="floating-illustration clouds"><img src={clouds} /></div>
      <div className="container">
        <div>
          <p className="intro">{about_intro}</p>
        </div>
        <Countdown />
        <div>
          <p className="body">{about_body}</p>
        </div>
        <div className="about-video">
          <ReactPlayer url={videoURL} height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default About;
