import React, { useState, useEffect } from 'react';
import { Section } from '../../components/Section';
import { Stats } from '../Stats';
import { Form } from '../../components/Form';
import { getClientsList } from '../../utils/api';

function FormSale() {
  const [client, setClient] = useState('');
  const [listClients, setListClients] = useState([]);

  useEffect(async () => {
    const { data } = await getClientsList();
    setListClients(data.results);
  }, []);

  return (
    <Section>
      <Stats
        firstStat={{ name: 'Monto', value: 69 }}
        secondStat={{ name: 'Nro de productos', value: 420 }}
        thirdStat={{ name: 'Nro de factura', value: 1 }}
      />
      <Form
        title="Registro de venta"
        fields={[
          {
            fieldName: 'Cliente',
            type: 'select',
            state: client,
            setState: setClient,
            list: listClients,
          },

          { fieldName: 'Vendedor', type: 'text' },
        ]}
      />
    </Section>
  );
}

export { FormSale };
