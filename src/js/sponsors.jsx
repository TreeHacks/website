import React from 'react';
import computer from "../svg/computer-arms.svg"

const SPONSORS = {
  biggest: [
    {"img": require('../sponsor-logos/humancapital.png')}
  ],
  big: [
    {"link": "https://microsoft.com", "img": require('../sponsor-logos/microsoft.png')},
    {"img": require('../sponsor-logos/johnsoncontrols.png')},
    {"img": require('../sponsor-logos/oracle.png')},
    {"img": require('../sponsor-logos/genentech.png')}
  ],
  medium: [
    {"img": require('../sponsor-logos/citadel.png')},
    {"img": require('../sponsor-logos/deshaw.png')},
    {"img": require('../sponsor-logos/drw.png')},
    {"img": require('../sponsor-logos/gcp.png')},
    {"img": require('../sponsor-logos/jpm.png')},
    {"img": require('../sponsor-logos/alwaysai.png')},
    {"img": require('../sponsor-logos/fujifilm.png')},
    {"img": require('../sponsor-logos/goahead.png')}
  ],
  small: [
    {"img": require('../sponsor-logos/facebook.png')},
    {"img": require('../sponsor-logos/snapchat.png')},
    {"img": require('../sponsor-logos/mmi.png')},
    {"img": require('../sponsor-logos/twosigma.png')},
    {"img": require('../sponsor-logos/checkbook.png')},
    {"img": require('../sponsor-logos/infosys.png')},
    {"img": require('../sponsor-logos/sequoia.png')}
  ],
  smallest: [
    {"img": require('../sponsor-logos/nvidia.png')},
    {"img": require('../sponsor-logos/linode.png')},
    {"img": require('../sponsor-logos/pearvc.png')},
    {"img": require('../sponsor-logos/soundhound.png')},
    {"img": require('../sponsor-logos/vatic.png')},
    {"img": require('../sponsor-logos/voiceflow.png')}
  ]
};

const _makeSponsors = function (key) {
  return (
    <div className={`level level-${key}`}>
      {SPONSORS[key].map(sponsor => (
        <a href = {sponsor["link"]} target="_blank"><img key={sponsor["img"]} src={sponsor["img"]} alt="sponsor" /></a>
      ))}
    </div>
  )
}

function Sponsors() {
  return(
    <div id="sponsors" className="container">
      <div className="stripe-wrapper sponsors"><div className="stripe accent-gray"/></div>
      {/*<div className="floating-illustration computer"><img src={computer} /></div>*/}
      <h1 className="section-heading" id="sub-heading">sponsors</h1>
      {_makeSponsors('biggest')}
      {_makeSponsors('big')}
      {_makeSponsors('medium')}
      {_makeSponsors('small')}
      {_makeSponsors('smallest')}
      <a href="mailto:hello@treehacks.com?Subject=Sponsorship%20Interest" className="apply-button">become a sponsor!</a>
    </div>
  );
}

export default Sponsors;
