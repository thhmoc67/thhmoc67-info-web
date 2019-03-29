import React from 'react'
import Proptypes from 'prop-types'
import './button.scss'

const Button = ({ title }) => (
  <button className="btn draw-border" type="button">{title}</button>
)

Button.propTypes = {
  title: Proptypes.string.isRequired,
}

export default Button
