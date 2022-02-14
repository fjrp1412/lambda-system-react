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
  Login,
  SignUp,
} from '../../containers';
import { UserAuth } from '../../auth';
import { NavBar } from '../Nav';
import { AppProvider } from '../../context';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <AppProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <UserAuth>
                <Home />
              </UserAuth>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/sales"
            element={
              <UserAuth>
                <Sales />
              </UserAuth>
            }
          />
          <Route
            exact
            path="/sales/create"
            element={
              <UserAuth>
                <FormSale />
              </UserAuth>
            }
          />
          <Route
            exact
            path="/products"
            element={
              <UserAuth>
                <Products />
              </UserAuth>
            }
          />
          <Route
            exact
            path="/clients"
            element={
              <UserAuth>
                <Clients />
              </UserAuth>
            }
          />
          <Route
            path="/clients/create"
            element={
              <UserAuth>
                <FormClient />
              </UserAuth>
            }
          />
          <Route
            path="/sales/:id"
            element={
              <UserAuth>
                <SaleDetail />
              </UserAuth>
            }
          />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export { App };
