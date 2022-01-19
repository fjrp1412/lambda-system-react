import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSaleDetail } from '../../utils/api';
import { Stats } from '../Stats';
import { DetailHeader } from '../../components/DetailComponents';
import { Section } from '../../components/Section';
import {
  Table,
  TableItem,
  TableBody,
  TableHead,
} from '../../components/TableComponents';

function SaleDetail() {
  const urlParams = useParams();
  const [sale, setSale] = useState({
    client: {},
    salesman: {},
    product: [],
  });

  useEffect(async () => {
    const { data } = await getSaleDetail(urlParams);
    setSale(data);
  }, []);

  console.log(sale);
  return (
    <Section wide>
      <DetailHeader>
        <img
          src={sale.client.image || '../../assets/images/default-user.png'}
          alt="client image"
          className="image"
        />

        <div className="name">
          <h1>{sale.client.name}</h1>
        </div>
      </DetailHeader>
      <Stats
        firstStat={{ name: 'Monto', value: sale.income }}
        secondStat={{ name: '# de productos', value: sale.product.length }}
        thirdStat={{ name: 'ID', value: sale.id }}
      />

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
          {sale.product.map(product => (
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

export { SaleDetail };
