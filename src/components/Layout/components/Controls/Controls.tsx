import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon } from 'components';
import { FLOWS } from 'constants/flows';
import { activateFlow } from 'store/actions';

export const Controls: FC = () => {
  const dispatch = useDispatch();

  const handleCreateNote = useCallback(() => {
    dispatch(activateFlow(FLOWS.CREATE_NOTE));
  }, [dispatch]);

  return (
    <div className='flex justify-between items-center py-4 pl-4 border-b-2 border-dashed border-cyan-100'>
      <a
        className='font-mono text-3xl underline decoration-cyan-500/30'
        href='https://github.com/easydush/easynotion'
        target='_blank'
        rel='noopener noreferrer'
      >
        easynotion
      </a>
      <Button onClick={handleCreateNote} title='Create note'>
        {<Icon type='ADD' />}
      </Button>
    </div>
  );
};
