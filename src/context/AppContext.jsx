import React, { createContext, useState, useEffect, useMemo } from 'react';
import {
  getSalesmanList,
  getSales,
  getProductList,
  getClientsList,
} from '../utils/api';
import { useScreenSize } from '../hooks';

const AppContext = createContext();

function AppProvider({ children }) {
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [clients, setClients] = useState([]);
  const [salesmans, setSalesmans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [size, setSize] = useScreenSize();

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
      size,
      setSize,
    });
  }, [sales, products, clients, loading, openModal]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
