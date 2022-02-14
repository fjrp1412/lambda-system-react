import React from 'react';
import { Form } from '../../components';
import { postSignUp } from '../../utils/api';

function SignUp() {
  const handleSubmit = async () => {
    const form = document.getElementById('form');
    const formData = new FormData(form);

    const { data, request } = await postSignUp(formData);

    console.log(data);
    console.log(request);
  };

  return (
    <Form
      title="Registrar Usuario"
      fields={[
        { fieldName: 'email', type: 'text' },
        { fieldName: 'password', type: 'text' },
        { fieldName: 'name', type: 'name' },
        { fieldName: 'identity_card', type: 'text' },
      ]}
      handleSubmit={handleSubmit}
    />
  );
}

export { SignUp };
