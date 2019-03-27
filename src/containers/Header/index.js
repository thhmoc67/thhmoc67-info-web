import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = ({ path }) => (
  <ul className="app">
    <li>
      <Link to={`${path}`}>Home</Link>
    </li>
    <li>
      <Link to={`${path}about`}>About</Link>
    </li>
    <li>
      <Link to={`${path}topics`}>Topics</Link>
    </li>
  </ul>
)

Header.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Header
