import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './components/navbar';
import ShoppingList from './components/shoppingList';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <div className="container">
        <ShoppingList />
      </div>
    </div>
  );
}

export default App;
