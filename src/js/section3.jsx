import React from 'react';

function Section3() {
  return (
    <div id="section3">
      <h1>FAQs</h1>
      <Left />
      <Right />
    </div>
  );
}

function Left() {
  return (
    <div className="left">
      <div className="qa">
        <h3>What is a hackathon?</h3>
        <p>A hackathon is where you turn your crazy ideas into real stuff. Hundreds of hackers from across the globe gather and build something they’re passionate about; come, dive in, and make the most incredible things you can imagine alongside fellow creators. You take care of building. We’ll take care of you.</p>
      </div>
      <div className="qa">
        <h3>Who can come?</h3>
        <p>TreeHacks applications are open to any enrolled college student (undergrad or grad), from all over the world. Applications will open in the fall. Join our mailing list to be the first to hear when you can apply!</p>
      </div>
      <div className="qa">
        <h3>What if I don’t know how to code?</h3>
        <p>TreeHacks is the perfect time and place to learn. We provide code “starter packs,” as well as great workshops and mentors to help you build something you can be proud of by the end of the weekend.</p>
      </div>
      <div className="qa">
        <h3>What if I don’t have a team or idea?</h3>
        <p>Not a problem! We’ve been working on some great team-forming activities to help you find teammates, and many hackers work up great ideas while at TreeHacks.</p>
      </div>
      <div className="qa">
        <h3>What should I bring?</h3>
        <p>All you need is a valid student ID and a laptop. We provide the rest! (A change of clothes and a pillow and/or sleeping bag is recommended, though.)</p>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="right">
      <div className="qa">
        <h3>What can I build?</h3>
        <p>Anything your heart desires! Hardware, web, mobile, gaming; you name it, we’ll support it.</p>
      </div>
      <div className="qa">
        <h3>What about hardware?</h3>
        <p>We’ll have a hardware lounge with plenty of boards, tools, and gadgets for you to check out!</p>
      </div>
      <div className="qa">
        <h3>What if I’m a Stanford student?</h3>
        <p>Any Stanford student that fills out the Stanford registration (will be released in December) and confirms by February 1st will be guaranteed admission.</p>
      </div>
      <div className="qa">
        <h3>What does it cost?</h3>
        <p>TreeHacks is free for all accepted hackers. We provide meals, caffeine, swag, workspace, and WiFi for the weekend; travel reimbursements or bussing will also be available for qualifying hackers.</p>
      </div>
      <div className="qa">
        <h3>What is the TreeHacks code of conduct?</h3>
        <p>You can read it <a href="https://treehacks-go.herokuapp.com/resources/code_of_conduct.pdf" target="_blank" rel="noopener noreferrer">here</a>. Please take a look at the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" rel="noopener noreferrer">MLH Code of Conduct</a> as well.</p>
      </div>
      <div className="qa">
        <h3>I have some other question!</h3>
        <p>Email us at <a href="mailto:support@treehacks.com">support@treehacks.com</a>. We gotchu.</p>
      </div>
    </div>
  );
}

export default Section3;
