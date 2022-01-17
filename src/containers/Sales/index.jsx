import React, { useState, useEffect } from 'react';
import { Stats } from '../Stats';
import { SalesCard } from '../../components/SaleCard';
import { Section } from '../../components/Section';
import { getSales } from '../../utils/api';

function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(async () => {
    const {data, request} = await getSales();
    setSales(data.results);
  }, []);

  return (
    <Section>
      <Stats />
      {sales.map(sale => (
        <SalesCard
	  key={sale.id}
          clientName={sale.client.name}
          date={sale.date}
          amount={sale.income}
          id={sale.id}
        />
      ))}
    </Section>
  );
}

export { Sales };
