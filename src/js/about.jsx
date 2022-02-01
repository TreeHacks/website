/**
 * Component containing information about TreeHacks such as
 * the countdowns to the application deadlines, video, etc.
 * @module About
 */

// Import react packages
import React from "react";
import ReactPlayer from "react-player";

// Import custom react components
import Countdown from "./countdown.jsx";

// Import content
import { about_intro } from "./content.json";
import { about_body } from "./content.json";
// import clouds from "../svg/clouds.svg";
import hoover from "../svg/hoover.svg";

/**
 * About component containing:
 * - Hoover tower svg
 * - Information about TreeHacks
 * - Countdowns to application deadlines
 * - Video about TreeHacks
 * @returns {HTMLDivElement} HTML `div` tag containing the about components
 * @see module:Countdown
 */
function About() {
  // TreeHacks Vimeo URL
  let videoURL = "https://player.vimeo.com/video/391854507";
  return (
    <div id="about">
      <div className="hoover">
        <img src={hoover} />
      </div>
      <div className="container">
        <div>
          <p className="intro">{about_intro}</p>
        </div>
        <Countdown />
        <div>
          <p className="body">{about_body}</p>
        </div>

        <div className="about-video">
          <ReactPlayer controls="true" url={videoURL} height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
}

// Export the About component
export default About;
