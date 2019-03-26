import React from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Topics = ({ match }) => {
  const Topic = () => (
    <h3>
      Requested Param:
      {match.params.id}
    </h3>
  )
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
}

Topics.defaultProps = { match: {} }

Topics.propTypes = {
  match: PropTypes.shape({ root: PropTypes.string }),
}

export default Topics
