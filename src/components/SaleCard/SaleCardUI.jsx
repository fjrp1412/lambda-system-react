import styled from 'styled-components';

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

export { SalesCardUI };
