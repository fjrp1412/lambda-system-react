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

function ProductsTable({ head, body, editable, handleDeleteProduct }) {
  return (
    <TableContainer component={Paper} align="center">
      <Table sx={{ minWidth: 320, maxWidth: 520 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            {head.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <TableCell align="left" key={index}>
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell align="left">{item.price_1}</TableCell>
              <TableCell align="left">{item.tax}</TableCell>
              <TableCell align="left">
                {item.presentation || item.quantity}
              </TableCell>
              {editable && (
                <>
                  <TableCell
                    align="left"
                    onClick={() => handleDeleteProduct(index)}
                  >
                    <DeleteOutlined />
                  </TableCell>
                  <TableCell align="left">
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

export { ProductsTable };
