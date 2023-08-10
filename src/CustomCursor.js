import React, { useState, useEffect } from 'react';
import './CustomCursor.css'; // Make sure to create this CSS file

//import cursorImage from './assets/rocketCursor.png';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
      <img src={require('./assets/rocketCursor.png')} alt="Custom Cursor" />
    </div>
  );
};

export default CustomCursor;
