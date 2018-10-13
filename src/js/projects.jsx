import React from 'react';
import {projects} from './content.json';

function Projects() {
  return(
    <div id="projects" className="container">
      <h1 className="section-heading">Past Projects</h1>
      <Slider />
    </div>
  );
}

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    }
    this.changeSlide = this.changeSlide.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeSlide(1), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeSlide(direction) {
    clearInterval(this.interval);
    this.interval = setInterval(() => this.changeSlide(1), 5000);
    this.setState({current: this.state.current + direction});
  }

  render() {
    let length = projects.length;
    let current = ((this.state.current % length) + length) % length;
    let left = (current === 0) ? length - 1: current - 1;
    let right = (current === length - 1) ? 0 : current + 1;
    return (
      <div className="slider-container">
        <div id="slider">
          <div
            className="left"
            style={{backgroundImage: 'url(' + projects[left].path + ')'}}
            alt={projects[left].alt}
            onClick={(e) => this.changeSlide(-1, e)}></div>
          <div
            className="current"
            style={{backgroundImage: 'url(' + projects[current].path + ')'}}
            alt={projects[current].alt}></div>
          <div
            className="right"
            style={{backgroundImage: 'url(' + projects[right].path + ')'}}
            alt={projects[right].alt}
            onClick={(e) => this.changeSlide(1, e)}></div>
        </div>
        <h1>{projects[current].title}</h1>
        <p>{projects[current].description}</p>
      </div>
    );
  }
}

export default Projects;
