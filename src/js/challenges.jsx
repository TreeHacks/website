import React from "react";
import { challenges, challenges_intro } from "./content.json";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    borderRadius: "20px",
    left: "50%",
    margin: "20px",
    transform: "translate(-50%, -50%)",
  },
};

function Challenges() {
  return (
    <div id="challenges">
      {/*<div className="stripe accent-orange"/>*/}
      <h1 className="section-heading">challenges</h1>
      {/* <div className="section-intro">{challenges_intro}</div> */}
      <div className="section-intro">
        come back and checkout the tracks "branches" of TreeHacks 2023
      </div>

      {/* <div className="container">
        {challenges.map((challenge, i) => {
          return (
            <Challenge
              name={challenge.name}
              logo={challenge.logo}
              description={challenge.description}
              key={i}
            />
          );
        })}
      </div> */}
    </div>
  );
}

function Challenge(props) {
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="challenge">
      <div onClick={openModal}>
        <img
          src={props.logo}
          alt={props.name + " logo"}
          style={{ height: "120px", width: "auto" }}
        />
        <h1>{props.name}</h1>
        <p style={{ fontSize: "15px" }}>Click to learn more</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h1>{props.name}</h1>
          <p>Description: {props.description}</p>
        </div>
      </Modal>
    </div>
  );
}

export default Challenges;
