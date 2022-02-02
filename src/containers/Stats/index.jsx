import React from 'react';
import { Section } from '../../components';
import { StatsUI, Stat } from './StatsUI';

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
