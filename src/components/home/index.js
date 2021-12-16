import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Form, Image } from 'react-bootstrap';

import Login from '../../assets/images/login.png'

import '../../styles/home.scss';

function HomeLogin(props){
  return(
    <Container className="wrapper">
      <div className="logo">
        <img src={Login} />
      </div>
      <Form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <FontAwesomeIcon icon={faUser} />
          <Form.Control type="text" placeholder="CRMV" />
        </div>
        <div className="form-field d-flex align-items-center">
          
          <FontAwesomeIcon icon={faKey} />
          <Form.Control type="text" placeholder="Senha" />
        </div>
        <Button className="btn mt-3">Entrar</Button>
      </Form>
      <div className="text-center fs6"><a href='#'>Cadastro</a> ou <a href='#'>Contato</a> </div>
    </Container>
  )
}

export default HomeLogin