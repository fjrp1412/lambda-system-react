import React, { useState, useEffect } from 'react';
import { Section } from '../../components/Section';
import {
  Table,
  TableHead,
  TableBody,
  TableItem,
} from '../../components/TableComponents';
import { getClientsList } from '../../utils/api';

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(async () => {
    const { data } = await getClientsList();
    setClients(data.results);
  }, []);
  return (
    <Section>
      <Table>
        <TableHead>
          <tr>
            <th>
              <button type="button">Nombre</button>
            </th>
            <th>
              <button type="button">Cedula</button>
            </th>
            <th>
              <button type="button">Tlf</button>
            </th>
          </tr>
        </TableHead>
        <TableBody>
          {clients.map(client => (
            <TableItem key={client.id}>
              <td>{client.name}</td>
              <td>{client.identity_card}</td>
              <td>{client.phone}</td>
            </TableItem>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
}

export { Clients };
