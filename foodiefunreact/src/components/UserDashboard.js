import React from 'react';
import { NavLink } from 'react-router-dom';

import { StyledH1, StyledButton } from '../Styles/Style';

import RestaurantList from './RestaurantList';
import { connect } from 'react-redux';

const UserDashboard = props => {
  return(
    <div>
      <StyledH1>Welcome to the User Dashboard!</StyledH1>
      {/* <StyledH1>Your userID is ${props.userID}</StyledH1> */}
      <NavLink exact to='/addnewrestaurant'><StyledButton>Add a new restaurant</StyledButton></NavLink>

      <div className='restaurantList'>
        <RestaurantList />
      </div>
    </div>
  )
}

export default UserDashboard;
