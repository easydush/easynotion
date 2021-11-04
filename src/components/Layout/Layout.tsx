import React, { FC } from 'react';
import styles from './Layout.module.scss';
import { NotesTree } from './components';

const LayoutFn: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <div id='menu' className={styles.menu}>
        <NotesTree />
      </div>
      <div id='content' className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export const Layout = LayoutFn;
