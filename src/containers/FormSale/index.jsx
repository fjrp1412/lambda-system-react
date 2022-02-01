import React, { useState, useContext } from 'react';
import { AppContext } from '../../context';
import { FormSaleUI } from './FormSaleUI';

function FormSale() {
  const { salesmans, clients, products, loading, openModal, setOpenModal } =
    useContext(AppContext);

  const [newProduct, setNewProduct] = useState({ id: 1, quantity: 1 });
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
        name: newProduct.name,
        id: newProduct.id,
        quantity: newProduct.quantity,
        income: products.results[newProduct.id].price_1 * newProduct.quantity,
        price_1: newProduct.price_1,
      },
    ]);

    setNewProduct({ id: 1, quantity: 1 });

    setOpenModal(false);
  };

  const handleDeleteProduct = productIndex => {
    setCart(cart.filter((item, index) => index !== productIndex));
  };

  console.log(cart);

  return (
    <FormSaleUI
      salesmans={salesmans}
      clients={clients}
      products={products}
      loading={loading}
      openModal={openModal}
      setOpenModal={setOpenModal}
      newProduct={newProduct}
      setNewProduct={setNewProduct}
      cart={cart}
      handleAddProduct={handleAddProduct}
      handleDeleteProduct={handleDeleteProduct}
      sale={sale}
      setSale={setSale}
    />
  );
}

export { FormSale };
