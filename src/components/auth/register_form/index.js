import React, { Fragment, useState } from 'react';
import { Alert, Button, CloseButton, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import UsersService from '../../../services/users';

function RegisterForm () {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [crmv, setCrmv] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await UsersService.register({name: name,email: email,crmv: crmv, password: password});
      console.log('enviando ',  user)
      setRedirectToLogin(true);
    } catch (error) {
      setError(true);
      console.log('error', error )
    }
  }

  if(redirectToLogin)
    return <Redirect to={{pathname: "/"}} />

  return(
    <Fragment>
      <Form>
        <Form.Group>
          <Form.Control className="form-field d-flex align-items-center"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control className="form-field d-flex align-items-center"
            type="text"
            name="crmv"
            value={crmv}
            onChange={e => setCrmv(e.target.value)}
            placeholder="CRMV"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control className="form-field d-flex align-items-center"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control className="form-field d-flex align-items-center"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
          />
        </Form.Group>
        { error && <Alert variant="danger">Cadastro invalido</Alert>}
        <Button onClick={e => HandleSubmit(e)} className="btn mt-3">Cadastrar</Button>
        <Button onClick={e => setRedirectToLogin(true)} className="btn mt-3">Voltar</Button>
      </Form>
    </Fragment>
  )
}

export default RegisterForm;