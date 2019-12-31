import React, { useState } from 'react';
import axiosWithAuth from './axiosWithAuth';
import {StyledFormDiv, StyledInput, StyledButton, StyledLabel, StyledH1} from '../Styles/Style';

const AddNewRestaurant = props => {
  const [ restaurantInfo, setRestaurantInfo ] = useState({
    restaurantName: '',
    restaurantCuisine: '',
    restaurantStreet: '',
    restaurantCity: '',
    restaurantState: '',
    restaurantZip: '',
    restaurantPhone: '',
    restaurantURL: '',
    restaurantHours: '',
    restaurantOverallRating: '',
    restaurantPhoto: ''
  });

  const submitNewRestaurant = event => {
    event.preventDefault();

    axiosWithAuth()
    .post('newRestaurant', restaurantInfo)
    .then(res => {
      props.history.push('/restaurantPage')
    })
    .catch(error => console.log(error.response))
  }

  const handleChange = event => {
    setRestaurantInfo({
      ...restaurantInfo,
      [event.target.name]: event.target.value
    })
  };

  return(
    <StyledFormDiv>
      <StyledH1>Add a New Restaurant!</StyledH1>
      <form onSubmit={submitNewRestaurant}>
        <StyledLabel htmlFor='restaurantName'>Restaurant Name:</StyledLabel>
        <StyledInput 
          id='restaurantName'
          type='text'
          name='restaurantName'
          placeholder='Restaurant Name'
          value={restaurantInfo.restaurantName}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='restaurantCuisine'>Cuisine:</StyledLabel>
        <StyledInput 
          id='restaurantCuisine'
          type='text'
          name='restaurantCuisine'
          placeholder='Cuisine Type'
          value={restaurantInfo.restaurantCuisine}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='restaurantStreet'>Street Address:</StyledLabel>
        <StyledInput 
          id='restaurantStreet'
          type='text'
          name='restaurantStreet'
          placeholder='Street Address'
          value={restaurantInfo.restaurantStreet}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='restaurantCity'>City:</StyledLabel>
        <StyledInput 
          id='restaurantCity'
          type='text'
          name='restaurantCity'
          placeholder='City'
          value={restaurantInfo.restaurantCity}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='restaurantState'>State:</StyledLabel>
        <StyledInput 
          id='restaurantState'
          type='text'
          name='restaurantState'
          placeholder='State'
          value={restaurantInfo.restaurantState}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='restaurantZip'>Zip Code:</StyledLabel>
        <StyledInput 
          id='restaurantZip'
          type='text'
          name='restaurantZip'
          placeholder='Zip'
          value={restaurantInfo.restaurantZip}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='restaurantPhone'>Phone Number:</StyledLabel>
        <StyledInput 
          id='restaurantPhone'
          type='text'
          name='restaurantPhone'
          placeholder='Phone Number'
          value={restaurantInfo.restaurantPhone}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='restaurantURL'>Website Address:</StyledLabel>
        <StyledInput 
          id='restaurantURL'
          type='text'
          name='restaurantURL'
          placeholder='Website Address'
          value={restaurantInfo.restaurantURL}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='restaurantHours'>Hours:</StyledLabel>
        <StyledInput 
          id='restaurantHours'
          type='text'
          name='restaurantHours'
          placeholder='Hours'
          value={restaurantInfo.restaurantHours}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='restaurantOverallRating'>Overall Rating:</StyledLabel>
        <StyledInput 
          id='restaurantOverallRating'
          type='text'
          name='restaurantOverallRating'
          placeholder='Overall Rating'
          value={restaurantInfo.restaurantOverallRating}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='restaurantPhoto'>Photo:</StyledLabel>
        <StyledInput 
          id='restaurantPhoto'
          type='text'
          name='restaurantPhoto'
          placeholder='Photo'
          value={restaurantInfo.restaurantPhoto}
          onChange={handleChange}
        />
        <br></br>
        <StyledButton>Submit New Restaurant Info</StyledButton>
      </form>
    </StyledFormDiv>
  )
}

export default AddNewRestaurant;
