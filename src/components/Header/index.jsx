import React from 'react';
import { HeaderUI } from './HeaderUI';

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
