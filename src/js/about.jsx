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
import { GreenLeave } from "./new_images/greenleave";
import { WhiteLeave } from "./new_images/whiteleave";

const Button = styled.button`
  background: linear-gradient(86.93deg, #0ea5e9 2.37%, #f43f5e 106.02%);
  border-radius: 10px;
  color: white;
  border: transparent;
  cursor: pointer;
  padding: 15px;
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

const StatItem = ({ count, tag, pos }) => {
  return (
    <div id={pos == 1 ? "statCard2" : "statCard1"}>
      <CountUp end={count} redraw={true} suffix="+">
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span
              id="statNum"
              style={{
                fontWeight: 600,
              }}
              ref={countUpRef}
            />
          </VisibilitySensor>
        )}
      </CountUp>
      <h1 style={{ fontWeight: "400" }}>{tag}</h1>
    </div>
  );
};
function About() {
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
        <div style={{ margin: "10px", marginBottom: "30px" }}>
          <Countdown />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="https://form.typeform.com/to/LveQzGzn" target="_blank">
            <Button>Get notified </Button>
          </a>
        </div>

        <div>
          <p className="body">{about_body}</p>
        </div>

        <h1 className="section-heading" style={{ color: "white" }}>
          numbers of treehackss
        </h1>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <section>
            <div class="set">
              <div>
                <LeaveWrapper>
                  <GreenLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <WhiteLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <GreenLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <WhiteLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <GreenLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <WhiteLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <GreenLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <WhiteLeave />
                </LeaveWrapper>
              </div>
            </div>
            <div class="set set2">
              <div>
                <LeaveWrapper>
                  <WhiteLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <GreenLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <WhiteLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <GreenLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <WhiteLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <GreenLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <WhiteLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <GreenLeave />
                </LeaveWrapper>
              </div>
            </div>
            <div class="set set3">
              <div>
                <LeaveWrapper>
                  <GreenLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <WhiteLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <GreenLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <WhiteLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <GreenLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <WhiteLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <GreenLeave />
                </LeaveWrapper>
              </div>
              <div>
                <LeaveWrapper>
                  <WhiteLeave />
                </LeaveWrapper>
              </div>
            </div>
          </section>
          <div
            style={{
              position: "absolute",
            }}
          >
            <div id="statRow">
              <StatItem count={250000} tag="in prizes and awards" pos={2} />
              <StatItem count={36} tag="hours of hacking" pos={1} />
              <StatItem count={1000} tag="hackers in attendance" pos={2} />
            </div>
            <div id="statRow">
              <StatItem
                count={50}
                tag="universities represented all over the world"
                pos={1}
              />
              <StatItem
                count={100}
                tag="qualified industry-level mentors"
                pos={2}
              />
            </div>
            <div id="statRow">
              <StatItem count={200} tag="projects submitted" pos={1} />
              <StatItem count={20} tag="countries represented" pos={2} />
              <StatItem count={60} tag="companies partnered" pos={1} />
            </div>
          </div>
        </div>

        <div id="wrapper">
          <div id="floatingLeaves">
            {/* <LeaveWrapper style={{ marginLeft: "-180px", marginTop: "-20px" }}>
              <GreenLeave />
            </LeaveWrapper>
            <LeaveWrapper style={{ marginLeft: "790px", marginTop: "120px" }}>
              <WhiteLeave />
            </LeaveWrapper>
            <LeaveWrapper style={{ marginLeft: "10px", marginTop: "-20px" }}>
              <GreenLeave />
            </LeaveWrapper> */}
          </div>

          <div id="statWrapper">
            {/* <div id="statRow">
              <StatItem count={250000} tag="in prizes and awards" pos={2} />
              <StatItem count={36} tag="hours of hacking" pos={1} />
              <StatItem count={1000} tag="hackers in attendance" pos={2} />
            </div>
            <div id="statRow">
              <StatItem
                count={50}
                tag="universities represented all over the world"
                pos={1}
              />
              <StatItem
                count={100}
                tag="qualified industry-level mentors"
                pos={2}
              />
            </div>
            <div id="statRow">
              <StatItem count={200} tag="projects submitted" pos={1} />
              <StatItem count={20} tag="countries represented" pos={2} />
              <StatItem count={60} tag="companies partnered" pos={1} />
            </div> */}
          </div>
        </div>

        {/* <h1
          className="section-heading"
          style={{ color: "white", marginTop: "100px", position: "fixed" }}
        >
          why treehacks?
        </h1> */}

        {/* <div className="about-video">
          <ReactPlayer
            controls="true"
            url={videoURL}
            height="100%"
            width="100%"
          />
        </div> */}
      </div>
    </div>
  );
}

export default About;
