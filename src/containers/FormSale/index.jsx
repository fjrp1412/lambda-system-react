import React, { useState, useContext } from 'react';
import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Form } from '../../components/Form';
import { Section } from '../../components/Section';
import { Stats } from '../Stats';
import { ProductsTable } from '../../components/TableComponents';
import { AppContext } from '../../context';
import { Modal } from '../../components/Modal';

function FormSale() {
  const { clients, products, loading, openModal, setOpenModal } =
    useContext(AppContext);

  const [client, setClient] = useState('');
  const [newProduct, setNewProduct] = useState('');

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

          <IconButton
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <Add />
          </IconButton>

          {openModal && (
            <Modal>
              <Form
                title="Añadir nuevo producto"
                fields={[
                  {
                    fieldName: 'Producto',
                    type: 'select',
                    state: newProduct,
                    setState: setNewProduct,
                    list: products.results,
                  },
                  { fieldName: 'Cantidad', type: 'text' },
                ]}
                handleCancel={() => {
                  setOpenModal(false);
                }}
              />
            </Modal>
          )}
        </>
      )}
    </Section>
  );
}

export { FormSale };
