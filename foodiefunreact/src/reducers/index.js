// Index for reducers

import userReducer from './userReducer';
import restaurantReducer from './restaurantReducer';
import menuItemReducer from './menuItemReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  restaurantReducer,
  userReducer,
  menuItemReducer
})

export default rootReducer;
