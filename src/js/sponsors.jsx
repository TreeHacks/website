import React from 'react';

import codingitforward from '../sponsor-logos/codingitforward.png';
import deshaw from '../sponsor-logos/deshaw.png';
import disney from '../sponsor-logos/disney.svg';
import docker from '../sponsor-logos/docker.png';
import drw from '../sponsor-logos/drw.png';
import esri from '../sponsor-logos/esri.png';
import eventive from '../sponsor-logos/eventive.png';
import expo from '../sponsor-logos/expo.svg';
import gcp from '../sponsor-logos/gcp.png';
import github from '../sponsor-logos/github.png';
import microsoft from '../sponsor-logos/microsoft.png';
import phone2action from '../sponsor-logos/phone2action.svg';
import soundhound from '../sponsor-logos/soundhound.png';
import twosigma from '../sponsor-logos/twosigma.png';
import wix from '../sponsor-logos/wix.png';

const SPONSORS = {
  big: [
    microsoft
  ],
  medium: [
    drw,
    esri,
    // polarr,
    deshaw,
    docker
  ],
  small: [
    // oracle,
    twosigma,
    expo,
    // facebook,
    codingitforward,
    gcp,
    soundhound,
    // firebase,
    // cerebras,
    phone2action,
    // youngleaders,
    // twilio,
    wix,
    eventive
  ],
  smallest: [
    // pear,
    // linode,
    github
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
