import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Stats } from '../Stats';
import { SalesCard, Section } from '../../components';
import { AppContext } from '../../context';

function Sales() {
  const { sales, loading } = useContext(AppContext);
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/sales/create');
  };

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
      <Button onClick={handleAdd}>Añadir venta</Button>
    </Section>
  );
}

export { Sales };
