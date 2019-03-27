import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './Home'
import Header from './Header'
import Topics from './Topics'
import HomeStore from './store'
import './App.css'
import envConfig from '../../config/envConfig'


const App = () => {
  const path = envConfig(process.env.NODE_ENV).publicPath
  console.log('process', process.env.NODE_ENV, path)
  return (
    <Router>
      <div className="app">
        <Header path={path} />
        <Provider store={HomeStore}>
          <Route exact path={`${path}`} component={Home} />
        </Provider>
        {/* <Route path="/about" component={About} /> */}
        <Route path={`${path}topics`} component={Topics} />
      </div>
    </Router>
  )
}

export default hot(module)(App)
