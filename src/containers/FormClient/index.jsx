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
      fields={['name', 'email', 'identity_card', 'address', 'phone', 'image']}
      handleSubmit={handleSubmit}
    />
  );
}

export { FormClient };
