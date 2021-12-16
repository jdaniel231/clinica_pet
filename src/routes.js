import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeLogin from './components/home';
import RegisterScreen from './screen/auth/register';
import PetsScreen from './screen/pets';

const Routes = () => (
  
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeLogin} />
        <Route exact path="/register" component={RegisterScreen} />
        <Routes exact path="/pets" component={PetsScreen} />
      </Switch>
    </BrowserRouter>
)

export default Routes;