import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeLogin from './components/home';

const Routes = () => (
  
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeLogin} />
      </Switch>
    </BrowserRouter>
)

export default Routes;