import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import AppNavbar from './components/navbar';
import Routes from './routes';


import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <AppNavbar />
          <Routes />
        </Router>
    </div>
  );
}

export default App;
