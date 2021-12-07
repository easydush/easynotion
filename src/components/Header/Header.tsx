import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components';
import { EDIT_NOTE, Note, RootState } from 'types';
import { activate } from 'store/actions/ui';
import { remove } from 'store/actions/note';

import './header.css';

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => {
  const location = useLocation();
  const noteId = location.pathname.split('/')[2];
  const note = useSelector<RootState, Note[]>((state) => state.note.notes.filter((note) => note.id === noteId || note.uri === noteId))[0];

  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(activate(EDIT_NOTE));
  };

  const handleDelete = () => {
    dispatch(remove(note.id));
  };

  if (!title && noteId && note) {
    title = note?.title;
  }

  return <header>
    {!!title ? (
        <div className='wrapper'>
          <h1>{title}</h1>
          <Button size='small' onClick={handleCreate} label='Edit' />
          <Button label={'Delete'} onClick={handleDelete} />
        </div>) :
      <h1>Create note to start</h1>
    }

  </header>;
};
