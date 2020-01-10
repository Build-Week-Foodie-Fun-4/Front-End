import React from 'react';
import { NavLink } from 'react-router-dom';

import { StyledH1, StyledButton } from '../Styles/Style';

import RestaurantList from './RestaurantList';
import { connect } from 'react-redux';

import { getRestaurants } from './../actions/restaurantActions';

const UserDashboard = (props) => {
  return(
    <div>
      <StyledH1>Welcome to the User Dashboard!</StyledH1>
      {/* <StyledH1>Welcome to the User Dashboard, {props.username}!  Your user id is: {props.user_id}</StyledH1> */}
      <NavLink exact to='/addnewrestaurant'><StyledButton>Add a new restaurant</StyledButton></NavLink>

      <div className='restaurantList'>
        <RestaurantList />
      </div>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     username: state
//   }
// }

// export default connect(mapStateToProps, {
//   UserDashboard
// })(UserDashboard);

export default UserDashboard;
