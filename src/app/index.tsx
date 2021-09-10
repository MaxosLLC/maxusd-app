import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/dashboard" component={Dashboard}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
