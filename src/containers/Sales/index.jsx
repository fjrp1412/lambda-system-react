import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stats } from '../Stats';
import { SalesCard } from '../../components/SaleCard';
import { Section } from '../../components/Section';
import { getSales } from '../../utils/api';

function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(async () => {
    const { data, request } = await getSales();
    setSales(data.results);
  }, []);

  return (
    <Section>
      <Stats />
      {sales.map(sale => (
	<Link to={`/sales/${sale.id}`}>
          <SalesCard
            key={sale.id}
            clientName={sale.client.name}
            date={sale.date}
            amount={sale.income}
            id={sale.id}
          />
        </Link>
      ))}
    </Section>
  );
}

export { Sales };
