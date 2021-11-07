import React, { FC } from 'react';
import styles from './Layout.module.scss';
import { NotesTree } from './components';
import { Header } from '../Header';
import { Button } from '../Button';

const LayoutFn: FC = ({ children }) => {
  const onCreate = () => {
  };
  return (
    <div className={styles.container}>
      <div id='menu' className={styles.menu}>
        <Button size='small' onClick={onCreate} label='Create new' />
        <NotesTree />
      </div>
      <div id='content' className={styles.content}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export const Layout = LayoutFn;
