import axiosWithAuth from '../components/axiosWithAuth';
import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL } from './types';

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

export const register = (credentials, history) => dispatch => {
  axiosWithAuth()
    .post('/auth/register', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: REGISTER_SUCCESS, payload: res });
      history.push('/dashboard');
      console.log('response in userActions register: ', res)
    })
    .catch(error => dispatch({ type: REGISTER_FAIL, payload: error}))
}
