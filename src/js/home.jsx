/**
 * Component containing the home page with the
 * TreeHacks information and application button
 * @module Home
 */

// Import react packages
import React from "react";

// Import custom react components
import EmailSignupWidget from "./email-signup-widget.jsx";

// Import content
// import applylaptop from "../svg/laptop.svg";
import treehacks_text from "../png/treehacks-text.png";
import { home, live_cutoff, ended_cutoff } from "./content.json";

/**
 * @constant {Object} STATUSES
 * TreeHacks registration status options
 */
const STATUSES = {
  beforeRegistration: 1,
  registration: 2,
};

/**
 * @constant {Number} STATUS
 * Current TreeHacks registration status
 */
const STATUS = STATUSES.registration;

/**
 * Home component containing:
 * - TreeHacks banner
 * - TreeHacks dates
 * - Apply button
 * @class
 */
class Home extends React.Component {
  /**
   * Home page component constructor
   * @constructor
   * @param {Object} props Home constructor properties
   */
  constructor(props) {
    super(props);
    // Phrase length changes based on the width of the window
    this.state = {
      phrase: 0,
    };
  }

  /**
   * Executed when the Home component is mounted
   * @function componentDidMount
   */
  componentDidMount() {
    // Width of the document window
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    // Use longer phrase if the width is greater than 750
    if (width > 750) {
      this.interval = setInterval(
        () =>
          this.setState({
            phrase: (this.state.phrase + 1) % (home.length - 1),
          }),
        7000
      );
    }
  }

  /**
   * Executed when the Home component is about to be unmounted
   * @function componentWillUnmount
   */
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  /**
   * Renders the Home component
   * @returns {HTMLDivElement} HTML `div` tag containing the home components
   */
  render() {
    // Whether or not TreeHacks has ended
    const hasEnded = Date.now() > new Date(ended_cutoff),
      hasBegun = Date.now() > new Date(live_cutoff);

    return (
      <div id="home">
        <img
          className="logo scale-in-center"
          src={treehacks_text}
          alt="treehacks large text"
        />

        <div className="rowC">
          {/* {STATUS === STATUSES.registration && (
            <div className="applylaptop">
              <a href="https://root.treehacks.com">
                <img src={applylaptop} />
              </a>
            </div>
          )} */}
          {/* <div className="slide-in-left" id="arm" alt="" /> */}

          <div id="date-text">
            Feb 18-20
            <br />
            Stanford&nbsp;University

            {STATUS === STATUSES.registration && (
              <a href="https://root.treehacks.com" className="apply-button">
                apply now
              </a>
            )}
            {STATUS === STATUSES.beforeRegistration && <EmailSignupWidget />}
          </div>
        </div>
      </div>
    );
  }
}

// Export the Home component
export default Home;
