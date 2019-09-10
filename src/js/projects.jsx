import React from 'react';
import {projects} from './content.json';

function Projects() {
  return(
    <div id="projects" className="container">
      <h1 className="section-heading">Past Projects</h1>
      <Grid />
    </div>
  );
}

class Grid extends React.Component {
  render() {
    return (
      <div id="projects-grid">
        {projects.map(function (project, i){
          return <GridItem title={project.title} text={project.description}/>;
        })}
      </div>
    );
  }
}

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  mouseOver() {
    this.setState({hover: true});
  }

  mouseOut() {
    this.setState({hover: false});
  }

  render() {
    var label = this.props.title;
    var textClass = "title";
    if (this.state.hover) {
      label = this.props.text;
      textClass = "text";
    }
    return(
      <div className="grid-item" onMouseOver={() => this.mouseOver()} onMouseOut={() => this.mouseOut()}>
        <p className={textClass}>{label}</p>
      </div>
    );
  }
}

export default Projects;
