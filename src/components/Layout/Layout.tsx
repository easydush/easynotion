import React, { FC } from 'react';
import styles from './Layout.module.scss';

const LayoutFn: FC = ({ children }) => {
  return (
    <div id='MainBodyWrapper' className={styles.container}>
      {children}
    </div>
  );
};

export const Layout = LayoutFn;
