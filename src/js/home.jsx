import React from 'react';
import logo from '../svg/logo.svg';
import treehacks_text from '../svg/treehacks_text.svg'
import { home, live_cutoff, ended_cutoff } from './content.json';

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
    const hasEnded = Date.now() > new Date(ended_cutoff),
      hasBegun = Date.now() > new Date(live_cutoff);

    return(
      <div id="home">
        <img src={treehacks_text} alt="treehacks large text"/>
        <div>
          <a href="https://live.treehacks.com" className="apply-button">apply here</a>
        </div>
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
