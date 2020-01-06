import React from 'react';
import { NavLink } from 'react-router-dom';

import { StyledH1, StyledButton } from '../Styles/Style';

const UserDashboard = props => {
  console.log('props in UserDashboard: ', props)

  return(
    <div>
      <StyledH1>Welcome to the User Dashboard!</StyledH1>
      <NavLink exact to='/addnewrestaurant'><StyledButton>Add a new restaurant</StyledButton></NavLink>

    </div>
  )
}

export default UserDashboard;
