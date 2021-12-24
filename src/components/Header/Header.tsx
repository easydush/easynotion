import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon } from 'components';
import { EDIT_NOTE, Note, RootState } from 'types';
import { activate } from 'store/actions/ui';
import { remove } from 'store/actions/note';
import { remove as removeBlock, removeAllByNoteId } from 'store/actions/block';

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

  const notes = useSelector<RootState, Note[] | undefined>((state) => state.note.notes);
  const note = notes?.find((note) => note.id === noteId || note.uri === noteId);

  if (!title && note) {
    title = note?.title;
  }

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(activate(EDIT_NOTE));
  };

  const handleDelete = () => {
    if (note) {
      dispatch(removeBlock(note.id));
      dispatch(removeAllByNoteId(note.id))
      dispatch(remove(note.id));
    }
  };

  return <div
    className='flex justify-between items-center py-4 pl-4 border-b-2 border-gray-100'>
    {!!title ? (
        <>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <h1 className='text-3xl text-gray'>{title}</h1>
          </div>
          <div className='px-4'>
            <Button onClick={handleEdit}>
              <Icon type='EDIT' />
            </Button>
          </div>
          <div className='px-4'>
            <Button onClick={handleDelete}>
              <Icon type='DELETE' />
            </Button>
          </div>
        </>) :
      <h1 className='text-3xl text-gray-700'>{notes?.length === 0 ? 'Create note to start' : 'Click on menu'}</h1>
    }
  </div>;
};
