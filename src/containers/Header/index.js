import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import homeIcon from '_assets/images/svg/webHouse.svg'
import './_header.scss'

const Header = ({ path }) => (
  <div className="headerMain">
    <div className="homeLink">
      <Link to={`${path}`}>
        <img src={homeIcon} alt="home icon" />
      </Link>
    </div>
    <div className="abloutLink">
      <Link to={`${path}about`}>About</Link>
    </div>
    <div>
      <Link to={`${path}topics`}>Topics</Link>
    </div>
  </div>
)

Header.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Header
