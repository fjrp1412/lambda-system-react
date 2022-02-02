import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Stats } from '../Stats';
import { SalesCard, Section } from '../../components';
import { AppContext } from '../../context';

function Sales() {
  const { sales, loading } = useContext(AppContext);

  return (
    <Section>
      <Stats />
      {!loading &&
        sales.results.map(sale => (
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
