import React from 'react';
import * as logo from '../svg/logo.svg';
import {home} from './content.json';
import DeadlinesWidget from './deadlines-widget.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 0
    };
  }

  componentDidMount() {
    let width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    if (width > 750) {
      this.interval = setInterval(() => this.setState({phrase: (this.state.phrase + 1) % (home.length - 1)}), 7000);
    }
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
        <h2>February 15-17, 2019 at&nbsp;Stanford&nbsp;University</h2>
        <div id="typewriter-container">
          <p>if ( </p>
          <Typewriter text={home[this.state.phrase]}/>
          <p> ) &#123;</p>
        </div>
        <div>
          <a href="https://root.treehacks.com" className="green-button">apply now!</a>
          <DeadlinesWidget />
        </div>
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
