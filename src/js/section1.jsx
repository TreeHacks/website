import React from 'react';

const TREEHACKS_DATE = new Date("February 15, 2019 00:00:00");

function Section1() {
  return (
    <div id="section1">
      <Video />
      <Header />
      {calculateTimeUntil() > 0 ? <Timer /> : <Launch />}
      <EmailSignup />
    </div>
  );
}

function calculateTimeUntil() {
  let now = new Date();
  let offset = (TREEHACKS_DATE.getTimezoneOffset() - now.getTimezoneOffset()) * 60;
  return ((TREEHACKS_DATE.getTime() - now.getTime()) / 1000) - offset;
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    let timeUntil = calculateTimeUntil();
    this.state = {
      days: Math.floor(timeUntil/60/60/24),
      hours: Math.floor((timeUntil/60/60)%24),
      minutes: Math.floor((timeUntil/60)%60),
      seconds: Math.floor(timeUntil%60)
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let timeUntil = calculateTimeUntil();
    this.setState({
      days: Math.floor(timeUntil/60/60/24),
      hours: Math.floor((timeUntil/60/60)%24),
      minutes: Math.floor((timeUntil/60)%60),
      seconds: Math.floor(timeUntil%60)
    });
  }

  render() {
    return (
      <div id="timer">
        <TimerComponent unit="days" value={this.state.days} />
        <TimerComponent unit="hours" value={this.state.hours} />
        <TimerComponent unit="minutes" value={this.state.minutes} />
        <TimerComponent unit="seconds" value={this.state.seconds} />
        <div><h2>until TreeHacks 2019</h2></div>
      </div>
    );
  }
}

class TimerComponent extends React.Component {
  render() {
    return (
      <div className="timerComponent">
        <h1>{this.props.value}</h1>
        <p>{this.props.unit}</p>
      </div>
    );
  }
}

function Video() {
  return(
    <div className="videoContainer">
      <video playsInline autoPlay muted loop>
        <source src="videos/treehacks-header.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src="images/logo.png" alt="TreeHacks Logo"/>
      <img src="images/text.png" alt="TreeHacks Title" />
    </div>
  );
}

function EmailSignup() {
  return (
    <div className="emailSignup">
      <div id="mc_embed_signup">
        <form action="https://treehacks.us8.list-manage.com/subscribe/post?u=e6ff5c7ae36357707280fa752&amp;id=6ec8dfd393" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL">Enter your email to receive updates about TreeHacks 2019</label>
            <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email address" required />
            <div aria-hidden="true"><input type="text" name="b_e6ff5c7ae36357707280fa752_6ec8dfd393" tabIndex="-1" value="" /></div>
            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
          </div>
        </form>
      </div>
    </div>
  );
}

class Launch extends React.Component {
  render() {
    return (
      <div id="launch">
        <h1>TreeHacks has begun!</h1>
      </div>
    );
  }
}

export default Section1;
