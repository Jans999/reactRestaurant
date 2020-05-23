import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Switch,
  Route,
} from "react-router-dom";

// Components
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'
import TableBooking from './components/TableBooking'

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/tableBooking">
          <TableBooking />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
