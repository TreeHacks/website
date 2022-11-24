import React from "react";
import { projects, project_body } from "./content.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LOGO from "./new_images/LOGO.png";
import smalllogo from "./new_images/white-logo.png";

// import tree from "../svg/alternate-tree.svg"
// import eye from "../svg/eye.svg"
import woman from "../svg/woman.svg";

// const PROJECT_INTERVAL = 2500;
const colors = ["#15766A", "#15766A", "#15766A"];

function makeColors() {
  var arr = [];
  while (arr.length < colors.length && arr.length != projects.length) {
    var r = Math.floor(Math.random() * projects.length);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

function Projects() {
  return (
    <div id="projects" className="container">
      {/* <div className="stripe accent-blue" /> */}
      {/* <div className="floating-illustration laptop">
        <img src={woman} />
      </div> */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5%",
        }}
      >
        <div id="text-container">
          <div>
            <h1 className="section-heading">
              the <span id="hook-text">power</span> of treehacks
            </h1>
          </div>

          <div>
            <p className="body">{project_body}</p>
          </div>
        </div>

        <div id="project-container">
          {projects.map((project, i) => {
            return (
              <ProjectCard
                color={i % 2 == 0 ? "dark" : "light"}
                frontText={project.award}
                title={project.title}
                url={project.url}
                path={project.path}
                description={project.description}
                name={"check it out here"}
              />
            );
          })}
        </div>
      </div>
      {/* <ProjectSlider /> */}

      {/* <div className="stripe-wrapper"> */}
      {/* <div className="stripe accent-pink" /> */}
      {/* </div> */}
    </div>
  );
}

class ProjectSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arr: [], width: 0 };
  }

  componentWillMount() {
    this.setState({ arr: makeColors() });
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    var numSlides = 3;
    if (window.innerWidth < 750) {
      numSlides = 1;
    }
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: numSlides,
      swipeToSlide: true,
      focusOnSelect: true,
      speed: 500,
    };
    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {projects.map((project, i) => {
            const color = colors[i % 3];
            return (
              <GridItem
                color={color}
                title={project.title}
                text={project.description}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

class GridItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        key={this.props.title}
        className="grid-item"
        style={{ backgroundColor: this.props.color }}
        onClick={this.props.onClick}
      >
        <p className="title">{this.props.title}</p>
        <p className="text">{this.props.text}</p>
      </div>
    );
  }
}

const ProjectCard = ({
  color,
  frontText,
  title,
  description,
  name,
  url,
  path,
}) => {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div
          class="flip-card-front"
          style={{
            backgroundColor: color == "dark" ? "#2A2E35" : "#10B981",
          }}
        >
          <h1>{frontText}</h1>
          <img
            src={smalllogo}
            id="projectImage"
            style={{ width: "80px" }}
            alt="treehacks small logo"
          />
        </div>
        <div class="flip-card-back">
          <h1>{title}</h1>
          <p>{description}</p>
          <br />
          <a href={url} target="_blank">
            <p style={{ color: "white", textDecoration: "underline" }}>
              {name}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
