import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
