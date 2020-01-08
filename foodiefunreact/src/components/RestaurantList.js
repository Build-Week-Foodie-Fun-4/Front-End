import React from 'react';

import { StyledH1, StyledText, StyledCard, StyledContainer } from '../Styles/Style';

import axiosWithAuth from './axiosWithAuth';

const RestaurantList = (props) => {
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
        <StyledText>Name: Adam's Burgers</StyledText>
        <StyledText>Cuisine: Burgers</StyledText>
        {/* <StyledText>Address: 1000 Main St.</StyledText> */}
        <StyledText>City: Columbia</StyledText>
        <StyledText>State: Missouri</StyledText>
        {/* <StyledText>Zip: 65203</StyledText> */}
      </StyledCard>

      <StyledCard className='restaurantCard'>
        <StyledText>Name: Adam's Tacos</StyledText>
        <StyledText>Cuisine: Tacos</StyledText>
        {/* <StyledText>Address: 1001 Main St.</StyledText> */}
        <StyledText>City: Columbia</StyledText>
        <StyledText>State: Missouri</StyledText>
        {/* <StyledText>Zip: 65203</StyledText> */}
      </StyledCard>

      <StyledCard className='restaurantCard'>
        <StyledText>Name: Adam's Pizza</StyledText>
        <StyledText>Cuisine: Pizza</StyledText>
        {/* <StyledText>Address: 1002 Main St.</StyledText> */}
        <StyledText>City: Columbia</StyledText>
        <StyledText>State: Missouri</StyledText>
        {/* <StyledText>Zip: 65203</StyledText> */}
      </StyledCard>
      </StyledContainer>
      
    </div>
  )
}

// const mapStateToProps = state => {
//   return{
//     userID: state.userID
//   };
// };

export default RestaurantList;

// export default connect(
//   mapStateToProps
// )(RestaurantList);
