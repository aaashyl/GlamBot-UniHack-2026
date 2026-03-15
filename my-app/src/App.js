import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import WelcomePage from "./components/WelcomePage/WelcomePage";
import SurveyPage from "./components/SurveyPage/SurveyPage";
import HomePage from "./components/HomePage/HomePage";
import RoutinePage from "./components/RoutinePage/RoutinePage";
import ProductDiscoveryPage from "./components/ProductDiscoveryPage/ProductDiscoveryPage";
import SavedPage from "./components/SavedProductsPage/SavedPage";
import SignInPage from "./components/SignInPage/SignInPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>

          <Route exact path="/" component={WelcomePage} />

          <Route path="/SurveyPage" component={SurveyPage} />

          <Route path="/HomePage" component={HomePage} />

          <Route path="/RoutinePage" component={RoutinePage} />

          <Route path="/ProductDiscoveryPage" component={ProductDiscoveryPage} />

        {/* Sign In Page path ! */}
        <Route path="/SignInPage" component={SignInPage} />

        {/* Sign Up Page path ! */}
        <Route path="/SignUpPage" component={SignUpPage} />

          <Route path="/SavedPage" component={SavedPage} />

        </Switch>

      </div>
    </Router>
  );
}

export default App;