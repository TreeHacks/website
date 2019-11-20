import React from 'react';
import logo from '../svg/logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ended_cutoff, live_cutoff } from './content.json';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pixel: false
    };
  }

  onClick = () => {
    this.setState({
      pixel: true
    })
  }

  render() {
    let apply_button;
    if (!this.state.pixel) {
      apply_button = <a href="https://root.treehacks.com" onClick={this.onClick}>apply now</a>;
    } else {
      apply_button = <div>
                       <a href="https://root.treehacks.com" onClick={this.onClick}>apply now</a>
                       <img height="1" width="1" style={{"display":"none"}} alt="" src="https://px.ads.linkedin.com/collect/?pid=1643873&conversionId=1608193&fmt=gif" />
                     </div>;
    }

    return (
      <nav id="navbar">
        <div className="container">
          <ul className="menu">
            <li id="navbar-logo">
              <a href="/">
                <img src={logo} alt="treehacks small logo" />
                <div id="title">
                  <span className="logo-text-tree">tree</span>
                  <span className="logo-text-hacks">hacks</span>
                </div>
              </a>
            </li>
            <li className="navbar-item"><AnchorLink offset='100' href="#home">home</AnchorLink></li>
            <li className="navbar-item about-link"><AnchorLink offset='100' href="#about">about</AnchorLink></li>
            <li className="navbar-item"><AnchorLink offset='100' href="#challenges">challenges</AnchorLink></li>
            <li className="navbar-item"><AnchorLink offset='100' href="#projects">projects</AnchorLink></li>
            <li className="navbar-item"><AnchorLink offset='100' href="#faq">faq</AnchorLink></li>&nbsp;
            <li className="navbar-item"><AnchorLink offset='100' href="#sponsors">sponsors</AnchorLink></li>&nbsp;
            {/* <li className="special-link navbar-item"><a href="https://treehacks.typeform.com/to/rK08ej">join team</a></li> */}
            <li className="special-link apply-link navbar-item">{apply_button}</li>
            {Date.now() > new Date(ended_cutoff) ?
              null
              : Date.now() > new Date(live_cutoff) ?
                <a href="https://live.treehacks.com"><li id="navbar-apply">view live schedule</li></a>
                :
                <a href="https://root.treehacks.com"><li id="navbar-apply">apply now!</li></a>
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
