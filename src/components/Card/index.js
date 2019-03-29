import React from 'react'
import PropTypes from 'prop-types'
import './card.scss'

const CardContainer = ({ title, subTitle }) => (
  <div className="cardContainer">
    <div className="title">{title}</div>
    <div className="subTitle">{subTitle}</div>
    <div className="buttons">
      <div className="webButton">web</div>
      <div className="codeButton">code</div>
    </div>
  </div>
)

CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

export default CardContainer
