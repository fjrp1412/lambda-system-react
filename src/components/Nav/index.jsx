import React, { useState } from 'react';
import { NavBarUI } from './NavBarUI';

function NavBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const pages = ['Home', 'Productos', 'Clientes', 'Ventas'];
  const links = ['', 'products', 'clients', 'sales'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <NavBarUI
      pages={pages}
      links={links}
      settings={settings}
      handleOpenUserMenu={handleOpenUserMenu}
      handleCloseUserMenu={handleCloseUserMenu}
      anchorElUser={anchorElUser}
    />
  );
}

export { NavBar };
