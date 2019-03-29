import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { add } from './actions'
import Button from '../../components/Button'

const HomeContainer = ({ handleAdd }) => (
  <div>
    <h1>hello home</h1>
    <Button value="show" type="button" onClick={handleAdd} title="button" />
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
