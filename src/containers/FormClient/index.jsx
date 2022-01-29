import React from 'react';
import { Form } from '../../components/Form';
import { createClient } from '../../utils/api';

function FormClient() {
  const handleSubmit = async () => {
    const form = document.getElementById('form');
    const { data, request } = await createClient(form);
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
