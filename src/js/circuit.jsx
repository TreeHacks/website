import React from 'react';
import * as circuit from '../svg/circuit.svg';

class Circuit extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) { //single svg version
    const line = document.querySelector('#Green-line')
    const container = document.querySelector('#green-line')
    let totalLen = 0
    for (let i = 0; i < line.children.length; i++) {
      const path = line.children[i];
      totalLen += path.getTotalLength();
    }
    let h = document.documentElement, 
    b = document.body,
    st = 'scrollTop'
  
  let percent = (h[st]||b[st]) / ((container.scrollHeight) - h.clientHeight);
  let length = percent * totalLen;
  line.children[0].style.strokeDasharray = [length, totalLen].join(' ');
  }

  render() {
    return(
      <div id="circuit">
        <img src={circuit} alt="circuits background"/>
        <div id = 'green-line'>
          <svg viewBox="0 0 208 1092" id = 'green-line-svg'>
            <g id="Green-line" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path d="M64,39 C64,42.3135663 61.3137888,45 58.0004969,45 C54.6862112,45 52,42.3135663 52,39 C52,35.6864337 54.6862112,33 58.0004969,33 C61.3137888,33 64,35.6864337 64,39 Z M58,45 58,83 58,83 81,107 81,107 81,720 L110,720" id="Stroke-166" stroke="#00E174" strokeWidth="3" strokeLinecap="round"></path>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default Circuit;
