import React from 'react';

function Sponsors() {
  return(
    <div id="sponsors" className="container">
      <h1 className="section-heading" id="sub-heading">sponsors</h1>
      <p>(to be announced)</p>
      <a href="mailto:hello@treehacks.com?Subject=Sponsorship%20Interest" className="green-button">become a sponsor!</a>
      <h1 className="section-heading">partners</h1>
      <a href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=white">
        <img className = "mlh-trust-badge" src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-grayscale.svg"
        alt="Major League Hacking 2019 Hackathon Season">
        </img>
      </a>
    </div>
  );
}

export default Sponsors;
