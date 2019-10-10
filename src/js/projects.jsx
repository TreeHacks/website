import React from 'react';
import { projects } from './content.json';

const PROJECT_INTERVAL = 2500;

function Projects() {
  return (
    <div id="projects" className="container">
      <div className="stripe accent-blue"/>
      <h1 className="section-heading">Past Projects</h1>
      <Grid />
      <div className="stripe-wrapper"><div className="stripe accent-pink"/></div>
    </div>
  );
}

const colors = ["#A7DDE8", "#E51B5D", "#F46E20"];

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arr: [] };
  }

  makeColors() {
    var arr = [];
    while (arr.length < colors.length && arr.length != projects.length) {
      var r = Math.floor(Math.random() * projects.length);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    this.setState({ arr });
  }

  componentWillMount() {
    this.makeColors();
  }

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   this.makeColors();
    // }, PROJECT_INTERVAL);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    return (
      <div id="projects-grid">
        {projects.map((project, i) => {
          const color = (this.state.arr.indexOf(i) !== -1) ? colors[this.state.arr.indexOf(i)] : colors[Math.round(Math.random() * 2)];
          return <GridItem color={color} title={project.title} text={project.description} />;
        })}
      </div>
    );
  }
}

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  mouseOver() {
    this.setState({ hover: true });
  }

  mouseOut() {
    this.setState({ hover: false });
  }

  render() {
    var label = this.props.title;
    var textClass = "title";
    if (this.state.hover) {
      label = this.props.text;
      textClass = "text";
    }
    return (
      <div key={this.props.title} className="grid-item"
        style={{ backgroundColor: this.props.color }}
        onMouseOver={() => this.mouseOver()}
        onMouseOut={() => this.mouseOut()}>
        <p className={textClass}>{label}</p>
      </div>
    );
  }
}

export default Projects;
