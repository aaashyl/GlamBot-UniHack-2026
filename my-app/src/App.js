import './App.css';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage/WelcomePage";
import SurveyPage from "./components/SurveyPage/SurveyPage";
import HomePage from "./components/HomePage/HomePage";
import ProductDiscoveryPage from "./components/ProductDiscoveryPage/ProductDiscoveryPage";
import SavedPage from "./components/SavedProductsPage/SavedPage";
import SignInPage from "./components/SignInPage/SignInPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      {/* The Switch ensures only one route renders at a time */}
      <Switch>

        {/* Welcome Page is the default entry point */}
        <Route exact path="/" component={WelcomePage} />

        {/* Survey Page path */}
        <Route path="/SurveyPage" component={SurveyPage} />

        {/* Home Page path */}
        <Route path="/HomePage" component={HomePage} />

        {/* Saved Page path */}
        <Route path="/SavedPaged" component={SavedPage} />

        {/* Product Discovery Page path ! */}
        <Route path="/ProductDiscoveryPage" component={ProductDiscoveryPage} />

        {/* Sign In Page path ! */}
        <Route path="/SignInPage" component={SignInPage} />

        {/* Sign Up Page path ! */}
        <Route path="/SignUpPage" component={SignUpPage} />

      </Switch>
    </div>
  );
}

export default App;

