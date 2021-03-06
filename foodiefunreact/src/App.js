import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogInRegister from './components/LogInRegister';
import UserDashboard from './components/UserDashboard';
import PrivateRoute from './components/PrivateRoute';
import AddNewRestaurant from './components/AddNewRestaurant';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <Router>
      <div className="App">
        <PrivateRoute exact path='/dashboard' component={UserDashboard} />
        <PrivateRoute exact path='/addnewrestaurant' component={AddNewRestaurant} />
        <PrivateRoute exact path='/restaurantlist' component={RestaurantList} />
        <Route path='/login' component={LogInRegister} />
        <Route exact path='/' component={LogInRegister} />
      </div>
    </Router>
  );
}

export default App;
