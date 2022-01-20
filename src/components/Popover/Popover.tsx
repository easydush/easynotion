import { FC, ReactElement } from 'react';

import styles from './Popover.module.scss';

type PopoverProps = {
  controller: ReactElement;
}

export const Popover: FC<PopoverProps> = ({ controller, children }) => {
  return (
    <div className={styles.popover__wrapper}>
      {controller}
      <div className={styles.popover__content}>
        <div className={styles.popover__pointer}>
        </div>
        <div className={styles.popover__content__wrapper}>
          {children}
        </div>
      </div>
    </div>);
};
