/**
 * Component containing the list of TreeHacks FAQs
 * @module FAQ
 */

// Import react packages
import React from "react";

// Import content
import { faq } from "./content.json";

/**
 * @constant {SVGElement} plusList
 * List of SVGs to use for FAQ bullet points
 */
const plusList = [
  require("../svg/maingreen.svg"),
  // require("../svg/darkgreen.svg"),
];

/**
 * @constant {HTMLDivElement} FAQItem
 * Single FAQ item containing:
 * - Question
 * - Answer
 * - Link
 * - Text before the link
 * - Text in the link
 * - Text after the link
 */
const FAQItem = ({ q, a, link, textBefore, textIn, textAfter, i }) => {
  return (
    <div className="faq-item" key={q + a}>
      <h2 className="section-subheading faq-question">
        <img className="faq-plus" src={plusList[i % plusList.length]} style={{ height: 30}}/>
        {q}
      </h2>
      <p className="faq-answer">
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

/**
 * @constant {HTMLDivElement} FAQ
 * FAQ component containing:
 * - FAQ Header
 * - List of FAQ items
 * @see {@link FAQItem}
 */
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

// Export the FAQ component
export default FAQ;
