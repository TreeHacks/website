import React from 'react';
import {challenges, challenges_intro} from './content.json';

function Application() {
  return(
    <div id="application">
      <div className="stripe accent-orange"/>
      <h1 className="section-heading">the application</h1>
      <div className="container">
        <p className="content-text">
          Unfortunately, TreeHacks is only able to accommodate so many hackers every year. We do our best to craft a personalized and impactful experience for everyone who attends our event, so naturally, we’re unable to support everyone who’s interested in coming to TreeHacks.
        </p>
        <p className="content-text">
          Our application gives you an opportunity to express any past experience you’ve had with building, any problems you’re particularly passionate about, and what you hope to get out of coming to TreeHacks 2020. We don’t assume that you’re a programming expert – in fact, some of the best TreeHacks projects ever have come from self-proclaimed “CS n00bs” who walked out of an introductory CS course at their school and then built something incredible at Stanford. Above all, we want to know what you care about, why you build, and how you can grow at TreeHacks.
        </p>
        <p className="content-text apply">
          <a href="https://root.treehacks.com" className="apply-button">apply now</a>
        </p>
      </div>
    </div>
  );
}

export default Application;
