import React from 'react';

import { StyledH1, StyledCard, StyledContainer } from '../Styles/Style';

import axiosWithAuth from './axiosWithAuth';

const RestaurantList = () => {
  const getRestaurants = () => {
    // event.preventDefault();

    axiosWithAuth()
      .get('user/5/restaurants')
      .then(res => {
        console.log('response to get request in RestaurantList: ', res)
      })
      .catch(error => console.log(error.response))
  }

  // function call is commented out to prevent any server/data issues when loading list for styling purposes
  // getRestaurants();

  return(
    <div>
      <StyledH1>Your Restaurants:</StyledH1>

      <StyledContainer className='container'>
      <StyledCard className='restaurantCard'>
        <StyledH1>Name: Adam's Burgers</StyledH1>
        <StyledH1>Cuisine: Burgers</StyledH1>
        <StyledH1>Address: 1000 Main St.</StyledH1>
        <StyledH1>City: Columbia</StyledH1>
        <StyledH1>State: Missouri</StyledH1>
        <StyledH1>Zip: 65203</StyledH1>
      </StyledCard>

      <StyledCard className='restaurantCard'>
        <StyledH1>Name: Adam's Tacos</StyledH1>
        <StyledH1>Cuisine: Tacos</StyledH1>
        <StyledH1>Address: 1001 Main St.</StyledH1>
        <StyledH1>City: Columbia</StyledH1>
        <StyledH1>State: Missouri</StyledH1>
        <StyledH1>Zip: 65203</StyledH1>
      </StyledCard>

      <StyledCard className='restaurantCard'>
        <StyledH1>Name: Adam's Pizza</StyledH1>
        <StyledH1>Cuisine: Pizza</StyledH1>
        <StyledH1>Address: 1002 Main St.</StyledH1>
        <StyledH1>City: Columbia</StyledH1>
        <StyledH1>State: Missouri</StyledH1>
        <StyledH1>Zip: 65203</StyledH1>
      </StyledCard>
      </StyledContainer>
      
    </div>
  )
}

export default RestaurantList;