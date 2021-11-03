import React, { FC } from 'react';
import styles from './Layout.module.scss';

const LayoutFn: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <div id='menu' className={styles.menu}>
       menu
      </div>
      <div id='content' className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export const Layout = LayoutFn;
