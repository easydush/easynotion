import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Block, MediaType, Note, RootState } from 'types';
import { FLOWS } from 'constants/flows';
import { activateFlow, deactivateFlow, setCurrentNote } from 'store/actions';
import { blockSelectors, noteSelectors, uiSelectors } from 'store/selectors';
import { BlockView, TypeSwitcher } from './components';
import { BlockEdit } from './components/BlockEdit';

export const NoteView: FC = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const noteId = params.id ?? '';

  const note = useSelector<RootState, Note | null>(noteSelectors.current);
  const blocks = useSelector<RootState, Block[]>(
    blockSelectors.allByNoteId(note?.id ?? ''),
  );
  const blocksLength = blocks.length;
  const currentBlock = useSelector<RootState, Block | null>(
    blockSelectors.current,
  );

  const [type, setType] = useState('TEXT');

  const activeFlows = useSelector<RootState, FLOWS[]>(uiSelectors.all);
  const isActiveBlockAdd = activeFlows.includes(FLOWS.ADD_BLOCK);
  const isControlsActive = activeFlows.includes(FLOWS.SHOW_CONTROLS);

  const showBlockForm = useCallback(
    () => dispatch(activateFlow(FLOWS.ADD_BLOCK)),
    [dispatch],
  );
  const hideBlockForm = useCallback(
    () => dispatch(deactivateFlow(FLOWS.ADD_BLOCK)),
    [dispatch],
  );

  const handleChangeType = useCallback(
    (value: MediaType) => {
      setType(value);
      showBlockForm();
    },
    [dispatch, showBlockForm, hideBlockForm],
  );

  useEffect(() => {
    dispatch(setCurrentNote(noteId));
  }, [noteId, dispatch]);

  useEffect(() => {
    if (blocksLength === 0) {
      dispatch(activateFlow(FLOWS.SHOW_CONTROLS));
      dispatch(activateFlow(FLOWS.ADD_BLOCK));
    }
  }, [blocksLength, dispatch]);

  return (
    <div className="grid grid-cols-1 py-2">
      <>
        {blocks.map((block) => (
          <div className="max-w-7xl md:max-w-5xl" key={block.id}>
            <BlockView
              block={block}
              isCurrent={currentBlock?.id === block.id}
              blocksLength={blocksLength}
            />
          </div>
        ))}
        {isControlsActive && (
          <div className="max-w-7xl md:max-w-5xl">
            <div className="flex flex-row">
              <TypeSwitcher
                onChange={handleChangeType}
                isFirst={blocksLength === 0}
              />
              {isActiveBlockAdd && (
                <BlockEdit type={type as MediaType} noteId={note?.id ?? ''} />
              )}
            </div>
          </div>
        )}
      </>
    </div>
  );
};
