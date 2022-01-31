import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const ModalUI = styled.div`
  background: rgba(32, 35, 41, 0.8);
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

function Modal({ children }) {
  return createPortal(
    <ModalUI>{children}</ModalUI>,
    document.getElementById('modal')
  );
}

export { Modal };
