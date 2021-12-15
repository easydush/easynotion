import React, { FC } from 'react';
import { Header, Button } from 'components';
import { useDispatch } from 'react-redux';
import { NotesTree } from './components';
import { CREATE_NOTE } from 'types';
import { activate } from 'store/actions/ui';


const LayoutFn: FC = ({ children }) => {
  const dispatch = useDispatch();

  const handleCreateNote = () => {
    dispatch(activate(CREATE_NOTE));
  };


  return (
    <div className='flex flex-row'>
      <div className='basis-1/5'>
        <Button size='small' onClick={handleCreateNote} label='Create new note' />
        <NotesTree />
      </div>
      <div className='basis-4/5'>
        <div>
          <Header />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export const Layout = LayoutFn;
