import React from 'react';
import computer from "../svg/computer-arms.svg"

const SPONSORS = {
  biggest: [
    {"link": "https://human.capital", "img": require('../sponsor-logos/humancapital.png')}
  ],
  big: [
    {"link": "https://microsoft.com", "img": require('../sponsor-logos/microsoft.png')},
    {"link": "https://www.johnsoncontrols.com", "img": require('../sponsor-logos/johnsoncontrols.png')},
    {"link": "https://www.oracle.com/index.html", "img": require('../sponsor-logos/oracle.png')},
    {"link": "https://www.gene.com", "img": require('../sponsor-logos/genentech.png')}
  ],
  medium: [
    {"link:": "https://www.citadel.com", "img": require('../sponsor-logos/citadel.png')},
    {"link": "https://www.deshaw.com", "img": require('../sponsor-logos/deshaw.png')},
    {"link": "https://drw.com", "img": require('../sponsor-logos/drw.png')},
    {"link": "https://cloud.google.com", "img": require('../sponsor-logos/gcp.png')},
    {"link": "https://www.jpmorgan.com", "img": require('../sponsor-logos/jpm.png')},
    {"link": "https://alwaysai.co", "img": require('../sponsor-logos/alwaysai.png')},
    {"link": "https://www.fujifilm.com", "img": require('../sponsor-logos/fujifilm.png')},
    {"link": "http://www.goaheadvc.com", "img": require('../sponsor-logos/goahead.png')}
  ],
  small: [
    {"link": "https://about.fb.com", "img": require('../sponsor-logos/facebook.png')},
    {"link": "https://snapchat.com", "img": require('../sponsor-logos/snapchat.png')},
    {"link": "https://www.mapmyindia.com", "img": require('../sponsor-logos/mmi.png')},
    {"link": "https://www.twosigma.com", "img": require('../sponsor-logos/twosigma.png')},
    {"link": "https://checkbook.io", "img": require('../sponsor-logos/checkbook.png')},
    {"link": "https://www.infosys.com", "img": require('../sponsor-logos/infosys.png')},
    {"link": "https://www.sequoiacap.com", "img": require('../sponsor-logos/sequoia.png')}
  ],
  smallest: [
    {"link": "https://www.nvidia.com", "img": require('../sponsor-logos/nvidia.png')},
    {"link": "https://www.linode.com", "img": require('../sponsor-logos/linode.png')},
    {"link": "https://www.pear.vc", "img": require('../sponsor-logos/pearvc.png')},
    // {"link": "https://www.soundhound.com", "img": require('../sponsor-logos/soundhound.png')},
    {"link": "http://www.vaticlabs.ai", "img": require('../sponsor-logos/vatic.png')},
    {"link": "https://www.voiceflow.com/", "img": require('../sponsor-logos/voiceflow.png')}
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
