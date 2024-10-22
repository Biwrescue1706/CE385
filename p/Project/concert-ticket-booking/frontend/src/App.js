import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ConcertDetail from './components/ConcertDetail';
import MyTickets from './components/MyTickets';
import AccountSettings from './components/AccountSettings';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/concert/:id" component={ConcertDetail} />
        <Route path="/my-tickets" component={MyTickets} />
        <Route path="/account-settings" component={AccountSettings} />
      </Switch>
    </Router>
  );
}

export default App;