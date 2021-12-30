/**
 * Component containing a showcase of some of the past TreeHacks projects
 * @module Projects
 */

// Import react packages
import React from "react";
import Slider from "react-slick";

// Import content
import { projects } from "./content.json";
// import eye from "../svg/eye.svg"
import woman from "../svg/woman.svg";
// import tree from "../svg/alternate-tree.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * @constant {Array<String>} colors
 * Array of three colors to use for the project grid items
 */
const colors = ["#15766A", "#15766A", "#15766A"];

/**
 * Randomly selects colors from the `colors` array
 * @returns {Array<Number>} Array of numbers to be used as colors
 */
function makeColors() {
  var arr = [];
  while (arr.length < colors.length && arr.length != projects.length) {
    var r = Math.floor(Math.random() * projects.length);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

/**
 * GridItem component containing a single project grid item
 * @class
 */
class GridItem extends React.Component {
  /**
   * GridItem component constructor
   * @constructor
   * @param {Object} props GridItem constructor properties
   */
  constructor(props) {
    super(props);
  }

  /**
   * Renders the GridItem component
   * @returns {HTMLDivElement} HTML `div` tag containing the GridItem component
   */
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

/**
 * ProjectSldier component containing the project grid slider
 * @class
 */
class ProjectSlider extends React.Component {
  /**
   * ProjectSlider component constructor
   * @constructor
   * @param {Object} props ProjectSldier constructor properties
   */
  constructor(props) {
    super(props);
    // State comprising of grid item color array and width
    // TODO: state.arr is not used anywhere so remove it
    this.state = { arr: [], width: 0 };
  }

  /**
   * Executed when the ProjectSlider component will be mounted
   * @function componentWillMount
   */
  componentWillMount() {
    this.setState({ arr: makeColors() });
  }

  /**
   * Update the ProjectSlider width based on the current window dimensions
   * @function componentWillMount
   */
  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  /**
   * Executed when the ProjectSlider component is mounted
   * @function componentDidMount
   */
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  /**
   * Executed when the ProjectSlider component will be unmounted
   * @function componentWillUnmount
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  /**
   * Renders the ProjectSlider component
   * @returns {HTMLDivElement} HTML `div` tag containing the ProjectSlider components
   */
  render() {
    // Number of project grid items to display
    var numSlides = 3;
    // If window size is less than 750, reduce the number of project grid items to display to 1
    if (window.innerWidth < 750) {
      numSlides = 1;
    }
    // ProjectSlider configuration
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

/**
 * Projects component containing a showcase of some of the past TreeHacks projects
 * @returns {HTMLDivElement} HTML `div` tag containing the project grid slider
 */
function Projects() {
  return (
    <div id="projects" className="container">
      {/* <div className="stripe accent-blue" /> */}      
      <div className="floating-illustration laptop"><img src={woman} /></div>
      <h1 className="section-heading">Past Projects</h1>
      <ProjectSlider />
      {/* <div className="stripe-wrapper"> */}
        {/* <div className="stripe accent-pink" /> */}
      {/* </div> */}
    </div>
  );
}

// Export the Projects component
export default Projects;
