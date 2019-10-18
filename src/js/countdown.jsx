import React from 'react';
import hands_with_computer from '../svg/hands-with-computer.svg'
import {deadlines} from './content.json';

class Countdown extends React.Component {
  render() {
    return(
      <div id="countdown">
        <div className="container">
          <Deadlines />
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
    var currentDate = new Date();
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
        <h1>{Math.round((deadlineDate - currentDate) / (1000 * 60 * 60 * 24))}</h1>
        <p className="subtext">days left to apply</p>
      </div>
    )
  }
}

export default Countdown;
