import React from 'react';
import hands_with_computer from '../svg/hands-with-computer.svg'
import {deadlines} from './content.json';
import {hackathon_date} from './content.json';

class Countdown extends React.Component {
  render() {
    return(
      <div id="countdown">
        <h1 className="section-heading">February 15-17 at Stanford</h1>
        <div className="container">
          <Deadlines />
          <img src={hands_with_computer} alt="Hands with computer"/>
        </div>
      </div>
    );
  }
}

class Deadlines extends React.Component {
  render() {
    return(
      <div id="deadlines">
        {deadlines.map(function (deadline, i){
          return <SingleDeadline title={deadline.title} date={deadline.date}/>;
        })}
      </div>
    )
  }
}

class SingleDeadline extends React.Component {
  render() {
    var hackathonDate = new Date(hackathon_date);
    var deadlineDate = new Date(this.props.date)
    var deadlineDay = deadlineDate.getUTCDate()
    var deadlineMonth = deadlineDate.getUTCMonth()

    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                       ];
    const dayEndings = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"]

    return(
      <div className="single-deadline">
        <p>{this.props.title}</p>
        <p><b>{monthNames[deadlineMonth]} {deadlineDay + dayEndings[deadlineDay.toString().split("").pop()]}</b></p>
        <h1>{(hackathonDate - deadlineDate) / (1000 * 60 * 60 * 24)}</h1>
        <p className="subtext">days left to apply</p>
      </div>
    )
  }
}

export default Countdown;
