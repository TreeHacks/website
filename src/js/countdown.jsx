import React from 'react';
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
    //const CA_UTC_OFFSET = 8 * 60; // In minutes
    var currentDate = Date.now();
    var deadlineDate = new Date(this.props.date);
    var deadlineDay = deadlineDate.getUTCDate() - 1; // Subtract 1 to account for UTC offset (+8 hours)
    var deadlineMonth = deadlineDate.getUTCMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                       ];
    var dayEndings = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];
    if (Math.floor(deadlineDay / 10) == 1) {
      dayEndings = ["th", "th", "th", "th", "th", "th", "th", "th", "th", "th"];
    }
    var minuteDiff = (deadlineDate.getTime() - currentDate) / (1000 * 60);
    var daysLeft = Math.round(1 + minuteDiff / (60 * 24)); // Add 1 since it is inclusive
    var timeLeft = daysLeft;
    var timeElapsed = "not-elapsed";
    var unit = "days";
    if (minuteDiff <= 60 * 24 && minuteDiff > 0) {
      var hoursLeft = Math.round(minuteDiff / (60));
      timeLeft = hoursLeft;
      unit = "hours";
      if (hoursLeft <= 1) {
        var minutesLeft = Math.round(minuteDiff);
        timeLeft = minutesLeft;
        unit = "minutes";
        if (minutesLeft === 1) {
          unit = "minute";
        }
      }
    } else if (minuteDiff <= 0) {
      timeLeft = 0;
      timeElapsed = "elapsed";
    }

    return(
      <a href="https://root.treehacks.com" target="_blank" className={"single-deadline " + timeElapsed}>
        <p className={timeElapsed}><span className="deadline-title">{this.props.title}</span> deadline</p>
        <p className={timeElapsed}><b>{monthNames[deadlineMonth]} {deadlineDay}<sup>{dayEndings[deadlineDay.toString().split("").pop()]}</sup></b></p>
        <h1 className={timeElapsed}>{timeLeft}</h1>
        <p className={"subtext large " + timeElapsed + " " + unit}>{unit}</p>
        <p className={"subtext " + timeElapsed}>left to apply</p>
      </a>
    )
  }
}

export default Countdown;
