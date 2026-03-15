import "./HomePage.css";
// You can keep the same background or import a different one later
import background from "../../assets/background.jpg"; 

function HomePage() {
  return (
    <div className="home-container">
      
      <img 
        src={background} 
        alt="background" 
        className="home-background-image"
      />

      <div className="home-content">
        <h1 className="home-title">Welcome Back to GlamBot</h1>

        <p className="home-subtitle">
          Your personalized skincare dashboard is ready. 
        </p>

        {/* This could eventually lead to the routines or discovery page */}
        <button className="view-routines-button">
          View My Routines
        </button>
      </div>

    </div>
  );
}

export default HomePage;