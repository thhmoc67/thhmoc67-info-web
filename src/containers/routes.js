import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './Home'
import Header from './Header'
import Topics from './Topics'
import HomeStore from './store'
import './_app.scss'
import envConfig from '../../config/envConfig'

const App = () => {
  const { publicPath } = envConfig()
  return (
    <Router>
      <div className="app">
        <Header path={publicPath} />
        <div className="mainBody">
          <Provider store={HomeStore}>
            <Route exact path={`${publicPath}`} component={Home} />
          </Provider>
          {/* <Route path="/about" component={About} /> */}
          <Route path={`${publicPath}topics`} component={Topics} />
        </div>
      </div>
    </Router>
  )
}

export default hot(module)(App)
