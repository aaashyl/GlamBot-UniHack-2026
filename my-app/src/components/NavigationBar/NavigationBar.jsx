import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="nav-wrapper">
      <nav className="navbar">
        <div className="navbar-inner">
          <span className="nav-logo">GlamBot</span>
          <div className="nav-links">
            
            <NavLink 
              to="/HomePage" 
              activeClassName="nav-active"
            >
              Home
            </NavLink>

            <NavLink 
              to="/ProductDiscoveryPage" 
              activeClassName="nav-active"
            >
              Discovery
            </NavLink>

            <NavLink 
              to="/SavedPaged" 
              activeClassName="nav-active"
            >
              Saved <span className="heart">♥</span>
            </NavLink>


            {/* Profile Icon */}
            <NavLink to="/SignInPage" activeClassName="nav-active" className="nav-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </NavLink>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;