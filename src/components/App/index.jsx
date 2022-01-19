import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../Header';
import { Home } from '../Home';
import { Sales } from '../../containers/Sales';
import { Products } from '../../containers/Products';
import { Clients } from '../../containers/Clients';
import { SaleDetail } from '../../containers/SaleDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sales" element={<Sales />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/clients" element={<Clients />} />
        <Route path="/sales/:id" element={<SaleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
