import React, { createContext, useState, useEffect, useMemo } from 'react';
import {
  getSalesmanList,
  getSales,
  getProductList,
  getClientsList,
} from '../utils/api';

const AppContext = createContext();

function AppProvider({ children }) {
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [clients, setClients] = useState([]);
  const [salesmans, setSalesmans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(async () => {
    setSales(await getSales());
    setProducts(await getProductList());
    setClients(await getClientsList());
    setSalesmans(await getSalesmanList());
    setLoading(false);
  }, []);

  useMemo(() => {
    setValue({
      sales,
      setSales,
      products,
      setProducts,
      clients,
      setClients,
      salesmans,
      setSalesmans,
      loading,
      setLoading,
      openModal,
      setOpenModal,
    });
  }, [sales, products, clients, loading, openModal]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
