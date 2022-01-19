import styled from 'styled-components';

const DetailHeader = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0px;
  justify-content: center;
  align-items: center;

  & .image {
    width: 80px;
    height: 80px;
    border-radius: 25px;
    margin: 10px;
  }

  & .name {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary-font-color);
    margin: 10px;
  }
`;

export { DetailHeader };
