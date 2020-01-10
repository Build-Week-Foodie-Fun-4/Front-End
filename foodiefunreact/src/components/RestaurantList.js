import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { Link, route } from 'react-router-dom';

import { StyledH1, StyledText, StyledCard, StyledContainer, StyledButton } from '../Styles/Style';

import { getRestaurants } from './../actions/restaurantActions';

const RestaurantList = (props) => {
  useEffect(() => {
    console.log('useEffect in RestaurantList fires')
    props.getRestaurants();
  }, []);
  console.log('props in RestaurantList: ', props)

  const restaurantsArray = props.restaurants.restaurantReducer.restaurants;
  console.log('restaurantsArray: ', restaurantsArray);

  const cardButtonClick = () => {
    console.log('card clicked!');
  }
  
  return(
    <div>
      <StyledH1>Your Restaurants:</StyledH1>
      <StyledContainer>
        {restaurantsArray.map(restaurant => {
          return(
            <StyledCard className='restaurantCard'>
              <StyledText key={restaurant.restaurant_id}>Name: {restaurant.restaurant_name}</StyledText>
              <StyledText key={restaurant.restaurant_id}>Cuisine: {restaurant.cuisine}</StyledText>
              <StyledText key={restaurant.restaurant_id}>City: {restaurant.city}</StyledText>
              <StyledButton onClick={cardButtonClick}>See full details</StyledButton>
            </StyledCard>
          )
        })}
      </StyledContainer>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    restaurants: state
  }
}

export default connect(mapStateToProps, {
  getRestaurants
})(RestaurantList);
