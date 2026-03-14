import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage/WelcomePage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ProductDiscoveryPage from './components/ProductDiscoveryPage';
import SavedProductsPage from './components/SavedProductsPage';

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

