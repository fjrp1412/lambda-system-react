import React, { useState, useContext } from 'react';
import { Add } from '@mui/icons-material';
import {
  IconButton,
  TextField,
  Button,
  Input,
  MenuItem,
  Select,
} from '@mui/material';
import { Form } from '../../components/Form';
import { Section } from '../../components/Section';
import { Stats } from '../Stats';
import { ProductsTable } from '../../components/TableComponents';
import { AppContext } from '../../context';
import { Modal } from '../../components/Modal';

function FormSale() {
  const { salesmans, clients, products, loading, openModal, setOpenModal } =
    useContext(AppContext);

  const [newProduct, setNewProduct] = useState({
    id: '',
    quantity: '',
    sale: '',
    income: '',
    price: '',
  });
  const [cart, setCart] = useState([]);
  const [sale, setSale] = useState({
    client: '',
    salesman: '',
    income: '',
  });

  const handleAddProduct = () => {
    setCart([
      ...cart,
      {
        ...newProduct,
        income: products.results[newProduct.id].price_1 * newProduct.quantity,
      },
    ]);
  };

  console.log(sale);
  console.log(cart);

  return (
    <Section>
      {!loading && (
        <>
          <Stats
            firstStat={{ name: 'Monto', value: 69 }}
            secondStat={{ name: 'Nro de productos', value: 420 }}
            thirdStat={{ name: 'Nro de factura', value: 1 }}
          />
          <Form title="Registro de venta">
            <Select
              labelId="select-id"
              value={sale.salesman}
              onChange={event => {
                setSale({ ...sale, salesman: event.target.value });
              }}
              label="Vendedor"
            >
              {salesmans.results.map(salesman => (
                <MenuItem value={salesman.id} key={salesman.id}>
                  {salesman.name}
                </MenuItem>
              ))}
            </Select>

            <Select
              label="Cliente"
              value={sale.client}
              onChange={event => {
                setSale({ ...sale, client: event.target.value });
              }}
            >
              {clients.results.map(client => (
                <MenuItem value={client.id} key={client.id}>
                  {client.name}
                </MenuItem>
              ))}
            </Select>
          </Form>

          <ProductsTable
            head={['Nombre', 'Precio', 'Tax', 'Cantidad', 'Eliminar', 'Editar']}
            body={cart}
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
                title="Agregar producto"
                handleSubmit={handleAddProduct}
                handleCancel={() => {
                  setOpenModal(false);
                }}
              >
                <Select
                  labelId="select-id"
                  value={newProduct.id}
                  onChange={event => {
                    setNewProduct({ ...newProduct, id: event.target.value });
                  }}
                >
                  {products.results.map(product => (
                    <MenuItem value={product.id} key={product.id}>
                      {product.name}
                    </MenuItem>
                  ))}
                </Select>

                <Select
                  labelId="select-id"
                  value={newProduct.quantity}
                  onChange={event => {
                    setNewProduct({
                      ...newProduct,
                      quantity: event.target.value,
                    });
                  }}
                >
                  {Array.from(Array(101).keys()).map(number => (
                    <MenuItem value={number} key={number}>
                      {number}
                    </MenuItem>
                  ))}
                </Select>
              </Form>
            </Modal>
          )}
        </>
      )}
    </Section>
  );
}

export { FormSale };
