import { ADD_VALUE } from './constants';

const initialState = {
  title: 'Kind of Blue',
  artist: 'Miles Davis',
  year: 1959,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VALUE:
      return { ...state, published: true }
    default:
      return state
  }
}

export default reducer
