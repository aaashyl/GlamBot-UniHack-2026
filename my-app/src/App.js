import './App.css';

import WelcomePage from "./components/WelcomePage/WelcomePage";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (

    <div classname="App">
      {/* navigation bar at top of page*/}
      <NavigationBar />

      {/* welcome message */}
      <WelcomePage />
    </div>
  );
}

export default App;

