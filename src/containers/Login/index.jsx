import React from 'react';
import { Form } from '../../components';
import { postLogin } from '../../utils/api';

function Login() {
  const handleSubmit = async () => {
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const { data, request } = await postLogin(formData);

    console.log(data);
    console.log(request);
  };

  return (
    <Form
      title="Iniciar Sesion"
      fields={[
        { fieldName: 'email', type: 'text' },
        { fieldName: 'password', type: 'text' },
      ]}
      handleSubmit={handleSubmit}
    />
  );
}

export { Login };
