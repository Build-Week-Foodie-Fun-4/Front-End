import React from 'react';

import { StyledH1, StyledText, StyledCard, StyledContainer } from '../Styles/Style';

import axiosWithAuth from './axiosWithAuth';

import { getRestaurants } from '../actions/index.js';

const RestaurantList = (props) => {
  // const getRestaurants = () => {
  //   // event.preventDefault();

  //   axiosWithAuth()
  //     .get('user/3/restaurants')
  //     .then(res => {
  //       console.log('response to get request in RestaurantList: ', res)
  //     })
  //     .catch(error => console.log(error.response))
  // }

  getRestaurants();

  return(
    <div>
      <StyledH1>Your Restaurants:</StyledH1>

      {/* <StyledContainer className='container'>
      <StyledCard className='restaurantCard'>
        <StyledText>Name: Adam's Burgers</StyledText>
        <StyledText>Cuisine: Burgers</StyledText>
      </StyledCard>
      </StyledContainer> */}
      
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
