import React from 'react'
import PropsTypes from '../../utils/propTypes'

const Image = ({ src, alt }) => (
  <img className="Image" src={src} alt={alt} />
)

Image.propTypes = {
  src: PropsTypes.string.isRequired,
  alt: PropsTypes.string.isRequired,
}

export default Image
