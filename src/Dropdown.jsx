// Dropdown.js
import React from 'react';
import './Dropdown.css';

const Dropdown = ({ title, children, isOpen, onClick, className }) => {
  const contentClass = isOpen ? 'dropdown-content open' : 'dropdown-content';
  const toggleChar = isOpen ? '<' : '>'; // This will change the character

  return (
    <div className={`dropdown ${className}`}>
      <button className="dropdown-trigger font-CerealXBd text-xl text-white" onClick={onClick}>
        {title} {toggleChar} {/* Add the dynamic character here */}
      </button>
      <div className={contentClass}>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;