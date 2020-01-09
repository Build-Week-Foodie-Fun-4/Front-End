import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { StyledH1, StyledText, StyledCard, StyledContainer } from '../Styles/Style';

import { getRestaurants } from '../actions';

const RestaurantList = (props) => {
  useEffect(() => {
    props.getRestaurants();
  }, []);
  
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

// export default RestaurantList;

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants.restaurants,
  }
}

export default connect(mapStateToProps, {
  getRestaurants
})(RestaurantList);
