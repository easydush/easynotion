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

export const NoteView: FC = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const noteId = params.id ?? '';

  const note = useSelector<RootState, Note | null>(noteSelectors.current);
  const blocks = useSelector<RootState, Block[]>(blockSelectors.allByNoteId(note?.id ?? ''));

  const [type, setType] = useState('TEXT');
  const [currentBlock, setBlock] = useState<Block>();

  const activeFlows = useSelector<RootState, FLOWS[]>(uiSelectors.all);
  const isActiveBlockForm = activeFlows.includes(FLOWS.EDIT_BLOCK);
  const isControlsActive = activeFlows.includes(FLOWS.SHOW_CONTROLS);

  const showBlockForm = useCallback(() => dispatch(activateFlow(FLOWS.EDIT_BLOCK)), [dispatch]);
  const hideBlockForm = useCallback(() => dispatch(deactivateFlow(FLOWS.EDIT_BLOCK)), [dispatch]);

  const handleAdd = useCallback(() => {
    setBlock(undefined);
    showBlockForm();
  }, [showBlockForm]);

  const handleChangeType = useCallback((value: MediaType) => {
    setType(value);
    if (value === 'LINK') {
      hideBlockForm();
      dispatch(activateFlow(FLOWS.CREATE_SUBNOTE));
    } else {
      handleAdd();
    }
  }, [dispatch, handleAdd, hideBlockForm]);

  const handleFinish = useCallback((content: string) => {
    if (currentBlock?.id) {
      dispatch(updateBlock({
        id: currentBlock.id,
        noteId: currentBlock.noteId,
        type: currentBlock.type,
        content: content,
        order: currentBlock.order,
      }));
    } else {
      dispatch(createBlock({ id: cuid(), noteId: note?.id ?? '', type: type as MediaType, content: content }));
    }
    hideBlockForm();
    setBlock(undefined);
  }, [currentBlock, dispatch, hideBlockForm, note, type]);

  const handleEdit = useCallback((block: Block) => {
    setBlock(block);
    showBlockForm();
  }, [showBlockForm]);

  const handleCancel = useCallback(() => {
    hideBlockForm();
    setBlock(undefined);
  }, [hideBlockForm, setBlock]);

  useEffect(() => {
    dispatch(setCurrentNote(noteId));
  }, [noteId, dispatch]);

  return <div className='grid grid-cols-1 gap-4 p-2'>
    {!currentBlock && isControlsActive &&
    <TypeSwitcher content={<Button children={isActiveBlockForm ? 'Change block type' : 'Add new block'} outlined />}
                  onChange={handleChangeType} />}
    {isActiveBlockForm && type !== 'LINK' &&
    <BlockForm type={(currentBlock?.type ?? type) as Exclude<MediaType, 'LINK'>} onFinish={handleFinish}
               onCancel={handleCancel} initialData={currentBlock} />
    }
    {!isActiveBlockForm && blocks.map((block) =>
      <div className='p-2 max-w-7xl md:max-w-5xl' key={block.id}>
        <BlockView block={block}>
          {isControlsActive ? <div className='basis-4'>
            <BlockControls block={block}
                           isFirst={block.order === 0}
                           isLast={block.order === blocks.length - 1}
                           onEdit={handleEdit} />
          </div> : <></>}
        </BlockView>
      </div>)
    }
  </div>;
};
