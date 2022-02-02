import styled from 'styled-components';

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

export { HomeUI };
