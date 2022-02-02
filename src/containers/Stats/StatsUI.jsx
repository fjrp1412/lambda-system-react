import styled from 'styled-components';

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

export { StatsUI, Stat };
