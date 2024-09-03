import "./accordion.css";
import { useState } from "react";

const data = [
  {
    title: "What is a Hackathon?",
    content:
      "A hackathon is where you turn your crazy ideas into real projects. At TreeHacks, for 36 hours (February 16th to 18th) on Stanford's campus, you'll be learning and building in an energetic environment with people as passionate as you are! This year is our 11th anniversary, and we're going ALL OUT! We cover flights (regional caps), food, and swag for all hackers, and also have designated sleeping spaces for hackers. Not to mention, some epic prizes, world-renowned guest speakers, incredible mentors, and deeply technical workshops and fun activities throughout the event. Basically, you take care of hacking and we'll take care of you!",
  },
  {
    title: "Who can come?",
    content:
      "TreeHacks applications are open to any enrolled college student (undergrad or grad) from all over the world. Due to venue space and capacity limitations, we are unable to offer automatic acceptance to Stanford students. This decision ensures that hackers from around the world have a fair opportunity to participate in the event. However, to maintain a valuable experience for Stanford students, we offer priority consideration to Stanford students who submit their applications by the priority deadline.",
  },
  {
    title: "What does it cost?",
    content:
      "TreeHacks is free for all admitted hackers! It's our pleasure to bring our virtual workshops, swag, and prizes to our hackers without any cost on your end. We're committed to making TreeHacks accessible!",
  },
  {
    title: "What is the TreeHacks code of conduct?",
    content:
      "TreeHacks abides by this <a href='https://github.com/TreeHacks/policies/blob/master/code-of-conduct.md' target='_blank'>Code of Conduct</a>, adapted from the <a href='https://hackcodeofconduct.org/' target='_blank'>Hack Code of Conduct</a>. Every TreeHacks applicant must agree to this Code of Conduct to be considered for admission. TreeHacks is a safe place where everyone is welcome ❤️.",
  },
  {
    title: "What if I don't know how to code?",
    content:
      "TreeHacks is the perfect time and place to learn. We provide starter code “hack packs” on our github as well as beginner-friendly workshops and mentors to help you build something you can be proud of.",
  },
  {
    title: "What if I don't have a team or idea?",
    content:
      "Many of our hackers don't have a team coming in, and find them at the event! Once your admission is confirmed, we open up a team-matching platform for you to find other teammates. We also have a ton of team-forming activities to help you find teammates and idea brainstorming sessions for all our tracks.",
  },
  {
    title: "What can I build?",
    content:
      "Anything your heart desires! Hardware, web, mobile, gaming, VR...you name it, we'll support it. We have six tracks that will have extra resources, sponsored challenges, and other events to inspire you. Check out our Devpost for examples of what participants built in the past!!",
  },
];

const Accordion: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <div className="accordion-container">
      <div className="accordion">
        {data.map((item, index) => (
          <div
            key={index}
            className={`item ${selected === index ? "selected" : ""}`}
          >
            <div
              className={`title ${selected === index ? "selected" : ""}`}
              onClick={() => toggle(index)}
            >
              <span className="icon-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29 29"
                  className="img-scale"
                  fill="none"
                >
                  <circle
                    cx="14"
                    cy="15"
                    r="12"
                    fill="url(#paint0_radial_343_547)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_343_547"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(14 15) rotate(90) scale(12)"
                    >
                      <stop offset="0.365" stopColor="#FCF8B8" />
                      <stop offset="1" stopColor="#96946E" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
                {item.title}
              </span>
            </div>
            <div className={`content ${selected === index ? "show" : ""}`} dangerouslySetInnerHTML={{ __html: item.content }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
