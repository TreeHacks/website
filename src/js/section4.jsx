import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

function Section4() {
  return (
    <div id="section4">
      <Sponsorship />
      <Connect />
    </div>
  );
}

function Sponsorship() {
  return (
    <div className="sponsorship">
      <h1>Sponsorship</h1>
      <p>If you're interested in sponsoring us, please contact us at <a href="mailto:hello@treehacks.com">hello@treehacks.com</a>!</p>
    </div>
  )
}

function Connect() {
  return (
    <div className="connect">
      <h1>Connect With Us</h1>
      <p>Follow us on social media!</p>
      <div>
        <a href="https://www.facebook.com/treehacks/"><FontAwesomeIcon icon={faFacebookF} size="2x" /></a>
        <a href="https://twitter.com/hackwithtrees"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        <a href="mailto:hello@treehacks.com"><FontAwesomeIcon icon={faAt} size="2x" /></a>
      </div>
    </div>
  );
}

export default Section4;
