import React, { useState } from 'react';
import {StyledFormDiv, StyledInput, StyledButton, StyledLabel, StyledH1} from '../Styles/Style';

import { connect } from 'react-redux';
import { addRestaurant } from './../actions';

const AddNewRestaurant = props => {
  const [ restaurantInfo, setRestaurantInfo ] = useState({
    user_id: 3,
    restaurant_name: '',
    cuisine: '',
    street_address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = event => {
    setRestaurantInfo({
      ...restaurantInfo,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addRestaurant(restaurantInfo, props.history);
  }

  return(
    <StyledFormDiv>
      <StyledH1>Add a New Restaurant!</StyledH1>
      <form onSubmit={handleSubmit}>
        <StyledLabel htmlFor='restaurant_name'>Restaurant Name:</StyledLabel>
        <StyledInput 
          id='restaurant_name'
          type='text'
          name='restaurant_name'
          placeholder='Restaurant Name'
          value={restaurantInfo.restaurant_name}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='cuisine'>Cuisine:</StyledLabel>
        <StyledInput 
          id='cuisine'
          type='text'
          name='cuisine'
          placeholder='Cuisine Type'
          value={restaurantInfo.cuisine}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='street_address'>Street Address:</StyledLabel>
        <StyledInput 
          id='street_address'
          type='text'
          name='street_address'
          placeholder='Street Address'
          value={restaurantInfo.street_address}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='city'>City:</StyledLabel>
        <StyledInput 
          id='city'
          type='text'
          name='city'
          placeholder='City'
          value={restaurantInfo.city}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='state'>State:</StyledLabel>
        <StyledInput 
          id='state'
          type='text'
          name='state'
          placeholder='State'
          value={restaurantInfo.state}
          onChange={handleChange}
        />
        <StyledLabel htmlFor='zip'>Zip Code:</StyledLabel>
        <StyledInput 
          id='zip'
          type='text'
          name='zip'
          placeholder='Zip'
          value={restaurantInfo.zip}
          onChange={handleChange}
        />
        {/* <StyledLabel htmlFor='restaurantPhone'>Phone Number:</StyledLabel>
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
        /> */}
        <br></br>
        <StyledButton>Submit New Restaurant Info</StyledButton>
      </form>
    </StyledFormDiv>
  )
}

// export default AddNewRestaurant;

export default connect(null, { addRestaurant })(AddNewRestaurant)
