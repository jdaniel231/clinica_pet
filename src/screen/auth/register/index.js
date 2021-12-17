import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import RegisterForm from '../../../components/auth/register_form';

const RegisterScreen = () => (
<Fragment>    
    <Container className="wrapper-register">
      <h4 className="text-center">Formulario de cadastro</h4>
      <RegisterForm />
    </Container>
  </Fragment>
)

export default RegisterScreen;