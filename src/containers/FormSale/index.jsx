import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context';
import { FormSaleUI } from './FormSaleUI';
import { createSale } from '../../utils/api';

function FormSale() {
  const {
    salesmans,
    clients,
    products,
    loading,
    openModal,
    setOpenModal,
    sales,
  } = useContext(AppContext);

  const [newProduct, setNewProduct] = useState({ id: 1, quantity: 1 });
  const [cart, setCart] = useState([]);
  const [sale, setSale] = useState({
    client: 1,
    salesman: 1,
    income: 0,
  });
  const [income, setIncome] = useState(0);

  const handleAddProduct = () => {
    setCart([
      ...cart,
      {
        name: newProduct.name,
        id: newProduct.id,
        quantity: newProduct.quantity,
        income: products.results[newProduct.id].price_1 * newProduct.quantity,
        price_1: newProduct.price_1,
        sale: sales.results.length + 1,
      },
    ]);

    setIncome(
      income + products.results[newProduct.id].price_1 * newProduct.quantity
    );

    setNewProduct({ id: 1, quantity: 1 });

    setOpenModal(false);
  };

  const handleDeleteProduct = productIndex => {
    setCart(cart.filter((item, index) => index !== productIndex));
  };

  const handleSubmitForm = async () => {
    setSale({ ...sale, income });

    const newCart = cart.map(item => {
      return {
        product: item.id,
        income: item.income,
        quantity: item.quantity,
        sale: item.sale,
      };
    });

    await createSale(sale, newCart);
  };

  useEffect(() => {
    setSale({ ...sale, income });
  }, [income]);

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
      handleSubmitForm={handleSubmitForm}
      sale={sale}
      setSale={setSale}
      income={income}
      setIncome={setIncome}
    />
  );
}

export { FormSale };
