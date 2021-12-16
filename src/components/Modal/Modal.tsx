import React, { ReactElement } from 'react';

import './index.css';

interface ModalProps {
  visible: boolean;
  title: string;
  children: ReactElement;
  footer?: ReactElement | string;
  onClose: () => void;
}

export const Modal = ({
                        visible = false,
                        title = '',
                        footer = '',
                        onClose,
                        children
                      }: ModalProps) => {
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  if (!visible) return null;

  return (
    <div className='modal' onClick={onClose}>
      <div className='modal-dialog' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h3 className='modal-title'>{title}</h3>
          <span className='modal-close' onClick={onClose}>
            &times;
          </span>
        </div>
        <div className='modal-body'>
          <div className='modal-content'>{children}</div>
        </div>
        {footer && <div className='modal-footer'>{footer}</div>}
      </div>
    </div>
  );
};
