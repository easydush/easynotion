import { FC, ReactElement, useCallback, useEffect } from 'react';
import { Button, Icon } from 'components';

import styles from './Modal.module.scss';

interface ModalProps {
  visible: boolean;
  title: string;
  children: ReactElement;
  footer?: ReactElement | string;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({
  visible = false,
  title = '',
  footer = '',
  onClose,
  children,
}) => {
  const onKeydown = useCallback(
    ({ key }: KeyboardEvent) => {
      switch (key) {
        case 'Escape':
          onClose();
          break;
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [onKeydown]);

  if (!visible) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.dialog}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <Button onClick={onClose} title="Close">
            {<Icon type={'CLOSE'} />}
          </Button>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>{children}</div>
        </div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
};
