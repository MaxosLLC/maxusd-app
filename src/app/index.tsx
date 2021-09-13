import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Assets } from './pages/Assets';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/assets" component={Assets}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
