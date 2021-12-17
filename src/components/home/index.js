import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Alert, Button, Container, Form, Image } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Login from '../../assets/images/login.png'
import UsersService from '../../services/users';

import '../../styles/home.scss';

function HomeLogin(props){

  const [crmv, setCrmv] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToRegister, setRedirectToRegister] = useState(false);
  const [redirectToPets, setRedirectToPets] = useState(false);
  const [ error, setError] = useState(false);

  if(redirectToRegister == true)
    return <Redirect to={{ pathname: "/register"}} />
  else if(redirectToPets == true)
    return <Redirect to={{ pathname: "/pets"}} />

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UsersService.login({crmv: crmv,password: password});
      setRedirectToPets(true);
    } catch (error) {
      setError(true)
    }
  }
  

  return(
    <Container className="wrapper">
      <div className="logo">
        <img src={Login} />
      </div>
      
      { error && <Alert variant="danger">Login e/ou senha invalido</Alert>}
      <Form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <FontAwesomeIcon icon={faUser} />
          <Form.Control 
            type="text" 
            placeholder="CRMV"
            name="crmv"
            value={crmv} 
            onChange={e => setCrmv(e.target.value)}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          
          <FontAwesomeIcon icon={faKey} />
          <Form.Control 
            type="password" 
            placeholder="Senha" 
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button className="btn mt-3" onClick={e => handleSubmit(e)}>Entrar</Button>
      </Form>
      
      <div className="text-center fs6"><a href='' onClick={e => setRedirectToRegister(true)}>Cadastro</a> ou <a href='#'>Contato</a> </div>
    </Container>
  )
}

export default HomeLogin