import React from 'react';
import styled from 'styled-components';
import { Section } from '../Section';

const SalesCardUI = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;

  & .text {
    text-align: center;
    font-size: 1.8rem;
    margin: 5px;
  }

  & .primary-text {
    color: var(--primary-font-color);
  }

  & .secondary-text {
    color: var(--secondary-font-color);
  }
`;

function SalesCard({ clientName, date, amount, id }) {
  return (
    <Section wide>
      <SalesCardUI className="sale-card">
        <span className="text primary-text">{ clientName }</span>
        <span className="text secondary-text">{ date }</span>
        <span className="text primary-text">{ amount } $</span>
        <span className="text primary-text"># { id }</span>
      </SalesCardUI>
    </Section>
  );
}

export { SalesCard };
