import React from 'react';
import * as logo from '../svg/logo.svg';

function Home() {
  return(
    <div id="home">
      <img src={logo} alt="treehacks large logo"/>
      <h1>
        <span className="logo-text-tree">tree</span>
        <span className="logo-text-hacks">hacks</span>
      </h1>
      <h2>February 15-17, 2019 at Stanford University</h2>
      <p>if (you love to learn) &#123;</p>
      <button id="home-apply"><a href="">apply now!</a></button>
      <p>&#125;</p>
    </div>
  );
}

export default Home;
