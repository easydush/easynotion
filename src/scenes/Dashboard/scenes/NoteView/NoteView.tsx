import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cuid from 'cuid';
import { Block, MediaType, Note, RootState } from 'types';
import { Button } from 'components';
import { FLOWS } from 'constants/flows';
import { BlockForm } from 'forms/BlockForm';
import { activateFlow, createBlock, deactivateFlow, setCurrentNote, updateBlock } from 'store/actions';
import { blockSelectors, noteSelectors, uiSelectors } from 'store/selectors';
import { BlockView, BlockControls, TypeSwitcher } from './components';
import { useParams } from 'react-router-dom';
import { BlockEdit } from './components/BlockEdit/BlockEdit';

export const NoteView: FC = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const noteId = params.id ?? '';

  const note = useSelector<RootState, Note | null>(noteSelectors.current);
  const blocks = useSelector<RootState, Block[]>(blockSelectors.allByNoteId(note?.id ?? ''));

  const [type, setType] = useState('TEXT');

  const activeFlows = useSelector<RootState, FLOWS[]>(uiSelectors.all);
  const isActiveBlockAdd = activeFlows.includes(FLOWS.ADD_BLOCK);
  const isControlsActive = activeFlows.includes(FLOWS.SHOW_CONTROLS);

  const showBlockForm = useCallback(() => dispatch(activateFlow(FLOWS.ADD_BLOCK)), [dispatch]);
  const hideBlockForm = useCallback(() => dispatch(deactivateFlow(FLOWS.ADD_BLOCK)), [dispatch]);

  const handleChangeType = useCallback((value: MediaType) => {
    setType(value);
    if (value === 'LINK') {
      hideBlockForm();
      dispatch(activateFlow(FLOWS.CREATE_SUBNOTE));
    } else {
      showBlockForm();
    }
  }, [dispatch, showBlockForm, hideBlockForm]);


  useEffect(() => {
    dispatch(setCurrentNote(noteId));
  }, [noteId, dispatch]);

  return <div className='grid grid-cols-1 gap-4 p-2'>
    <>
      {blocks.map((block) =>
        <div className='p-2 max-w-7xl md:max-w-5xl' key={block.id}>
          <BlockView block={block} />
        </div>)
      }
    </>
    {isControlsActive &&
    <>
      <TypeSwitcher label={'Add new block'} onChange={handleChangeType} />
      {isActiveBlockAdd && <BlockEdit type={type as MediaType} noteId={noteId} />}
    </>
    }

  </div>;
};
