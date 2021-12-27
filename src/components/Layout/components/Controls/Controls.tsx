import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'components';
import { activate } from 'store/actions/ui';
import { FLOWS } from 'constants/flows';

export const Controls = () => {
  const dispatch = useDispatch();

  const handleCreateNote = () => {
    dispatch(activate(FLOWS.CREATE_NOTE));
  };

  return <div className='flex justify-between items-center py-4 pl-4 border-b-2 border-dashed border-cyan-100'>
    <a className='font-mono text-3xl underline decoration-cyan-500/30' href='https://github.com/easydush/easynotion'
       target='_blank' rel='noopener noreferrer'>easynotion</a>
    <Button onClick={handleCreateNote}>
      {<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24'
            stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
      </svg>}
    </Button>
  </div>;
};
