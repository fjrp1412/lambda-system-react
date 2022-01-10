import React from 'react';
import styled from 'styled-components';
import { Section } from '../../components/Section';

const StatsUI = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & .primary-text {
    font-size: 2.6rem;
    margin-top: 10px;
    color: var(--primary-font-color);
  }

  & .secondary-text {
    color: var(--secondary-font-color);
  }
`;

function Stats() {
  return (
    <Section>
      <StatsUI>
        <Stat>
          <span className="secondary-text">Ventas Totales</span>
          <span className="primary-text">69</span>
        </Stat>
        <Stat>
          <span className="secondary-text">Productos Vendidos</span>
          <span className="primary-text">420</span>
        </Stat>
        <Stat>
          <span className="secondary-text">Porcentaje de ventas</span>
          <span className="primary-text">13%</span>
        </Stat>
      </StatsUI>
    </Section>
  );
}

export { Stats };
