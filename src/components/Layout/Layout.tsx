import React, { FC } from 'react';
import { Header, Button } from 'components';
import { useDispatch } from 'react-redux';
import { NotesTree } from './components';
import { CREATE_NOTE } from 'types';
import { activate } from 'store/actions/ui';

import styles from './Layout.module.scss';


const LayoutFn: FC = ({ children }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(activate(CREATE_NOTE));
  };

  return (
    <div className={styles.container}>
      <div id='menu' className={styles.menu}>
        <Button size='small' onClick={handleClick} label='Create new note' />
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
