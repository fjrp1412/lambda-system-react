import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../components';
import { postSignUp } from '../../utils/api';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const { data, request } = await postSignUp({ formData });

    if (request.ok) {
      navigate('/login');
    }
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
