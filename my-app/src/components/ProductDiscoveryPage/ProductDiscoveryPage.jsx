import './ProductDiscoveryPage.css';
import background from "../../assets/background.jpg";

function ProductDiscoveryPage() {
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

        <button className="start-button">
          Get started →
        </button>
      </div>

    </div>
  );
}

export default WelcomePage;

