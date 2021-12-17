import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/auth/private_route';
import HomeLogin from './components/home';
import RegisterScreen from './screen/auth/register';
import PetsScreen from './screen/pets/index';

const Routes = () => (
  
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeLogin} />
        <Route exact path="/register" component={RegisterScreen} />
        <PrivateRoute exact path="/pets" component={PetsScreen} />
      </Switch>
    </BrowserRouter>
)

export default Routes;