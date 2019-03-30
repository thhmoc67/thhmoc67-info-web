import React from 'react'
import Proptypes from 'prop-types'
import facebook from '_svg/facebook.svg'
import './button.scss'

const Button = ({ children }) => (
  <div className="btn draw-border" type="button">{children}</div>
)

Button.propTypes = {
  children: Proptypes.node.isRequired,
}

export default Button
