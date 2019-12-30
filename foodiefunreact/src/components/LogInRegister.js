import React, { useState, useEffect } from 'react';
import axiosWithAuth from './axiosWithAuth';
import {StyledFormDiv, StyledInput, StyledButton} from '../Styles/Style';

const LoginRegister = props => {
  const [ credentials, setCredentials ] = useState({
    username: '',
    password: '',
    email: '',
    city: '',
    state: ''
  });
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ isFetching, setIsFetching ] = useState(false);

  useEffect(() => {
    if(sessionStorage.getItem('token')) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [])

  const login = event => {
    event.preventDefault();
    setIsFetching(true);

    axiosWithAuth()
      .post('login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        setIsFetching(false);
        props.history.push('/protected')
      })
      .catch(error => console.log(error.response))
  }

  const register = event => {
    event.preventDefault();
    setIsFetching(true);

    axiosWithAuth()
      .post('register', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        setIsFetching(false);
        props.history.push('/protected');
      })
      .catch(error => console.log(error.response))
  }

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  };

  return(
    <StyledFormDiv>
      <h1>Already registered?  Log in here!</h1>
      <form onSubmit={login}>
        <p>Username:</p>
        <StyledInput
          type='text'
          name='username'
          placeholder='User Name'
          value={credentials.username}
          onChange={handleChange}
        />
        <p>Password:</p>
        <StyledInput
          type='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={handleChange}
        />
        <br></br>
        <StyledButton>Log In</StyledButton>
        {/* {isFetching && 'logging in...'} */}
      </form>

      <h1>New user?  Register with your info here!</h1>
      <form onSubmit={register}>
        <p>Username:</p>
        <StyledInput
          name='username'
          type='text'
          placeholder='User Name'
          value={credentials.username}
          onChange={handleChange}
        />
        <p>Password:</p>
        <StyledInput
          type='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={handleChange}
        />
        <p>Email:</p>
        <StyledInput
          type='email'
          name='email'
          placeholder='Email'
          value={credentials.email}
          onChange={handleChange}
        />
        <p>City:</p>
        <StyledInput
          type='text'
          name='city'
          placeholder='City'
          value={credentials.city}
          onChange={handleChange}
        />
        <p>State:</p>
        <StyledInput
          type='text'
          name='state'
          placeholder='State'
          value={credentials.state}
          onChange={handleChange}
        />
        <br></br>
        <StyledButton>Register</StyledButton>
        {/* {isFetching && 'registering...'} */}
      </form>
    </StyledFormDiv>
  )
}

export default LoginRegister;
