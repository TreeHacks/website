import React from 'react';
import * as circuit from '../svg/circuit.svg';
import * as piece1 from '../svg/green_line_piece_1.svg';
import * as piece2 from '../svg/green_line_piece_2.svg';
import * as piece3 from '../svg/green_line_piece_3.svg';
import * as piece4 from '../svg/green_line_piece_4.svg';
import * as piece5 from '../svg/green_line_piece_5.svg';

class GreenLine extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    console.log('scroll event')
    const line = document.querySelector('#Green-line-piece-1')
    const container = document.querySelector('#green-line')
    let totalLen = 0
    for (let i = 0; i < line.children.length; i++) {
      const path = line.children[i];
      totalLen += path.getTotalLength();
    }
    var h = document.documentElement, 
    b = document.body,
    st = 'scrollTop'
  
  console.log(container.scrollHeight)
  var percent = (h[st]||b[st]) / ((container.scrollHeight) - h.clientHeight);
  // console.log(percent)
  let length = percent * totalLen;
  // console.log([length, totalLen].join(' '))
  line.children[0].style.strokeDasharray = [length, totalLen].join(' ');


    // var length = 0;
    // var pathLength = line.getTotalLength();
    // var distanceFromTop = line.offset().top - window.scrollTop();
    // var percentDone = 1 - (distanceFromTop / window.height());
    // length = percentDone * pathLength;
    // line.style.strokeDasharray = [length, pathLength].join(' ');
  }

  render() {
    return(
      <div id = 'green-line'>
        <svg width="208px" height="1092px" viewBox="0 0 208 1092" id = 'green-line-svg'>
          <g id="Green-line-piece-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M81,1055 L81,107" id="Stroke-166" stroke="#00E174" strokeWidth="3" strokeLinecap="round"></path>
            <path d="M58,45 L58,83" id="Stroke-168" stroke="#00E174" strokeWidth="3" strokeLinecap="round"></path>
            <path d="M80,106 L58,83" id="Stroke-169" stroke="#00E174" strokeWidth="3" strokeLinecap="round"></path>
            <path d="M64,39 C64,42.3135663 61.3137888,45 58.0004969,45 C54.6862112,45 52,42.3135663 52,39 C52,35.6864337 54.6862112,33 58.0004969,33 C61.3137888,33 64,35.6864337 64,39 Z" id="Stroke-563" stroke="#00E174" strokeWidth="3"></path>
          </g>
        </svg>
      </div>
    );
  }


}

export default GreenLine;

// style.strokeDasharray

// window.onscroll
// this.style.strokeDashoffset
