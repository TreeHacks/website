import React, { useState } from 'react';
import Dropdown from './Dropdown';
import dropdownData from './data'; // Import your data

const DropdownBox = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <div className="dropdown_box">
      {dropdownData.map((item) => {
        // Apply smaller bottom margin if any dropdown is open
        const dropdownClass = `text-justify font-CerealBd text-white ${openDropdown ? 'mb-2' : 'mb-8'}`;

        return (
          <Dropdown
            key={item.title}
            title={item.title}
            isOpen={openDropdown === item.title}
            onClick={() => toggleDropdown(item.title)}
            className={dropdownClass}
          >
            {item.content}
          </Dropdown>
        );
      })}
    </div>
  );
};

export default DropdownBox;
