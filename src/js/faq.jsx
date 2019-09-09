import React from 'react';
import {faq} from './content.json';

const plusList = [
  require("../svg/plus1.svg"),
  require("../svg/plus2.svg"),
  require("../svg/plus3.svg"),
  require("../svg/plus4.svg"),
  require("../svg/plus5.svg"),
  require("../svg/plus6.svg")
]

class FAQ extends React.Component {
  render() {
    return(
      <div id="faq">
        <h1 className="section-heading">Any Questions?</h1>
        <div className="faq-container">
          {faq.map(({q, a}, i) => <div className="faq-item">
            <h2 className="section-subheading faq-question">
              <img className="faq-plus" src={plusList[i % plusList.length]} />
              {q}
            </h2>
            <p className="faq-answer">{a}</p>
          </div>)}
        </div>
      </div>
    );
  }
}

export default FAQ;
