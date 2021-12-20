import React, { useState } from 'react';
import { Form, Nav, Navbar } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import UsersService from '../../../services/users';
import '../../../styles/dashboard.scss';

function HeaderLogged(props){

  const [redirectToHome, setRedirectToHome] = useState(false)

  const logOut = async () => {
    await UsersService.logout();
    setRedirectToHome(true);
  }

  if(redirectToHome == true)
    return <Redirect to={{ pathname: "/"}} />

  return(
      <Navbar className="navbar-dark bg-dark  sticky-top bg-dark flex-md-nowrap p-0 shadow " >
         <Navbar.Brand className="col-md-3 col-lg-2 me-0 px-3">ClinicaVet</Navbar.Brand>          
            <Form.Control className="form-control-dark w-100" placeholder="Pesquisar" />
          <Nav>
            <Nav.Item className="text-nowrap">
              <Nav.Link onClick={ e => logOut()} className="px-3">Sair</Nav.Link>
            </Nav.Item>
          </Nav>
          
      </Navbar>
  )
}

export default HeaderLogged;