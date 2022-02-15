import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../components';
import { postLogin } from '../../utils/api';
import { AppContext } from '../../context';

function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(AppContext);

  const handleSubmit = async () => {
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const { data, request } = await postLogin(formData);

    if (request.ok) {
      setToken(data.token);
      navigate('/', { replace: true });
    }
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
