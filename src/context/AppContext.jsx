import React, { createContext, useState, useEffect, useMemo } from 'react';
import {
  getSalesmanList,
  getSales,
  getProductList,
  getClientsList,
} from '../utils/api';
import { useScreenSize, useAuth } from '../hooks';

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
  const [token, setToken] = useState();
  const [auth, setAuth] = useAuth({ token });

  useEffect(async () => {
    setSales(await getSales(token));
    setProducts(await getProductList(token));
    setClients(await getClientsList(token));
    setSalesmans(await getSalesmanList(token));
    setLoading(false);
  }, [token]);

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
      token,
      setToken,
      auth,
      setAuth,
    });
  }, [sales, products, clients, salesmans, auth]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
