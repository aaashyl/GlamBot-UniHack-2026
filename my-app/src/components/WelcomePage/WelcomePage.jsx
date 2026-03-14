import "./WelcomePage.css";
import background from "../../assets/background.jpg";
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="welcome-container">
      
      <img 
        src={background} 
        alt="background" 
        className="background-image"
      />

      <div className="welcome-content">
        <h1 className="title">GlamBot</h1>

        <p className="subtitle">
          Lets solve your skincare needs....
        </p>

        <Link to="/SurveyPage">
          <button className="start-button">
            Get Started
          </button>
        </Link>
      </div>

    </div>
  );
}

export default WelcomePage;