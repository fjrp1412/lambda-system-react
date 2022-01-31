import React, { createContext, useState, useEffect, useMemo } from 'react';
import { getSales, getProductList, getClientsList } from '../utils/api';

const AppContext = createContext();

function AppProvider({ children }) {
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState({});

  useEffect(async () => {
    setSales(await getSales());
    setProducts(await getProductList());
    setClients(await getClientsList());
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
      loading,
      setLoading,
    });
  }, [sales, products, clients, loading]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
