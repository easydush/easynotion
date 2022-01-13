import { FC, ReactElement } from 'react';

import styles from './Popover.module.scss';

type PopoverProps = {
  content: ReactElement;
  children: ReactElement;
}
export const Popover: FC<PopoverProps> = ({ content, children }) => {
  return (<div className={styles.popover__wrapper}>
    {content}
    <div className={styles.popover__content}>
      {children}
    </div>
  </div>);
};
