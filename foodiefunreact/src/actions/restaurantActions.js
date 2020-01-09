import axiosWithAuth from '../components/axiosWithAuth';

import {
  FETCH_RESTAURANT_START,
  FETCH_RESTAURANT_SUCCESS,
  FETCH_RESTAURANT_FAILURE
} from '../actions';

export const getRestaurants = () => dispatch => {
  // const dispatch = useDispatch();
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
