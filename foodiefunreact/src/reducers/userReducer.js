import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL } from './../actions';

const initialState = {
  token: localStorage.getItem('token'),
  isLoggedIn: false,
  isLoading: false,
  user_id: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
        isLoading: false,
        user_id: action.payload.user_id,
        username: action.payload.username
      }
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
        isLoading: false
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
        isLoading: false
      }
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
        isLoading: false
      }
    default: 
      return state;
  }
}

export default userReducer;
