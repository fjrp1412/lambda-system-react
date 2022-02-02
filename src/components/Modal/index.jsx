import React from 'react';
import { createPortal } from 'react-dom';
import { ModalUI } from './ModalUI';

function Modal({ children }) {
  return createPortal(
    <ModalUI>{children}</ModalUI>,
    document.getElementById('modal')
  );
}

export { Modal };
