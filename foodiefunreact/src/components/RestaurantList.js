import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { StyledH1, StyledText, StyledCard, StyledContainer } from '../Styles/Style';

import { getRestaurants } from './../actions/restaurantActions';

const RestaurantList = (props) => {
  useEffect(() => {
    console.log('useEffect fires')
    props.getRestaurants();
  }, []);
  console.log('props in RestaurantList: ', props)

  const restaurantsArray = props.restaurants.restaurantReducer.restaurants;
  console.log('restaurantsArray: ', restaurantsArray);
  
  return(
    <div>
      <StyledH1>Your Restaurants:</StyledH1>
      <StyledContainer>
        {restaurantsArray.map(restaurant => {
          return(
            <StyledCard className='restaurantCard'>
              <StyledText key={restaurant.restaurant_id}>Name: {restaurant.restaurant_name}</StyledText>
              <StyledText key={restaurant.restaurant_id}>Cuisine: {restaurant.cuisine}</StyledText>
              <StyledText key={restaurant.restaurant_id}>ID: {restaurant.id}</StyledText>
            </StyledCard>
          )
        })}
      </StyledContainer>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    restaurants: state,
  }
}

export default connect(mapStateToProps, {
  getRestaurants
})(RestaurantList);
