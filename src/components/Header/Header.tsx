import React from 'react';

import './header.css';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Note, NoteState } from '../../types';

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => {
  const location = useLocation();
  const noteId = location.pathname.split('/')[2];
  const note = useSelector<NoteState, Note[]>((state) => state.notes.filter((note) => note.id === noteId))[0];

  if (!title && noteId && note) {
    title = note?.title;
  }

  return <header>
    <div className='wrapper'>
      <h1>{title}</h1>
    </div>
  </header>;
};
