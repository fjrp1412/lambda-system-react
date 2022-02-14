import React from 'react';
import { Form } from '../../components';

function Login() {
  return (
    <Form
      title="Iniciar Sesion"
      fields={[
        { fieldName: 'Email', type: 'text' },
        { fieldName: 'Password', type: 'text' },
      ]}
    />
  );
}

export { Login };
