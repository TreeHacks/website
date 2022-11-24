import React from "react";
import treehacks_text from "../png/treehacks-text.png";
import { home, live_cutoff, ended_cutoff } from "./content.json";
import EmailSignupWidget from "./email-signup-widget.jsx";
import applylaptop from "../svg/laptop.svg";

const STATUSES = {
  beforeRegistration: 1,
  registration: 2,
};

const STATUS = STATUSES.registration;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 0,
    };
  }

  componentDidMount() {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

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

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
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
            Feb 19-20
            <br />
            Stanford&nbsp;University
            {/* {STATUS === STATUSES.registration && (
              <a href="https://root.treehacks.com" className="apply-button">
                apply now
              </a>
            )}
            {STATUS === STATUSES.beforeRegistration && <EmailSignupWidget />} */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
