import { createStore } from 'redux'
import HomeReducer from './Home/reducer';

const HomeStore = createStore(HomeReducer)
export default HomeStore
