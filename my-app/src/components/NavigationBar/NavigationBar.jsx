import React from 'react';
import './NavigationBar.css';

// create navbar
const NavigationBar = () => {
  return (
    // logo
    <nav className="navbar">
      <div className="nav-logo">GlamBot</div>
      
      {/* links */}
      <div className="nav-right">
        <ul className="nav-links">
          <li>Discovery</li>
          <li>Routines</li>
        </ul>
        {/* Favourite and profile */}
        <div className="nav-icons">
          <span className="icon">♥</span> 
          <span className="icon">👤</span>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;