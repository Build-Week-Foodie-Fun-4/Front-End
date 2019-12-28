import React, { useState, useEffect } from 'react';
import axiosWithAuth from './axiosWithAuth';

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
    <div>
      <h1>Already registered?  Log in here!</h1>
      <form onSubmit={login}>
        <p>Username:</p>
        <input
          type='text'
          name='username'
          placeholder='User Name'
          value={credentials.username}
          onChange={handleChange}
        />
        <p>Password:</p>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={handleChange}
        />
        <br></br>
        <button>Log In</button>
        {/* {isFetching && 'logging in...'} */}
      </form>

      <h1>New user?  Register with your info here!</h1>
      <form onSubmit={register}>
        <p>Username:</p>
        <input
          name='username'
          type='text'
          placeholder='User Name'
          value={credentials.username}
          onChange={handleChange}
        />
        <p>Password:</p>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={handleChange}
        />
        <p>Email:</p>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={credentials.email}
          onChange={handleChange}
        />
        <p>City:</p>
        <input
          type='text'
          name='city'
          placeholder='City'
          value={credentials.city}
          onChange={handleChange}
        />
        <p>State:</p>
        <input
          type='text'
          name='state'
          placeholder='State'
          value={credentials.state}
          onChange={handleChange}
        />
        <br></br>
        <button>Register</button>
        {/* {isFetching && 'registering...'} */}
      </form>
    </div>
  )
}

export default LoginRegister;
