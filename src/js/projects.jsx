import React from 'react';
import { projects } from './content.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import tree from "../svg/alternate-tree.svg"
// import eye from "../svg/eye.svg"

// const PROJECT_INTERVAL = 2500;
const colors = ["#A7DDE8", "#E51B5D", "#F46E20"];

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
      <div className="stripe accent-blue" />
      {/*
      <div className="floating-illustration tree"><img src={tree} /></div>
      <div className="floating-illustration eye"><img src={eye} /></div>
      */}
      <h1 className="section-heading">Past Projects</h1>
      <ProjectSlider />
      <div className="stripe-wrapper"><div className="stripe accent-pink" /></div>
    </div>
  );
}

class ProjectSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arr: [] };
  }

  componentWillMount() {
    this.setState({ arr: makeColors() });
  }

  componentDidMount() {
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <Slider {...settings}>
          {projects.map((project, i) => {
            const color = colors[i % 3];
            return <GridItem color={color} title={project.title} text={project.description} />;
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
      <div key={this.props.title} className="grid-item"
        style={{ backgroundColor: this.props.color }}>
        <p className="title">{this.props.title}</p>
        <p className="text">{this.props.text}</p>
      </div>
    );
  }
}

export default Projects;
