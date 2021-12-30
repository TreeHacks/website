/**
 * Component containing the countdowns to the TreeHacks application deadlines
 * @module Countdown
 */

// Import react packages
import React from 'react';

// Import content
import {deadlines} from './content.json';

/**
 * Contains the countdown for a single deadline
 * @class
 */
class SingleDeadline extends React.Component {
  /**
   * Renders the countdown for a single deadline
   * @returns {HTMLAnchorElement} HTML `a` tag containing the single deadline components
   */
  render() {
    // Deadline variables (date/time)
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
    // If deadline has not passed
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
    // If deadline has passed
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

/**
 * Contains the countdowns for both the non-Stanford and Stanford student deadlines
 * @class
 */
class Deadlines extends React.Component {
  /**
   * Render function for rendering the countdowns for both the on-Stanford and Stanford student deadlines
   * @returns {HTMLAnchorElement} HTML `a` tag containing both the deadline components
   */
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

/**
 * Contains the container component for a countdown
 * @class
 */
class Countdown extends React.Component {
  /**
   * Render function for rendering a countdown
   * @returns {HTMLDivElement} HTML `div` tag containing the countdown wrapper
   */
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

// Export the Countdown component
export default Countdown;
