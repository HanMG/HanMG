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
import NotFoundPage from "./components/views/Commons/NotFoundPage"


function App() {
  return (
    <Router>
      <NavBar />
      <div id="content">        
        <Switch>
          <Route exact path="/react-portfolio/" component={LandingPage} />                      
          <Route path="react-portfolio/aboutme" component={AboutMePage} />                               
          <Route path="/react-portfolio/works" component={WorksPage} />     
          <Route path="/react-portfolio/contact" component={ContactPage} />        
          <Route path='*' component={NotFoundPage} />             
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
export default App;
