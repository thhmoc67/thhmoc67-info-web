import React from 'react'
import PropTypes from 'prop-types'
import Button from '_components/Button'
import './card.scss'

const CardContainer = ({ title, subTitle }) => (
  <div className="cardContainer">
    <div className="title">{title}</div>
    <div className="subTitle">{subTitle}</div>
    <div className="buttons">
      <Button>Live</Button>
      <Button>Code</Button>
    </div>
  </div>
)

CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

export default CardContainer
