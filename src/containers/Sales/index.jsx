import React from 'react';
import { Stats } from '../Stats';
import { SalesCard } from '../../components/SaleCard';
import { Section } from '../../components/Section';
import { getSales } from '../../utils/api';

function Sales() {
  const sales = getSales();



  return (
    <Section>
      <Stats />
      <SalesCard
        clientName="Francisco Ruiz"
        date="03/16/2001"
        amount="1000"
        id="0002"
      />
      <SalesCard
        clientName="Francisco Ruiz"
        date="03/16/2001"
        amount="1000"
        id="0002"
      />
      <SalesCard
        clientName="Francisco Ruiz"
        date="03/16/2001"
        amount="1000"
        id="0002"
      />
      <SalesCard
        clientName="Francisco Ruiz"
        date="03/16/2001"
        amount="1000"
        id="0002"
      />

    </Section>
  );
}

export { Sales };
