import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Topics from './Topics'
import './App.css'

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Route exact path="/" component={Home} />
      {/* <Route path="/about" component={About} /> */}
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

export default hot(module)(App)
