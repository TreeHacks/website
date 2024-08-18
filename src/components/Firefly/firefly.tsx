import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./firefly.css";

interface FireflyProps {
  className?: string;
}

const Firefly: React.FC<FireflyProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    className={className}
  >
    <circle cx="22" cy="22" r="22" fill="url(#paint0_radial_266_984)" />
    <defs>
      <radialGradient
        id="paint0_radial_266_984"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(22 22) rotate(90) scale(22)"
      >
        <stop stopColor="#FCF8B8" />
        <stop offset="1" stopColor="#96946E" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

type FireflySectionProps = {
  variant: "firefly" | "fireflySmall";
}

const FireflySection: React.FC<FireflySectionProps> = ({ variant }) => {
  useEffect(() => {
    const fireflies = document.querySelectorAll(`.${variant}`) as NodeListOf<HTMLElement>;

    const VIEWPORT_WIDTH = 100;
    const VIEWPORT_HEIGHT = 65;
    const X_MARGIN = 5;
    const Y_MARGIN = 5;
    const DURATION = variant === "firefly" ? 45 : 30; // seconds for the animation duration

    fireflies.forEach((firefly) => {
      const startX = Math.random() * (VIEWPORT_WIDTH - X_MARGIN);
      const startY = Math.random() * (VIEWPORT_HEIGHT - Y_MARGIN);

      firefly.style.left = `${startX}vw`;
      firefly.style.top = `${startY}vw`;

      // Randomize direction, but constrain to stay within the viewport
      const maxXMove = Math.min(startX, VIEWPORT_WIDTH - startX - X_MARGIN);
      const maxYMove = Math.min(startY, VIEWPORT_HEIGHT - startY - Y_MARGIN);
      const endX = startX + (Math.random() - 0.5) * maxXMove * 2;
      const endY = startY + (Math.random() - 0.5) * maxYMove * 2;

      // TODO: this is a hacky way to prevent duplicate keyframes
      // should probably not use JS to modify innerHTML and append elements to the document
      const keyframesName = `move-${uuidv4()}`;
      const keyframes = `
        @keyframes ${keyframesName} {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(${endX - startX}vw, ${endY - startY}vw);
          }
        }
      `;

      const styleElement = document.createElement("style");
      styleElement.innerHTML = keyframes;
      document.head.appendChild(styleElement);

      firefly.style.animation = `${keyframesName} ${DURATION}s ease-in-out infinite, glow 2s ease-in-out infinite alternate`;
    });
  }, [variant]);

  const fireflies = Array.from({ length: 15 }, (_, index) => (
    <Firefly key={index} className={variant} />
  ));

  return <div className="firefly-container">{fireflies}</div>;
};

export default FireflySection;
