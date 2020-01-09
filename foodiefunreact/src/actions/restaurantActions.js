import axiosWithAuth from '../components/axiosWithAuth';

import { useDispatch } from 'react-redux';

export const FETCH_RESTAURANT_START = 'FETCH_RESTAURANT_START';
export const FETCH_RESTAURANT_SUCCESS = 'FETCH_RESTAURANT_SUCCESS';
export const FETCH_RESTAURANT_FAILURE = 'FETCH_RESTAURANT_ FAILURE';

export const getRestaurants = () => {
  const dispatch = useDispatch();
  dispatch({ type: FETCH_RESTAURANT_START })
  axiosWithAuth
    .get('user/3/restaurants')
    .then(response => {
      dispatch({type: FETCH_RESTAURANT_SUCCESS, payload: response })
      console.log('fetch result in restaurantActions: ', response)
    })
    .catch(error => {
      dispatch({ type: FETCH_RESTAURANT_FAILURE, payload: error.response })
    })
}
