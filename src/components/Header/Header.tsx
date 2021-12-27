import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon } from 'components';
import { Note, RootState } from 'types';
import { activate } from 'store/actions/ui';
import { remove } from 'store/actions/note';
import { remove as removeBlock, removeAllByNoteId } from 'store/actions/block';
import { FLOWS } from 'constants/flows';

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => {
  const note = useSelector<RootState, Note | undefined>((state) => state.note.notes.find(note => note.id === state.ui.currentNoteId));

  const notes = useSelector<RootState, Note[] | undefined>((state) => state.note.notes);
  if (!title && note) {
    title = note?.title;
  }

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(activate(FLOWS.EDIT_NOTE));
  };

  const handleDelete = () => {
    if (note) {
      dispatch(removeBlock(note.id));
      dispatch(removeAllByNoteId(note.id));
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
