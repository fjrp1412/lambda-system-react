import React, { useState, useEffect } from 'react';
import { Section } from '../../components/Section';
import {
  Table,
  TableHead,
  TableBody,
  TableItem,
} from '../../components/TableComponents';

function Products() {
  return (
    <Section>
      <Table>
        <TableHead>
          <tr>
            <th>
              <button type="button">Nombre</button>
            </th>
            <th>
              <button type="button">Presentacion</button>
            </th>
            <th>
              <button type="button">Monto</button>
            </th>
          </tr>
        </TableHead>
        <TableBody>
          <TableItem>
            <td>Titan Colosal</td>
            <td>13 UND</td>
            <td>69</td>
          </TableItem>
        </TableBody>
      </Table>
    </Section>
  );
}

export { Products };
