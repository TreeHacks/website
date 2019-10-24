import React from 'react';
import { projects } from './content.json';

const PROJECT_INTERVAL = 15000;
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
      {/* <div className="stripe-wrapper"><div className="stripe accent-pink" /></div> */}
    </div>
  );
}

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.projects = mapColors();
    this.state = { index: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setIndex(this.state.index + 1);
    }, PROJECT_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setIndex = i => {
    const { length } = this.projects;
    this.setState({ index: (i % length + length) % length });
  }

  render() {
    const { projects, setIndex, state } = this;
    return (
      <div>
        <Selector projects={projects} set={(i) => setIndex(i)} selected={state.index} />
        <Carousel projects={projects} set={(i) => setIndex(i)} selected={state.index} />
      </div>
    );
  }
}

function Selector(props) {
  const { projects, set, selected } = props;
  return (
    <div id="project-selector">
      {projects.map((project, i) =>
        <div
          className="selection-item"
          key={project.title}
          style={{ backgroundColor: (i === selected ? '#EE3670' : '#FBCDCD') }}
          onClick={() => set(i)}
        />
      )}
    </div>
  );
}

function Carousel(props) {
  const { projects, set, selected } = props;
  const left_project = projects[(selected - 1 + projects.length) % projects.length];
  const curr_project = projects[selected];
  const right_project = projects[(selected + 1) % projects.length];

  return (
    <div id="project-carousel">
      <div class="left" style={{ backgroundColor: left_project.color }}>{left_project.title}</div>
      <div class="main" style={{ backgroundColor: curr_project.color }}>{curr_project.title}</div>
      <div class="right" style={{ backgroundColor: right_project.color }}>{right_project.title}</div>
    </div>
  );
}

export default Projects;