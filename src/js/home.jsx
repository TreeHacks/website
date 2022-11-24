import React from "react";
import treehacks_text from "../png/treehacks-text.png";
import { home, live_cutoff, ended_cutoff } from "./content.json";
import EmailSignupWidget from "./email-signup-widget.jsx";
import applylaptop from "../svg/laptop.svg";
import styled, { keyframes } from "styled-components";
import { Drone } from "./new_images/drone";
import { Laptop } from "./new_images/laptop";
import { World } from "./new_images/world";
import { VR } from "./new_images/vr";
import { Cloud } from "./new_images/cloud";
import { HooverTower } from "./new_images/hoover";
import LOGO from "./new_images/LOGO.png";

const Button = styled.button`
  background: linear-gradient(86.93deg, #0cb08a 2.37%, #111827 106.02%);
  border-radius: 10px;
  color: white;
  border: transparent;
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
    cursor: pointer;
  }
  transition: 0.2s all;
`;

const SponsorButton = styled.button`
  background: linear-gradient(86.93deg, #0cb08a 2.37%, #111827 106.02%);
  border-radius: 10px;
  color: white;
  border: transparent;
  padding: 15px;
  font-weight: 400;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 20px;
  font-size: 15px;
  &:hover {
    box-shadow: 0px 0px 15px 0px #e4e4e4;
    transform: scale(1.1);
    background-color: #fff;
  }
  transition: 0.2s all;
  cursor: pointer;
  font-family: Poppins;
  width: fit-content;
`;

const SVGBackground = styled.div`
  background: #1f2937;
  padding: 20px;
  height: fit-content;
  border-radius: 50%;
`;

const STATUSES = {
  beforeRegistration: 1,
  registration: 2,
};

const STATUS = STATUSES.registration;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 0,
    };
  }

  componentDidMount() {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (width > 750) {
      this.interval = setInterval(
        () =>
          this.setState({
            phrase: (this.state.phrase + 1) % (home.length - 1),
          }),
        7000
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const hasEnded = Date.now() > new Date(ended_cutoff),
      hasBegun = Date.now() > new Date(live_cutoff);

    return (
      <>
        <div id="home">
          <div id="floatingIcons">
            <SVGBackground style={{ marginLeft: "-25px" }}>
              <Laptop />
            </SVGBackground>
            <SVGBackground
              style={{ position: "absolute", bottom: -170, left: "5%" }}
            >
              <Cloud />
            </SVGBackground>
            <SVGBackground
              style={{ position: "absolute", bottom: 20, left: "45%" }}
            >
              <World />
            </SVGBackground>
            <SVGBackground style={{ marginLeft: "48%", marginTop: "3%" }}>
              <Drone />
            </SVGBackground>
            <SVGBackground
              style={{ position: "absolute", bottom: 150, left: "65%" }}
            >
              <VR />
            </SVGBackground>
            <div
              style={{
                position: "absolute",
                bottom: "-20%",
                left: "85%",
              }}
            >
              <HooverTower />
            </div>

            <div
              style={{
                border: "25px solid #10B981",
                height: "fit-content",
                borderRadius: "50%",
                marginLeft: "70%",
                position: "absolute",
                marginTop: "-10%",
              }}
            >
              <img src={LOGO} id="circleLogo" />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "8%",
              marginLeft: "15%",
              position: "absolute",
              width: "100%",
            }}
          >
            <h1 id="gradient_text" style={{ fontSize: "70px" }}>
              TreeHacks <span id="year-text">2023</span>
            </h1>
            <h1
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: "35px",
                width: "fit-content",
              }}
            >
              <span
                id=""
                style={{
                  fontWeight: "600",
                }}
              >
                Stanford's
              </span>{" "}
              premiere hackathon is back
              <br />
              <span id="">in-person!</span>
            </h1>

            <h1
              style={{
                color: "white",
                fontWeight: "300",
                fontSize: "25px",
                marginTop: "30px",
              }}
            >
              Join more than <span id="">2,000 hackers</span> across the{" "}
              <span id="">world</span>
              <br /> to build the <span id="">next big thing</span>
            </h1>
            <h1
              style={{
                marginTop: "25px",
                fontSize: "20px",
                fontWeight: "600",
                color: "white",
              }}
            >
              February 17th - 19th, 2023 @ Stanford University
            </h1>
            <a
              href="https://form.typeform.com/to/LveQzGzn"
              target="_blank"
              style={{ width: "fit-content" }}
            >
              <Button>Get notified when Applications open</Button>
            </a>

            <SponsorButton>Sponsor TreeHacks</SponsorButton>
          </div>

          {/* <div className="rowC">
            {STATUS === STATUSES.registration && (
              <div className="applylaptop">
                <a href="https://root.treehacks.com">
                  <img src={applylaptop} />
                </a>
              </div>
            )}

            <div className="slide-in-left" id="arm" alt="" />
            <div id="date-text">
              Feb 17-19, 2023
              <br /> Hacker applications will open in December
              <br />
              Stanford&nbsp;University
              {STATUS === STATUSES.registration && (
                <a href="https://root.treehacks.com" className="apply-button">
                  apply now
                </a>
              )}
              {STATUS === STATUSES.beforeRegistration && <EmailSignupWidget />}
            </div>
          </div> */}
        </div>
      </>
    );
  }
}

export default Home;
