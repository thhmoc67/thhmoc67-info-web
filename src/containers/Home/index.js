import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { add } from './actions'

const Home = ({ handleAdd }) => (
  <div>
    <h1>hello home</h1>
    <button value="show" type="button" onClick={handleAdd}>sdas</button>
  </div>
)

Home.propTypes = {
  handleAdd: PropTypes.func.isRequired,
}

const mapState = state => state
const mapsDispatch = dispatch => ({
  handleAdd: () => {
    dispatch(add())
  },
})
const vHome = connect(mapState, mapsDispatch)(Home)

export default vHome
