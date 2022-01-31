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

function ProductsTable({ head, body, editable }) {
  return (
    <TableContainer component={Paper} align="center">
      <Table sx={{ minWidth: 320, maxWidth: 520 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            {head.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <TableCell key={index}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.price_1}</TableCell>
              <TableCell align="right">{item.tax}</TableCell>
              <TableCell align="right">
                {item.presentation || item.quantity}
              </TableCell>
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

export { ProductsTable };
