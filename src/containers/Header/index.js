import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = ({ path }) => (
  <div className='headerMain'>
    <div>
      <Link to={`${path}`}>Home</Link>
    </div>
    <div>
      <Link to={`${path}about`}>About</Link>
    </div>
    <div>
      <Link to={`${path}topics`}>Topics</Link>
    </div>
  </div>
)

Header.propTypes = {
  path: PropTypes.string.isRequired
}

export default Header
