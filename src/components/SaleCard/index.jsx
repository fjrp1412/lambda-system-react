import React from 'react';
import { Section } from '../Section';
import { SalesCardUI } from './SaleCardUI';

function SalesCard({ clientName, date, amount, id }) {
  return (
    <Section wide>
      <SalesCardUI className="sale-card">
        <span className="text primary-text">{clientName}</span>
        <span className="text secondary-text">{date}</span>
        <span className="text primary-text">{amount} $</span>
        <span className="text primary-text"># {id}</span>
      </SalesCardUI>
    </Section>
  );
}

export { SalesCard };
