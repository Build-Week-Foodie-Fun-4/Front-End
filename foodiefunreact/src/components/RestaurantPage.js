import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { StyledH1, StyledText, StyledContainer } from '../Styles/Style';

import { getRestaurants } from './../actions/restaurantActions';

const RestaurantPage = (props) => {
  useEffect(() => {
    console.log('useEffect in RestaurantPage fires')
  }, []);
  console.log('props in RestaurantList', props)

  return(
    <div>
      <StyledH1>Your restaurant details:</StyledH1>
      <StyledContainer>

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
})(RestaurantPage);
