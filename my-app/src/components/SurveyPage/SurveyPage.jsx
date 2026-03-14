import "./SurveyPage.css";
import background from "../../assets/background.jpg";
import { Link } from 'react-router-dom';

function SurveyPage() {
  return (
    <div className="welcome-container">
      
      <img 
        src={background} 
        alt="background" 
        className="background-image"
      />

      <div className="welcome-content">
        <h1 className="title">GlamBot - Survey</h1>

        <p className="subtitle">
          Lets solve your skincare needs....
        </p>

        <Link to="/HomePage">
          <button className="start-button">
            Complete Survey
          </button>
        </Link>
      </div>

    </div>
  );
}

export default SurveyPage;