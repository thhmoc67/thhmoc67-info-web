import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '_components/Button'
import profileImg from '_assets/images/jpeg/profile.jpg'
import Image from '_components/Image'
import { add } from './actions'
import './_home.scss'

const HomeContainer = ({ handleAdd }) => (
  <div className="Home">
    <div>
      {/* <Image circle src={profileImg} alt="thhmoc67" /> */}
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
