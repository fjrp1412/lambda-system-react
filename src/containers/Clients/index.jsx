import React, { useContext } from 'react';
import { Section, ClientsTable } from '../../components';
import { AppContext } from '../../context';

function Clients() {
  const { clients, loading } = useContext(AppContext);

  return (
    <Section>
      {!loading && <ClientsTable clients={clients.results} editable />}
    </Section>
  );
}

export { Clients };
