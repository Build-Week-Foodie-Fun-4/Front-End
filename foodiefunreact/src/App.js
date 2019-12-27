import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogInRegister from './components/LogInRegister';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    // Temporary return.  Protected routes to be implemented asap, LogInRegister is rendering here to display for styling purposes.
    <div className="App">
      <LogInRegister />
    </div>
  );
}

export default App;
