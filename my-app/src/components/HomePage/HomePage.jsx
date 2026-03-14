import { useState } from "react";
import "./HomePage.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import background from "../../assets/background.jpg";

function HomePage() {
  return (
    <div className="home-container">
        {/* NavigationBar*/}
        <NavigationBar />
        <div className="main-content">
            <div className="home-content">
            <h1 className="home-title">Welcome Back to GlamBot</h1>
            <p className="home-subtitle">
            Your personalized skincare dashboard is ready. 
            </p>
            <button className="view-routines-button">
            View My Routines
            </button>
        </div>

        </div>
    </div>
  );
}


export default HomePage;