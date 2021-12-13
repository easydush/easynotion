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
  const path = location.pathname;

  let noteId: Note['id'] = '';

  const checkNote = /note\/(.+)/i.exec(path);

  if (checkNote) {
    noteId = String(checkNote[1]);
  }

  const note = useSelector<RootState, Note | undefined>((state) => state.note.notes.find((note) => note.id === noteId || note.uri === noteId));

  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(activate(EDIT_NOTE));
  };

  const handleDelete = () => {
    if (note) dispatch(remove(note.id));
  };

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
