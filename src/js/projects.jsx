import React from 'react';
import { projects } from './content.json';

const PROJECT_INTERVAL = 15000;
const COLORS = shuffleArray(["#96D9E5", "#E51B5D", "#F46E20"]);

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
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
    const { length } = projects;
    this.setState({ index: (i % length + length) % length });
  }

  render() {
    const { setIndex, state } = this;
    return (
      <div className="project-slider">
        <Selector set={(i) => setIndex(i)} selected={state.index} />
        <Carousel set={(i) => setIndex(i)} selected={state.index} />
      </div>
    );
  }
}

function Selector(props) {
  const { set, selected } = props;
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
  const { set, selected } = props;
  const left_project = projects[(selected - 1 + projects.length) % projects.length];
  const curr_project = projects[selected];
  const right_project = projects[(selected + 1) % projects.length];
  const left_color = COLORS[(selected - 1 + COLORS.length) % COLORS.length];
  const curr_color = COLORS[selected % COLORS.length];
  const right_color = COLORS[(selected + 1) % COLORS.length];

  return (
    <div id="project-carousel" >
      <CarouselItem pos="left" color={left_color} onClick={() => set(selected - 1)}>
        <h1>{left_project.title}</h1>
      </CarouselItem>
      <CarouselItem pos="main" color={curr_color} >
        <h1>{curr_project.title}</h1>
        <p>{curr_project.description}</p>
      </CarouselItem>
      <CarouselItem pos="right" color={right_color} onClick={() => set(selected + 1)}>
        <h1>{right_project.title}</h1>
      </CarouselItem>
    </div >
  );
}

function CarouselItem(props) {
  const { onClick, pos, color, children } = props;
  return <div onClick={onClick} class={`carousel-item ${pos}`} style={{ backgroundColor: color }}>{children}</ div>
}

export default Projects;