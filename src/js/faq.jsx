import React from "react";
import { faq } from "./content.json";

const plusList = [
  require("../svg/maingreen.svg"),
];

const FAQItem = ({ q, a, link, textBefore, textIn, textAfter, i }) => {
  return (
    <div className="faq-item" key={q + a}>
      <h2
        className="section-subheading faq-question"
              >
        <img className="faq-plus" src={plusList[i % plusList.length]} />
        {q}
      </h2>
      <p
        className="faq-answer"
      >
        {link ? (
          <>
            {textBefore}
            <a href={link}>{textIn}</a>
            {textAfter}
          </>
        ) : (
          a
        )}
      </p>
    </div>
  );
};

const FAQ = () => {
  return (
    <div id="faq">
      <h1 className="section-heading">Any Questions?</h1>
      <div className="faq-container">
        {faq.map((item, i) => (
          <FAQItem {...item} i={i} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
