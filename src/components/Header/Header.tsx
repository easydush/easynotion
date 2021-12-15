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

  if (!title && note) {
    title = note?.title;
  }

  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(activate(EDIT_NOTE));
  };

  const handleDelete = () => {
    if (note) dispatch(remove(note.id));
  };

  return <div className='mx-auto px-4 sm:px-6'>
    <div
      className='flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-5'>
      {!!title ? (
          <>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <h1 className='text-3xl font-bold text-gray-900 '>{title}</h1>
            </div>
            <div>
              <Button onClick={handleCreate}>
                {<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none'
                      viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                        d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' />
                </svg>}
              </Button>
            </div>
            <div>
              <Button onClick={handleDelete}>
                {<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none'
                                                   viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
              </svg>}
              </Button>
            </div>
          </>) :
        <h1>Create note to start</h1>
      }
    </div>
  </div>;
};
