import React, { FC } from 'react';
import { Header, Button } from 'components';
import { useDispatch } from 'react-redux';
import { NotesTree } from './components';
import { CREATE_NOTE, CREATE_SECTION } from 'types';
import { activate } from 'store/actions/ui';

import styles from './Layout.module.scss';


const LayoutFn: FC = ({ children }) => {
  const dispatch = useDispatch();

  const handleCreateNote = () => {
    dispatch(activate(CREATE_NOTE));
  };

  const handleCreateSection = () => {
    dispatch(activate(CREATE_SECTION));
  };

  return (
    <div className={styles.container}>
      <div id='menu' className={styles.menu}>
        <Button size='small' onClick={handleCreateNote} label='Create new note' />
        <Button size='small' onClick={handleCreateSection} label='Create new section' />
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
