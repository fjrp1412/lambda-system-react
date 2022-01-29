import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../Header';
import { Home } from '../Home';
import { Sales } from '../../containers/Sales';
import { Products } from '../../containers/Products';
import { Clients } from '../../containers/Clients';
import { SaleDetail } from '../../containers/SaleDetail';
import { FormClient } from '../../containers/FormClient';
import { FormSale } from '../../containers/FormSale';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sales" element={<Sales />} />
        <Route exact path="/sales/create" element={<FormSale />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/clients" element={<Clients />} />
        <Route path="/clients/create" element={<FormClient />} />
        <Route path="/sales/:id" element={<SaleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
