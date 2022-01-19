import React from 'react';
import styled from 'styled-components';
import { Section } from '../../components/Section';

const StatsUI = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px 0px;

  & .primary-text {
    font-size: 2.6rem;
    margin-top: 10px;
    color: var(--primary-font-color);
  }

  & .secondary-text {
    color: var(--secondary-font-color);
  }
`;

function Stats({
  firstStat = { name: 'Ventas Totales', value: 69 },
  secondStat = { name: 'Productos Vendidos', value: 420 },
  thirdStat = { name: 'Porcentaje de ventas', value: '13%' },
}) {
  return (
    <Section wide>
      <StatsUI>
        <Stat>
          <span className="secondary-text">{firstStat.name}</span>
          <span className="primary-text">{firstStat.value}</span>
        </Stat>
        <Stat>
          <span className="secondary-text">{secondStat.name}</span>
          <span className="primary-text">{secondStat.value}</span>
        </Stat>
        <Stat>
          <span className="secondary-text">{thirdStat.name}</span>
          <span className="primary-text">{thirdStat.value}</span>
        </Stat>
      </StatsUI>
    </Section>
  );
}

export { Stats };
