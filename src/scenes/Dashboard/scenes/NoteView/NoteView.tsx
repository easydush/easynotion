import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cuid from 'cuid';
import { Block, MediaType, Note, RootState } from 'types';
import { Button } from 'components';
import { FLOWS } from 'constants/flows';
import { BlockForm } from 'forms/BlockForm';
import { activateFlow, createBlock, deactivateFlow, updateBlock } from 'store/actions';
import { blockSelectors, uiSelectors } from 'store/selectors';
import { BlockView, BlockControls, TypeSwitcher } from './components';

type NoteProps = {
  noteId: Note['id'];
}

export const NoteView = ({ noteId }: NoteProps) => {
  const blocks = useSelector<RootState, Block[]>(blockSelectors.allByNoteId(noteId));
  const dispatch = useDispatch();

  const [type, setType] = useState('TEXT');
  const [currentBlock, setBlock] = useState<Block>();

  const activeFlows = useSelector<RootState, string[]>(uiSelectors.all);
  const isActiveBlockForm = activeFlows.includes(FLOWS.EDIT_BLOCK);
  const isControlsActive = activeFlows.includes(FLOWS.SHOW_CONTROLS);

  const showBlockForm = () => dispatch(activateFlow(FLOWS.EDIT_BLOCK));
  const hideBlockForm = () => dispatch(deactivateFlow(FLOWS.EDIT_BLOCK));


  const handleChangeType = (value: MediaType) => {
    setType(value);
    if (value === 'LINK') {
      hideBlockForm();
      dispatch(activateFlow(FLOWS.CREATE_SUBNOTE));
    } else {
      handleAdd();
    }

  };
  const handleAdd = () => {
    setBlock(undefined);
    showBlockForm();
  };

  const handleFinish = (content: string) => {
    if (currentBlock?.id) {
      dispatch(updateBlock({
        id: currentBlock.id,
        noteId: currentBlock.noteId,
        type: currentBlock.type,
        content: content,
        order: currentBlock.order,
      }));
    } else {
      dispatch(createBlock({ id: cuid(), noteId: noteId, type: type as MediaType, content: content }));
    }
    hideBlockForm();
    setBlock(undefined);
  };

  const handleEdit = (block: Block) => {
    setBlock(block);
    showBlockForm();
  };

  return <div className='grid grid-cols-1 gap-4 p-2'>
    {!currentBlock && isControlsActive &&
    <TypeSwitcher content={<Button children={isActiveBlockForm ? 'Change block type' : 'Add new block'} outlined />}
                  onChange={handleChangeType} />}
    {isActiveBlockForm && type !== 'LINK' &&
    <BlockForm type={(currentBlock?.type ?? type) as Exclude<MediaType, 'LINK'>} onFinish={handleFinish}
               initialData={currentBlock} />
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
