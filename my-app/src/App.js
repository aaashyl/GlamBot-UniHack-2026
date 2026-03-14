import './App.css';

import WelcomePage from "./components/WelcomePage/WelcomePage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from './components/HomePage/HomePage';

function App() {
  return (

    <div classname="App">
      {/* navigation bar at top of page*/}
      <NavigationBar />

      {/* welcome message */}
      <WelcomePage />
      {/* <WelcomePage /> */}
    </div>
  );
}

export default App;

