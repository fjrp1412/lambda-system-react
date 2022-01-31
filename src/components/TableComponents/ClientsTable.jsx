import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { DeleteOutlined, EditOutlined } from '@mui/icons-material';

function ClientsTable({ clients, editable }) {
  return (
    <TableContainer component={Paper} align="center">
      <Table sx={{ minWidth: 320, maxWidth: 520 }} aria-label="spanning table">
        <TableHead sx={{ minWidth: '100%' }}>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Cedula</TableCell>
            <TableCell>Direccion</TableCell>
            <TableCell>Eliminar</TableCell>
            <TableCell>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map(client => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell align="right">{client.identity_card}</TableCell>
              <TableCell align="right">{client.address}</TableCell>
              {editable && (
                <>
                  <TableCell align="right">
                    <DeleteOutlined />
                  </TableCell>
                  <TableCell align="right">
                    <EditOutlined />
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export { ClientsTable };
