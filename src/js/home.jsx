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
    this.interval = setInterval(() => this.setState({phrase: (this.state.phrase + 1) % (home.length - 1)}), 7500);
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
        <p>if ( <Typist text={home[this.state.phrase]}/> ) &#123;</p>
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
      position: 0,
      rate: 80 - this.props.text.length
    }
  }

  componentDidMount() {
    this.type();
  }

  componentDidUpdate(prevProps, type) {
    if (this.props.text !== prevProps.text) {
      this.setState({rate: 80 - this.props.text.length})
      this.type();
    }
  }

  type(backspace) {
    this.interval = setInterval(() => {
      this.setState({position: this.state.position + 1});
    }, this.state.rate);
    this.timeout = setTimeout(() => {
      clearInterval(this.interval);
      this.setState({position: this.props.text.length});
      this.pause = setTimeout(() => {
        this.backspace();
        clearTimeout(this.pause);
      }, 1500);
      clearTimeout(this.timeout);
    }, this.state.rate * this.props.text.length);
  }

  backspace() {
    this.interval = setInterval(() => {
      this.setState({position: this.state.position - 1});
    }, this.state.rate);
    this.timeout2 = setTimeout(() => {
      clearInterval(this.interval);
      this.setState({position: 0});
      clearTimeout(this.timeout2);
    }, this.state.rate * this.props.text.length);
  }

  render() {
    return this.props.text.slice(0, this.state.position);
  }
}

export default Home;
