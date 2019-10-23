import React from 'react';
import computer from "../svg/computer-arms.svg"

const SPONSORS = {
  big: [
    {"link": "https://microsoft.com", "img": require('../sponsor-logos/microsoft.png')}
  ],
  medium: [
    {"link": "https://disney.com", "img": require('../sponsor-logos/disney.png')},
    {"link": "https://www.newrelic.com/", "img": require('../sponsor-logos/newrelic.png')},
    {"link": "https://www.neo.com/", "img": require('../sponsor-logos/neo.png')},
    {"link": "https://ibm.com/", "img": require('../sponsor-logos/ibm.png')},
    {"link": "https://drw.com/", "img": require('../sponsor-logos/drw.png')},
    {"link": "https://docker.com/", "img": require('../sponsor-logos/docker.png')},
    {"link": "https://axon.com/", "img": require('../sponsor-logos/axon.png')},
    {"link": "https://www.polarr.co/", "img": require('../sponsor-logos/polarr.png')},
    {"link": "https://esri.com/", "img": require('../sponsor-logos/esri.png')},
    {"link": "https://firebase.google.com/", "img": require('../sponsor-logos/firebase.png')},
    {"link": "https://deshaw.com/", "img": require('../sponsor-logos/deshaw.png')}
  ],
  small: [
    {"link": "https://wix.com", "img": require('../sponsor-logos/wix.png')},
    {"link": "https://twosigma.com/", "img": require('../sponsor-logos/twosigma.png')},
    {"link": "https://plus.ai/", "img": require('../sponsor-logos/plusai.png')},
    {"link": "https://phone2action.com/", "img": require('../sponsor-logos/phone2action.png')},
    {"link": "https://oracle.com/", "img": require('../sponsor-logos/oracle.png')},
    {"link": "https://cloud.google.com/", "img": require('../sponsor-logos/gcp.png')},
    {"link": "https://codingitforward.com/", "img": require('../sponsor-logos/codingitforward.png')},
    {"link": "https://cisco.com/", "img": require('../sponsor-logos/cisco.png')},
    {"link": "https://www.cerebras.net/", "img": require('../sponsor-logos/cerebras.png')},
    {"link": "https://quip.com/", "img": require('../sponsor-logos/quip.png')},
    {"link": "https://facebook.com/", "img": require('../sponsor-logos/facebook.png')},
    {"link": "https://blockstack.com/", "img": require('../sponsor-logos/blockstack.png')}
  ],
  smallest: [
    {"link": "https://twilio.com", "img": require('../sponsor-logos/twilio.png')},
    {"link": "https://www.xinfin.org/", "img": require('../sponsor-logos/xinfin.png')},
    {"link": "http://www.xcalar.com/", "img": require('../sponsor-logos/xcalar.png')},
    {"link": "https://expo.io/", "img": require('../sponsor-logos/expo.png')},
    {"link": "https://eventive.org/", "img": require('../sponsor-logos/eventive.png')},
    {"link": "https://soundhound.com/", "img": require('../sponsor-logos/soundhound.png')},
    {"link": "https://github.com/", "img": require('../sponsor-logos/github.png')},
    {"link": "https://sara.stanford.edu/", "img": require('../sponsor-logos/sara.png')}
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
      {/*
      {_makeSponsors('big')}
      {_makeSponsors('medium')}
      {_makeSponsors('small')}
      {_makeSponsors('smallest')}
      */}
      <a href="mailto:hello@treehacks.com?Subject=Sponsorship%20Interest" className="apply-button">become a sponsor!</a>
    </div>
  );
}

export default Sponsors;
