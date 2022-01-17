import React, { useState, useEffect } from 'react';
import { Section } from '../../components/Section';
import {
  Table,
  TableHead,
  TableBody,
  TableItem,
} from '../../components/TableComponents';
import { getProductList } from '../../utils/api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const { data, request } = await getProductList();
    setProducts(data.results);
  }, []);

  return (
    <Section>
      <Table>
        <TableHead>
          <tr>
            <th>
              <button type="button">Nombre</button>
            </th>
            <th>
              <button type="button">Cateogria</button>
            </th>
            <th>
              <button type="button">Monto</button>
            </th>
          </tr>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <TableItem key={product.id}>
              <td>{product.name}</td>
              <td>{product.category.name}</td>
              <td>{product.price_1_currency}</td>
            </TableItem>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
}

export { Products };
