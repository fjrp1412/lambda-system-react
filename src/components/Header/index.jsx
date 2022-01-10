import React from 'react';
import styled from 'styled-components';

const HeaderUI = styled.header`
  display: flex;
  justify-content: space-around;
  color: white;
  width: 100%;
  height: 50px;
  align-items: center;
  background-color: var(--black);

  & h1 {
    font-size: 2.4rem;
  }

  & div img {
    width: 30px;
    height: 30px;
  }
`;

function Header() {
  return (
    <HeaderUI>
      <div>
        <img src="../assets/images/lambda.png" alt="Lambda logo" />
      </div>

      <h1>Di Cascada</h1>

      <div>
        <img src="../assets/images/default-user.png" alt="default user" />
      </div>
    </HeaderUI>
  );
}

export { Header };
