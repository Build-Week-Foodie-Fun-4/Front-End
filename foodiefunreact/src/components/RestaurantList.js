import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { StyledH1, StyledText, StyledCard, StyledContainer, StyledButton } from '../Styles/Style';

import { getRestaurants } from './../actions/restaurantActions';

const RestaurantList = (props) => {
  useEffect(() => {
    console.log('useEffect fires')
    props.getRestaurants();
  }, []);
  console.log('props in RestaurantList: ', props)
  
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
    restaurants: state,
  }
}

export default connect(mapStateToProps, {
  getRestaurants
})(RestaurantList);
