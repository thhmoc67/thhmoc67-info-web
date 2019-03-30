import React from 'react'
import PropTypes from 'prop-types'
import './Image.scss'

const Image = ({ src, alt, circle }) => (
  <img className={`Image ${circle ? 'circle' : ''}`} src={src} alt={alt} />
)

Image.defaultProps = {
  circle: false,
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  circle: PropTypes.bool,
}

export default Image
