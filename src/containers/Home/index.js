import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '_components/Button'
import Image from '_components/Image'
import profileImg from '_assets/images/jpeg/profile.jpg'
import facebookIcon from '_assets/images/svg/facebook.svg'
import githubIcon from '_assets/images/svg/github.svg'
import behanceIcon from '_assets/images/svg/behance.svg'
import linkedInIcon from '_assets/images/svg/linkedin.svg'
import twitterIcon from '_assets/images/svg/twitter.svg'
import { add } from './actions'
import './_home.scss'

const HomeContainer = ({ handleAdd }) => (
  <div className="Home">
    <div className="profileContainer">
      <div className="social">
        <div className="socialLine line-1">
          <img src={facebookIcon} alt="facebook" />
          <div className="line" />
        </div>
        <div className="socialLine line-2">
          <img src={githubIcon} alt="facebook" />
          <div className="line" />
        </div>
        <div className="socialLine line-3">
          <img src={behanceIcon} alt="facebook" />
          <div className="line" />
        </div>
        <div className="socialLine line-4">
          <img src={linkedInIcon} alt="facebook" />
          <div className="line" />
        </div>
        <div className="socialLine line-5">
          <img src={twitterIcon} alt="facebook" />
          <div className="line" />
        </div>
      </div>

      <div className="profile">
        <Image circle src={profileImg} alt="thhmoc67" />
      </div>
    </div>
    <h1>hello home</h1>
    <Button value="show" type="button" onClick={handleAdd} title="button">Submit</Button>
  </div>
)

// ---------------props-------------------
HomeContainer.propTypes = {
  handleAdd: PropTypes.func.isRequired,
}
// ---------------------------------------

const mapState = state => state
const mapsDispatch = dispatch => ({
  handleAdd: () => {
    dispatch(add())
  },
})
const Home = connect(mapState, mapsDispatch)(HomeContainer)

export default Home
