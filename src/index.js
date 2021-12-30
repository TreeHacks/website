/**
 * @file TreeHacks homepage containing all the components
 * @author TreeHacks Tech Team
 */


// Import react packages
import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router  
} from "react-router-dom";

// Import custom react components
import Navbar from "./js/navbar.jsx";
import Home from "./js/home.jsx";
import About from "./js/about.jsx";
import Challenges from "./js/challenges.jsx";
// import Application from "./js/application.jsx";
import Projects from "./js/projects.jsx";
import FAQ from "./js/faq.jsx";
import Sponsors from "./js/sponsors.jsx";
import Footer from "./js/footer.jsx";
// import Team from "./js/team.jsx";

// Import content
import "./favicons/favicons";
import "./index.scss";

/**
 * The main function that renders the website
 * @returns {HTMLDivElement} HTML `div` tag containing the website components
 */
function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Challenges />
      {/*<Application />*/}
      <Projects />
      <FAQ />
      <Sponsors />
      <Footer />
      {/* <Team /> */}
    </div>
  );
}

/**
 * Create customized redirects
 * @param {String} from Source path
 * @param {String} to Destination path
 * @returns {Route} HTML `Route` tag redirecting from `from` to `to`
 * @see react-router-dom package
 */
function CustomRedirect({ from, to }) {
  return (
    <Route
      exact
      path={from}
      component={() => {
        window.location = to;
        return null;
      }}
    />
  );
}

/**
 * React router with custom redirects for the homepage
 * @returns {Router} HTML `Router` tag containing calls to `CustomRedirect`
 * @see {@link CustomRedirect}
 */
function App() {
  return (
    <Router>
      <Switch>
        {/* <CustomRedirect
          from="/slack"
          to="https://join.slack.com/t/treehacks-2019/shared_invite/enQtNTE5ODY0MDI2NjQ3LWI2YjhlYTU3OTE1ODcyMTdmZWYzYWVjY2NjNzQ2YTBiZDY5YWYwYzhkMDhlZTBmNmNmMzMzZWYxM2QwMTMxMmI"
        />
        <CustomRedirect
          from="/volunteer"
          to="https://goo.gl/forms/pZURr2kMSKwuFar42"
        />
        <CustomRedirect
          from="/join"
          to="https://treehacks.typeform.com/to/rK08ej"
        /> */}
        <CustomRedirect
          from="/match"
          to="https://treehacks.typeform.com/to/ZmcLkzFq"
        />
        <CustomRedirect
          from="/judge"
          to="https://treehacks.typeform.com/to/QyaH8I"
        />
        <CustomRedirect
          from="/mentor"
          to="https://treehacks.typeform.com/to/OSt3yo"
        />
        <CustomRedirect
          from="/code-of-conduct"
          to="https://github.com/TreeHacks/policies/blob/master/code-of-conduct.md"
        />
        <CustomRedirect
          from="/privacy-policy"
          to="https://github.com/TreeHacks/policies/blob/master/privacy-policy.md"
        />
        <Route exact path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

// Render the TreeHacks website
ReactDOM.render(<App />, document.getElementById("root"));
