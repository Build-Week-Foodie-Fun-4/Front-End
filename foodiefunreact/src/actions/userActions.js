// put userID and loggedIn into redux with action creator and reducer

import axiosWithAuth from '../components/axiosWithAuth';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const login = (credentials, history) => dispatch => {
  axiosWithAuth()
    .post('/auth/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res });
      history.push('/dashboard');
      console.log('response in userActions login: ', res)
    })
    .catch(error => dispatch({ type: LOGIN_FAIL, payload: error}))
};
