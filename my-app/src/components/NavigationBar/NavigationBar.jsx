import React from 'react';
import './NavigationBar.css';
import person from '../../assets/person.png';

// create navbar
const NavigationBar = () => {
  return (
    // logo
    <nav className="navbar">
      <div className="nav-logo">GlamBot</div>
      
      {/* links */}
      <div className="nav-right">
        <ul className="nav-links">
          <li><link rel="../" href="" />  Discovery</li>
          <li>Routines</li>
          <li className="nav-heart">
            &#9825; {/* heart */}
          </li>
          <li className="nav-icon-item">
            <img src={person} alt="person" className="nav-profile-img"/> {/* profile img */}
          </li> 
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;