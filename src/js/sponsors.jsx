import React from 'react';

const SPONSORS = {
  big: [
    require('../sponsor-logos/microsoft.png')
  ],
  medium: [
    require('../sponsor-logos/disney.png'),
    require('../sponsor-logos/newrelic.png'),
    require('../sponsor-logos/neo.png'),
    require('../sponsor-logos/ibm.png'),
    require('../sponsor-logos/drw.png'),
    require('../sponsor-logos/docker.png'),
    require('../sponsor-logos/axon.png'),
    require('../sponsor-logos/polarr.png'),
    require('../sponsor-logos/esri.png'),
    require('../sponsor-logos/firebase.png'),
    require('../sponsor-logos/deshaw.png')
  ],
  small: [
    require('../sponsor-logos/wix.png'),
    require('../sponsor-logos/twosigma.png'),
    require('../sponsor-logos/plusai.png'),
    require('../sponsor-logos/phone2action.png'),
    require('../sponsor-logos/oracle.png'),
    require('../sponsor-logos/gcp.png'),
    require('../sponsor-logos/codingitforward.png'),
    require('../sponsor-logos/cisco.png'),
    require('../sponsor-logos/cerebras.png'),
    require('../sponsor-logos/quip.png'),
    require('../sponsor-logos/facebook.png'),
    require('../sponsor-logos/blockstack.png')
  ],
  smallest: [
    require('../sponsor-logos/twilio.png'),
    require('../sponsor-logos/xinfin.png'),
    require('../sponsor-logos/xcalar.png'),
    require('../sponsor-logos/expo.png'),
    require('../sponsor-logos/eventive.png'),
    require('../sponsor-logos/soundhound.png'),
    require('../sponsor-logos/github.png'),
    require('../sponsor-logos/sara.png')
  ]
};

const _makeSponsors = function (key) {
  return (
    <div className={`level level-${key}`}>
      {SPONSORS[key].map(s => (
        <img key={s} src={s} alt="sponsor" />
      ))}
    </div>
  )
}

function Sponsors() {
  return(
    <div id="sponsors" className="container">
      <h1 className="section-heading" id="sub-heading">sponsors</h1>
      {_makeSponsors('big')}
      {_makeSponsors('medium')}
      {_makeSponsors('small')}
      {_makeSponsors('smallest')}
      <a href="mailto:hello@treehacks.com?Subject=Sponsorship%20Interest" className="green-button">become a sponsor!</a>
    </div>
  );
}

export default Sponsors;
