import React from 'react';

const TREEHACKS_DATE = new Date("February 15, 2019 00:00:00").getTime();

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
  let now = new Date().getTime();
  return (TREEHACKS_DATE - now) / 1000;
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
      <img src="images/logo.png" />
      <img src="images/text.png" />
    </div>
  );
}

function EmailSignup() {
  return (
    <div className="emailSignup">
      <p></p>
    </div>
  );
}

class Launch extends React.Component {
  render() {
    return (
      <div id="launch"></div>
    );
  }
}

export default Section1;
