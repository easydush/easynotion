import React, { ReactElement, useCallback, useEffect } from 'react';

import './index.css';
import { Button } from '../Button';
import { Icon } from '../Icon';

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
                        children,
                      }: ModalProps) => {
  const onKeydown = useCallback(({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [onKeydown,]);

  if (!visible) return null;

  return (
    <div className='modal'>
      <div className='modal-dialog'>
        <div className='modal-header'>
          <h3 className='modal-title'>{title}</h3>
          <Button onClick={onClose}>{<Icon type={'CLOSE'} />}</Button>
        </div>
        <div className='modal-body'>
          <div className='modal-content'>{children}</div>
        </div>
        {footer && <div className='modal-footer'>{footer}</div>}
      </div>
    </div>
  );
};
