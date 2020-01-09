import {
  FETCH_RESTAURANT_START,
  FETCH_RESTAURANT_SUCCESS,
  FETCH_RESTAURANT_FAILURE,
  ADD_RESTAURANT_START,
  ADD_RESTAURANT_SUCCESS,
  ADD_RESTAURANT_FAILURE
} from '../actions';

const initialState = {
  restaurants: null,
  isFetching: false,
  error: ''
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANT_START:
      return{
        ...state,
        isFetching: true
      }
    case FETCH_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurants: action.payload,
        isFetching: false,
        error: ''
      }
    case FETCH_RESTAURANT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }

      case ADD_RESTAURANT_START:
        return{
          ...state,
          isFetching: true
        }
      case ADD_RESTAURANT_SUCCESS:
        return {
          ...state,
          restaurants: action.payload,
          isFetching: false,
          error: ''
        }
      case ADD_RESTAURANT_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        }
    default: 
      return state;
  }
};

export default restaurantReducer;
