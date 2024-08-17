import React, { useEffect } from 'react';
import './firefly.css';

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

const FireflySection: React.FC = () => {
  useEffect(() => {
    const fireflies = document.querySelectorAll('.firefly') as NodeListOf<HTMLElement>;

    fireflies.forEach((firefly, index) => {
      const startX = Math.random() * 100; // Random starting X position
      const startY = Math.random() * 100; // Random starting Y position

      firefly.style.left = `${startX}vw`;
      firefly.style.top = `${startY}vh`;

      const endX = Math.random() * 100; // Random ending X position
      const endY = Math.random() * 100; // Random ending Y position

      const duration = 60; // Set duration to 20 seconds for faster movement

      // Create unique keyframes for each firefly
      const keyframesName = `move-${index}`;
      const keyframes = `
        @keyframes ${keyframesName} {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(${endX - startX}vw, ${endY - startY}vh);
          }
        }
      `;

      // Insert the keyframes into a new style element to ensure it's correctly added
      const styleElement = document.createElement('style');
      styleElement.innerHTML = keyframes;
      document.head.appendChild(styleElement);

      // Apply the animation to the firefly
      firefly.style.animation = `${keyframesName} ${duration}s ease-in-out infinite, glow 2s ease-in-out infinite alternate`;
    });
  }, []);

  // Generate 15 Firefly components
  const fireflies = Array.from({ length: 15 }, (_, index) => (
    <Firefly key={index} className="firefly" />
  ));

  return (
    <div className="firefly-container">
      {fireflies}
    </div>
  );
};

export default FireflySection;
