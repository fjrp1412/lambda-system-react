import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../components';
import { createClient } from '../../utils/api';
import { AppContext } from '../../context';

function FormClient() {
  const { token } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const { data, request } = await createClient({ formData, token });

    if (request.ok) {
      navigate('/clients');
    }
  };
  return (
    <Form
      title="Registro de cliente"
      fields={[
        { fieldName: 'name', type: 'text' },
        { fieldName: 'email', type: 'text' },
        { fieldName: 'identity_card', type: 'text' },
        { fieldName: 'address', type: 'text' },
        { fieldName: 'phone', type: 'text' },
        { fieldName: 'image', type: 'text' },
      ]}
      handleSubmit={handleSubmit}
    />
  );
}

export { FormClient };
