import React from "react";
import parachute from "../svg/parachute.svg";

const SPONSORS = {
  biggest: [
    {"link": "https://microsoft.com", "img": require('../sponsor-logos/microsoft.png')},
    {"link": "https://www.cadence.com/", "img": require('../sponsor-logos/cadence.png')}
  ],
  big: [
    {"link": "https://www.esri.com/en-us/home", "img": require('../sponsor-logos/esri1.png')},
    {"link": "https://www.citadel.com/", "img": require('../sponsor-logos/citadel.png')}
  ],
  medium: [
    {"link": "https://checkbook.io/", "img": require('../sponsor-logos/checkbook.png')},
    {"link": "https://atsign.com/", "img": require('../sponsor-logos/thecompany.png')},
    {"link": "https://human.capital", "img": require('../sponsor-logos/hc.png')},
    {"link": "https://neo.com/", "img": require('../sponsor-logos/neo.png')},
    {"link": "https://www.deshaw.com/", "img": require('../sponsor-logos/deshaw.png')},
    {"link": "https://www.stacks.co/", "img": require('../sponsor-logos/stacks.svg')}
  ],
  small: [
    {"link": "https://en.valuenex.com/", "img": require('../sponsor-logos/valuenex.png')},
    {"link": "https://www.pear.vc/", "img": require('../sponsor-logos/pear.png')},
    {"link": "https://repl.it/", "img": require('../sponsor-logos/replit.png')},
    {"link": "https://zoom.us//", "img": require('../sponsor-logos/zoom.png')},
    {"link": "https://ohyay.co/", "img": require('../sponsor-logos/ohyay.png')},
    {"link": "https://www.nvidia.com/", "img": require('../sponsor-logos/nvidia.png')},
    {"link": "https://cloud.google.com/", "img": require('../sponsor-logos/GoogleCloud.png')},
    {"link": "https://cloud.google.com/", "img": require('../sponsor-logos/mitsubishi.png')}
  ],
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
        {/* <div className="stripe accent-gray" /> */}
      </div>
      <div className="floating-illustration parachute"><img src={parachute} /></div>
      <h1 className="section-heading" id="sub-heading">
        sponsors
      </h1>
      
      {_makeSponsors("biggest")}
      {_makeSponsors("big")}
      {_makeSponsors("medium")}
      {_makeSponsors("small")}
      {/* {_makeSponsors("smallest")}
      {_makeSponsors("tiny")} */}
     
      {/* <a
        href="mailto:hello@treehacks.com?Subject=Sponsorship%20Interest"
        className="apply-button"
      >
        become a sponsor!
      </a> */}
    </div>
  );
}

export default Sponsors;
