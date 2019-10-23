import React from 'react';
import { projects } from './content.json';

// const PROJECT_INTERVAL = 2500;
const COLORS = ["#A7DDE8", "#E51B5D", "#F46E20"];

function mapColors() {
  var arr = [];
  while (arr.length < COLORS.length && arr.length !== projects.length) {
    var r = Math.floor(Math.random() * projects.length);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return projects.map((project, index) => {
    const i = arr.indexOf(index);
    return (
      {
        ...project,
        color: (i !== -1) ? COLORS[i] : COLORS[Math.round(Math.random() * (COLORS.length - 1))]
      }
    )
  });
}


function Projects() {
  return (
    <div id="projects" className="container">
      <div className="stripe accent-blue" />
      <h1 className="section-heading">Past Projects</h1>
      <Slider />
      <div className="stripe-wrapper"><div className="stripe accent-pink" /></div>
    </div>
  );
}

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.projects = mapColors();
    this.state = { index: 0 };
  }

  setIndex(i) {
    this.setState({ index: i % this.projects.length });
  }

  render() {
    console.log(this.state.index);
    return (
      <div>
        <Selector />
        <Viewer />
      </div>
    );
  }
}

function Selector(props) {
  return null;
}

function Viewer(props) {
  return null;
}

export default Projects;