import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Section, ClientsTable } from '../../components';
import { AppContext } from '../../context';

function Clients() {
  const { clients, loading } = useContext(AppContext);
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/clients/create');
  };

  return (
    <Section>
      {!loading && (
        <>
          <Button
            size="large"
            variant="outlined"
            color="success"
            onClick={handleAdd}
          >
            Añadir Cliente
          </Button>
          <ClientsTable clients={clients.results} editable />
        </>
      )}
    </Section>
  );
}

export { Clients };
