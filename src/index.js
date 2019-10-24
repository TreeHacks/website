import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./js/navbar.jsx";
import Home from "./js/home.jsx";
import Challenges from "./js/challenges.jsx";
import About from "./js/about.jsx";
import Application from "./js/application.jsx";
import Projects from "./js/projects.jsx";
import FAQ from "./js/faq.jsx";
import Sponsors from "./js/sponsors.jsx";
import Footer from "./js/footer.jsx";
// import Team from "./js/team.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./favicons/favicons";
import "./index.scss";

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

ReactDOM.render(<App />, document.getElementById("root"));
