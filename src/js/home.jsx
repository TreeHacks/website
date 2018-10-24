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
    this.interval = setInterval(() => this.setState({phrase: (this.state.phrase + 1) % (home.length - 1)}), 7000);
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
        <div id="typewriter-container">
          <p>if ( </p>
          <Typewriter text={home[this.state.phrase]}/>
          <p> ) &#123;</p>
        </div>
        <a href="https://apply.treehacks.com" className="green-button">apply now!</a>
        <p>&#125;</p>
      </div>
    );
  }
}

class Typewriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "",
      text: props.text
    }
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({class: " show"});
      clearTimeout(this.timer);
    }, 2500);
  }

  componentDidUpdate(prevProps, type) {
    if (this.props.text !== prevProps.text) {
      this.setState({class: ""});
      this.timer = setTimeout(() => {
        this.setState({class: " show", text: this.props.text});
        clearTimeout(this.timer);
      }, 2500);
    }
  }

  render() {
    return <p className={"typewriter" + this.state.class}>{this.state.text}</p>;
  }
}

export default Home;
