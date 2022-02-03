import * as React from 'react';
import styled from 'styled-components';
import {
  Tooltip,
  MenuItem,
  Menu,
  AppBar,
  Box,
  Toolbar,
  Container,
  IconButton,
  Avatar,
} from '@mui/material';
import { Link } from 'react-router-dom';

const NavBarUI = styled.div`
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 99;
  position: sticky;

  .link {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 0px 10px;
  }

  .toolbar {
    display: flex;
    justify-content: space-around;
  }

  @media only screen and (min-width: 450px) {
    .toolbar {
      display: flex;
      justify-content: space-between;
    }

    .link {
      font-size: 2rem;
    }

    .avatar {
      width: 60px;
      height: 60px;
      margin: 5px 0px;
    }
  }
`;

function NavBar({
  pages,
  links,
  settings,
  handleOpenUserMenu,
  handleCloseUserMenu,
  anchorElUser,
}) {
  return (
    <NavBarUI>
      <AppBar position="sticky" className="navbar--sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters className="toolbar">
            <Box>
              {pages.map((page, index) => (
                <Link to={`/${links[index]}`} key={page} className="link">
                  {page}
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    className="avatar"
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Link className="link" to="/">
                      {setting}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </NavBarUI>
  );
}
export { NavBar as NavBarUI };
