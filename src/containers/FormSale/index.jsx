import React, { useState, useEffect } from 'react';
import { Form } from '../../components/Form';
import { Section } from '../../components/Section';
import { Stats } from '../Stats';
import { getClientsList } from '../../utils/api';
import { ProductsTable } from '../../components/TableComponents';

function FormSale() {
  const [client, setClient] = useState('');
  const [listClients, setListClients] = useState([]);
  const [products, setProducts] = useState([]);

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
      <ProductsTable
        head={['Nombre', 'Precio', 'Tax', 'Cantidad', 'Eliminar', 'Editar']}
        body={[
          {
            name: 'Jabon',
            price: '69',
            tax: '5.5',
            und: '4',
            id: 1,
          },
        ]}
        editable
      />
    </Section>
  );
}

export { FormSale };
