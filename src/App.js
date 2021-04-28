import React from "react";
import About from "./About/About";
import Home from "./About/Home";
import { Route, Link } from "react-router-dom";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/User" component={User} />
    </div>
  );
}

export default App;
