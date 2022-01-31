import React, { useState, useContext } from 'react';
import { Form } from '../../components/Form';
import { Section } from '../../components/Section';
import { Stats } from '../Stats';
import { ProductsTable } from '../../components/TableComponents';
import { AppContext } from '../../context';

function FormSale() {
  const { clients, products, loading } = useContext(AppContext);
  const [client, setClient] = useState('');

  return (
    <Section>
      {!loading && (
        <>
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
                list: clients.results,
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
        </>
      )}
    </Section>
  );
}

export { FormSale };
