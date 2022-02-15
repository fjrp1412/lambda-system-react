import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getSaleDetail } from '../../utils/api';
import { Stats } from '../Stats';
import { DetailHeader, Section, ProductsTable } from '../../components';
import { AppContext } from '../../context';

function SaleDetail() {
  const urlParams = useParams();
  const [sale, setSale] = useState({
    client: {},
    salesman: {},
    product: [],
  });

  const { token } = useContext(AppContext);

  useEffect(async () => {
    const { id } = urlParams;
    const { data } = await getSaleDetail({ id, token });
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
