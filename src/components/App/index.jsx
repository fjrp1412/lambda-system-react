import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../Header';
import { Home } from '../Home';
import {
  Sales,
  Products,
  Clients,
  SaleDetail,
  FormClient,
  FormSale,
} from '../../containers';
import { NavBar } from '../Nav';
import { AppProvider } from '../../context';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <AppProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sales" element={<Sales />} />
          <Route exact path="/sales/create" element={<FormSale />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/clients" element={<Clients />} />
          <Route path="/clients/create" element={<FormClient />} />
          <Route path="/sales/:id" element={<SaleDetail />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export { App };
