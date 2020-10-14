import React from "react";
import computer from "../svg/computer-arms.svg";

const SPONSORS = {
  biggest: [],
  big: [],
  medium: [],
  small: [],
  smallest: [],
  tiny: [],
};

const _makeSponsors = function (key) {
  return (
    <div className={`level level-${key}`}>
      {SPONSORS[key].map((sponsor) => (
        <a href={sponsor["link"]} target="_blank">
          <img key={sponsor["img"]} src={sponsor["img"]} alt="sponsor" />
        </a>
      ))}
    </div>
  );
};

function Sponsors() {
  return (
    <div id="sponsors" className="container">
      <div className="stripe-wrapper sponsors">
        <div className="stripe accent-gray" />
      </div>
      {/*<div className="floating-illustration computer"><img src={computer} /></div>*/}
      <h1 className="section-heading" id="sub-heading">
        sponsors coming soon
      </h1>
      {/*
      {_makeSponsors("biggest")}
      {_makeSponsors("big")}
      {_makeSponsors("medium")}
      {_makeSponsors("small")}
      {_makeSponsors("smallest")}
      {_makeSponsors("tiny")}
      */}
      <a
        href="mailto:hello@treehacks.com?Subject=Sponsorship%20Interest"
        className="apply-button"
      >
        become a sponsor!
      </a>
    </div>
  );
}

export default Sponsors;
