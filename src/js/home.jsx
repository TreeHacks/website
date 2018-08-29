import React from 'react';
import * as logo from '../svg/logo.svg';
import {home} from './content.json';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({phrase: (this.state.phrase + 1) % (home.length - 1)}), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div id="home">
        <img src={logo} alt="treehacks large logo"/>
        <h1>
          <span className="logo-text-tree">tree</span>
          <span className="logo-text-hacks">hacks</span>
        </h1>
        <h2>February 15-17, 2019 at Stanford University</h2>
        <p>if ( <Typist text={home[this.state.phrase]} /> ) &#123;</p>
        <a href="" className="green-button">apply now!</a>
        <p>&#125;</p>
      </div>
    );
  }
}

class Typist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }

  render() {
    return this.props.text;
  }
}

export default Home;
