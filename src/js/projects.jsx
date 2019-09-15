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
    var colors = ["#A7DDE8", "#E51B5D", "#F46E20"]
    var colorsUsed = []
    return (
      <div id="projects-grid">
        {projects.map(function (project, i){
          var color = colors[Math.round(Math.random() * 2)];
          if (!colorsUsed.includes(color)) {
            colorsUsed.push(color);
          }
          if (i >= projects.length - 2) {
            if (colorsUsed.length < 3) {
              var colorsNeeded = colors.filter(function(i) {return colorsUsed.indexOf(i) < 0;});
              color = colorsNeeded[0];
            }
          }
          return <GridItem color={color} title={project.title} text={project.description}/>;
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
      <div key={this.props.title} className="grid-item"
           style={{backgroundColor: this.props.color}}
           onMouseOver={() => this.mouseOver()}
           onMouseOut={() => this.mouseOut()}>
        <p className={textClass}>{label}</p>
      </div>
    );
  }
}

export default Projects;
