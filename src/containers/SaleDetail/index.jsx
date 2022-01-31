import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSaleDetail } from '../../utils/api';
import { Stats } from '../Stats';
import { DetailHeader } from '../../components/DetailComponents';
import { Section } from '../../components/Section';
import { ProductsTable } from '../../components/TableComponents';

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

  return (
    <Section wide>
      <DetailHeader>
        <img
          src={sale.client.image || '../../assets/images/default-user.png'}
          alt={sale.client.name}
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

      <ProductsTable
        head={['Nombre', 'Precio', 'Tax', 'Cantidad']}
        body={sale.product}
      />
    </Section>
  );
}

export { SaleDetail };
