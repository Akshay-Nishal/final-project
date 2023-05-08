import React, { useState, useEffect } from 'react';

function DropdownHamburger() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleBodyClick(event) {
      // Close the dropdown menu if the user clicks outside of it
      if (isOpen && !event.target.closest('.dropdown-menu')) {
        setIsOpen(false);
      }
    }

    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [isOpen]);

  function handleToggleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggleClick}>
        <span className="hamburger-icon">Click Me</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
            <p>AAA</p>
            <p>AAA</p>
            <p>AAA</p>
            <p>AAA</p>
            <p>AAA</p>
        </div>
      )}
    </div>
  );
}

export default DropdownHamburger
