import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

const Button = ({ children, drawBorder, circle }) => {
  const newClassName = `btn ${drawBorder ? 'draw-border' : ''}${circle ? 'btn-circle' : ''}`
  return (
    <div className={newClassName} type="button">{children}</div>
  )
}

Button.defaultProps = {
  drawBorder: false,
  circle: false,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  drawBorder: PropTypes.bool,
  circle: PropTypes.bool,
}

export default Button
