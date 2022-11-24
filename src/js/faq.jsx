import React from "react";
import { faq1 } from "./content.json";
import { faq2 } from "./content.json";
import Collapsible from "react-collapsible";
import { GreenLeave } from "./new_images/greenleave";

const plusList = [
  require("../svg/maingreen.svg"),
  //require("../svg/darkgreen.svg"),
];

const FAQItem = ({ q, a, link, textBefore, textIn, textAfter, i }) => {
  return (
    <Collapsible
      style={{ width: "50%" }}
      trigger={
        <h2
          class="section-subheading faq-question"
          style={{ textTransform: "none" }}
        >
          <img src={plusList} style={{ height: 30, marginRight: "20px" }} />

          {q}
        </h2>
      }
    >
      <p className="faq-answer" style={{ marginLeft: "50px" }}>
        {link ? (
          <>
            {textBefore}
            <a href={link} style={{ color: "white" }}>
              {textIn}
            </a>
            {textAfter}
          </>
        ) : (
          a
        )}
      </p>
    </Collapsible>
  );
};

const FAQ = () => {
  return (
    <div id="faq">
      <h1 className="section-heading">frequently asked questions</h1>
      <p className="body">
        {
          "If you have a question that is listed here, please email hello@treehacks.com"
        }
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "40px",
          marginRight: "5%",
          justifyContent: "space-between",
          marginLeft: "5%",
          gap: "8%",
          marginBottom: "100px",
        }}
      >
        <div style={{ width: "47%" }}>
          <div className="faq-container">
            {faq1.map((item, i) => (
              <FAQItem {...item} i={i} />
            ))}
          </div>
        </div>

        <div style={{ width: "45%" }}>
          <div className="faq-container">
            {faq2.map((item, i) => (
              <FAQItem {...item} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
