import React, { useState, useEffect } from 'react';
import { Section } from '../../components/Section';
import { ClientsTable } from '../../components/TableComponents';
import { getClientsList } from '../../utils/api';

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(async () => {
    const { data } = await getClientsList();
    setClients(data.results);
  }, []);
  return (
    <Section>
      <ClientsTable clients={clients} editable />
    </Section>
  );
}

export { Clients };
