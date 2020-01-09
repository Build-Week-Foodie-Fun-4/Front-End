import axiosWithAuth from '../components/axiosWithAuth';

import {
  FETCH_RESTAURANT_START,
  FETCH_RESTAURANT_SUCCESS,
  FETCH_RESTAURANT_FAILURE,
  ADD_RESTAURANT_START,
  ADD_RESTAURANT_SUCCESS,
  ADD_RESTAURANT_FAILURE
} from '../actions';

export const getRestaurants = () => dispatch => {
  dispatch({ type: FETCH_RESTAURANT_START })
  axiosWithAuth
    .get('user/3/restaurants')
    .then(response => {
      dispatch({type: FETCH_RESTAURANT_SUCCESS, payload: response })
      console.log('fetch result in restaurantActions: ', response)
    })
    .catch(error => {
      console.log('error in getRestaurants in restaurantActions:', error);
      dispatch({ type: FETCH_RESTAURANT_FAILURE, payload: error.response })
    })
}

export const addRestaurant = (restaurantInfo, history) => dispatch => {
  dispatch({ type: ADD_RESTAURANT_START })
  axiosWithAuth
    .post('user/3/restaurants', restaurantInfo)
    .then(res => {
      dispatch({ type: ADD_RESTAURANT_SUCCESS, payload: res });
      history.push('/dashboard')
      console.log('Response in restaurantActions: ', res)
    })
    .catch(error => dispatch({ type: ADD_RESTAURANT_FAILURE, payload: error }))
}
