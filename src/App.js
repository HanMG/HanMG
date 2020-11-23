import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage"
import AboutMePage from "./components/views/AboutMePage/AboutMePage"
import WorksPage from "./components/views/WorksPage/WorksPage"
import ContactPage from "./components/views/ContactPage/ContactPage"
import NavBar from "./components/views/NavBar/NavBar"
import Footer from "./components/views/Footer/Footer"


function App() {
  return (
    <Router>
      <NavBar />
      <div id="content">        
        <Switch>
          <Route exact path="/" component={LandingPage} />                      
          <Route path="/aboutme" component={AboutMePage} />                               
          <Route path="/works" component={WorksPage} />     
          <Route path="/contact" component={ContactPage} />                     
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
export default App;
