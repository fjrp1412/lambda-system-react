import React from 'react';
import { Section } from '../Section';
import { Stats, BasicAreaChart } from '../../containers';
import { HomeUI } from './HomeUI';

function Home() {
  return (
    <Section>
      <HomeUI>
        <div className="content">
          <div className="content__user">
            <span>Tus Datos</span>
          </div>
          <div className="dates">
            <span>16/03/2001</span>
            <span>Seleccionar fecha</span>
          </div>
        </div>
        <Stats />

        <Section>
          <div className="chart-container">
            <BasicAreaChart />
          </div>
        </Section>

        <Section>
          <div className="chart-container">
            <BasicAreaChart />
          </div>
        </Section>

        <Section>
          <div className="chart-container">
            <BasicAreaChart />
          </div>
        </Section>
      </HomeUI>
    </Section>
  );
}

export { Home };
