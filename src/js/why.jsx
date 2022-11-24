import React from "react";
import ReactPlayer from "react-player";
import { about_intro } from "./content.json";
import { about_body } from "./content.json";
// import clouds from "../svg/clouds.svg";
import hoover from "../svg/hoover.svg";
import Countdown from "./countdown.jsx";
import CountUp, { useCountUp } from "react-countup";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";
import { GreenLeave } from "./greenleave";
import { WhiteLeave } from "./whiteleave";

const Button = styled.button`
  background: linear-gradient(86.93deg, #0ea5e9 2.37%, #f43f5e 106.02%);
  border-radius: 10px;
  color: white;
  border: transparent;
  cursor: pointer;
  border: 2px solid white;
  padding: 10px;
  font-size: 15px;
  font-weight: 400;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 20px;
  font-family: Poppins;
  width: fit-content;
  &:hover {
    box-shadow: 0px 0px 15px 0px #e4e4e4;
    transform: scale(1.1);
    background-color: #fff;
  }
  transition: 0.2s all;
`;

const LeaveWrapper = styled.div`
  transform: rotate(-70deg);
  height: fit-content;
`;

const StatDiv = styled.div`
  &:hover {
    box-shadow: 0px 0px 15px 0px #e4e4e4;
    transform: scale(1.1);
    background-color: #fff;
    cursor: pointer;
  }
  width: "400px;
  transition: 0.2s all;
`;

function Why() {
  let videoURL = "https://player.vimeo.com/video/391854507";
  return (
    <div id="why">
      <div className="container">
        {/* <video width="100%" height="auto" controls>
          <source src="../videos/treehacksvideo.mp4" type="video/mp4" />
        </video> 
       */}

        <div id="videocontainer">
          <ReactPlayer
            url="../videos/treehacksvideo.mp4"
            height="100%"
            width="100%"
            loop="true"
            playing="true"
            muted="true"
          />

          <div id="overlaycontainer">
            <h1>We are back in person!</h1>
            <h1>
              Come enjoy the spirit of hacking on Stanford's beautiful campus.
            </h1>
          </div>
        </div>

        <h1
          className="section-heading"
          style={{ color: "white", marginTop: "100px" }}
        >
          why treehacks section
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid white",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {/* <div style={{ border: "1px solid yellow", display: "flex" }}>
            <h1>erghe orgehor gerhgo e egorr</h1>
          </div>

          <div style={{ border: "1px solid yellow" }}>
            <h1>erghe orgehor gerhgo e egorr</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Why;
