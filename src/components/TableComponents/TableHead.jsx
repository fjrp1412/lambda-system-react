import styled from 'styled-components';

const TableHead = styled.thead`
  background-color: #777777;
  color: white;
  font-size: 1.3rem;

  & tr th button {
    text-align: center;
    font-size: 1.4rem;
    width: 100%;
    color: white;
    font-weight: bolder;
    height: 100%;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
  }

  & tr th {
    padding: 5px 10px;
  }
`;

export { TableHead };
