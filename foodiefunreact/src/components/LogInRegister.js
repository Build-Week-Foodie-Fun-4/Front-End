import React, { useState } from 'react';
import {StyledFormDiv, StyledInput, StyledButton, StyledLabel, StyledH1} from '../Styles/Style';

import { connect } from 'react-redux';
import { login, register } from './../actions';

const LogInRegister = props => {
  const [ credentials, setCredentials ] = useState({
    username: '',
    password: '',
    email: '',
    city: '',
    state: '',
  });

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.login(credentials, props.history);
  }

  const handleRegister = event => {
    event.preventDefault();
    props.register(credentials, props.history)
  }

  return(
    <StyledFormDiv>
      <StyledH1>Already registered?  Log in here!</StyledH1>
      <form onSubmit={handleSubmit}>
        <StyledLabel htmlFor='username'>Username:</StyledLabel>
        <StyledInput
          id='username'
          type='text'
          name='username'
          placeholder='User Name'
          value={credentials.username}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='password'>Password:</StyledLabel>
        <StyledInput
          id='password'
          type='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={handleChange}
        />
        <br></br>
        <StyledButton>Log In</StyledButton>
      </form>

      <StyledH1>New user?  Register with your info here!</StyledH1>
      <form onSubmit={handleRegister}>
        <StyledLabel htmlFor='regUserName'>Username:</StyledLabel>
        <StyledInput
          id='regUserName'
          name='username'
          type='text'
          placeholder='User Name'
          value={credentials.username}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='regPassword'>Password:</StyledLabel>
        <StyledInput
          id='regPassword'
          type='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='regEmail'>Email:</StyledLabel>
        <StyledInput
          id='regEmail'
          type='email'
          name='email'
          placeholder='Email'
          value={credentials.email}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='city'>City:</StyledLabel>
        <StyledInput
          id='city'
          type='text'
          name='city'
          placeholder='City'
          value={credentials.city}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='state'>State:</StyledLabel>
        <StyledInput
          id='state'
          type='text'
          name='state'
          placeholder='State'
          value={credentials.state}
          onChange={handleChange}
        />
        <br></br>
        <StyledButton>Register</StyledButton>
      </form>
    </StyledFormDiv>
  )
}

export default connect(null, { login, register })(LogInRegister);
