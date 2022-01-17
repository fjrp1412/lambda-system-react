import React from 'react';
import styled from 'styled-components';
import { Section } from '../Section';
import { Stats } from '../../containers/Stats';
import { Chart } from '../../containers/Charts/AreaChart';

const HomeUI = styled.div`
  width: 100%;

  & div {
    margin: 5px 0px;
  }

  & .content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }

  & .content .dates {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  & .chart-container {
    width: 100%;
    height: 500px;
  }
`;

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
            <Chart />
          </div>
        </Section>

        <Section>
          <div className="chart-container">
            <Chart />
          </div>
        </Section>

        <Section>
          <div className="chart-container">
            <Chart />
          </div>
        </Section>
      </HomeUI>
    </Section>
  );
}

export { Home };
