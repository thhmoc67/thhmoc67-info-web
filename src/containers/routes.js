import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './Home'
import Header from './Header'
import Topics from './Topics'
import HomeStore from './store'
import './App.css'

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Provider store={HomeStore}>
        <Route exact path="/" component={Home} />
      </Provider>
      {/* <Route path="/about" component={About} /> */}
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

export default hot(module)(App)
