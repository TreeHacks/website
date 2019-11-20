import React from 'react';
import treehacks_text from '../svg/treehacks-text.svg'
import arm2l from '../svg/arm2l.svg'
import drone from "../svg/drone.svg"
import { home, live_cutoff, ended_cutoff } from './content.json';
import EmailSignupWidget from "./email-signup-widget.jsx";

const STATUSES = {
  beforeRegistration: 1,
  registration: 2
}

const STATUS = STATUSES.registration;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 0,
      pixel: false
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
            phrase: (this.state.phrase + 1) % (home.length - 1)
          }),
        7000
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onClick = () => {
    this.setState({
      pixel: true
    })
  }

  render() {
    const hasEnded = Date.now() > new Date(ended_cutoff),
      hasBegun = Date.now() > new Date(live_cutoff);

    let apply_button;
    if (!this.state.pixel) {
      apply_button = <a href="https://root.treehacks.com" onClick={this.onClick} className="apply-button">apply now</a>;
    } else {
      apply_button = <div>
                       <a href="https://root.treehacks.com" onClick={this.onClick} className="apply-button">apply now</a>
                       <img height="1" width="1" style={{"display":"none"}} alt="" src="https://px.ads.linkedin.com/collect/?pid=1643873&conversionId=1608193&fmt=gif" />
                     </div>;
    }

    return (
      <div id="home">
        <div className="floating-illustration drone"><img src={drone} /></div>
        <img className="logo scale-in-center" src={treehacks_text} alt="treehacks large text" />
        <img className="slide-in-left" id="arm" src={arm2l} alt="" />
        <div id="date-text">February 14&ndash;16, 2020<br/>Stanford&nbsp;University</div>
        {STATUS === STATUSES.registration &&
          apply_button
        }
        {STATUS === STATUSES.beforeRegistration &&
          <EmailSignupWidget />
        }
      </div>
    );
  }
}

export default Home;
