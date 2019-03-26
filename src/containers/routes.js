import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import Header from './Header'
import Topics from './Topics'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}



export default hot(module)(App);
