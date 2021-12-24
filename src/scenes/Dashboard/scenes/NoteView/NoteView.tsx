import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cuid from 'cuid';
import { BlockView } from './components';
import { Block, CREATE_SUBNOTE, MediaType, Note, RootState } from 'types';
import { BlockForm } from 'forms/BlockForm';
import { TypeSwitcher } from './components/TypeSwitcher/TypeSwitcher';
import { Button } from 'components';
import { create, update } from 'store/actions/block';
import { compareBlocks } from 'tools/blocks';
import { activate } from 'store/actions/ui';
import { BlockControls } from './components/BlockView/components';

type NoteProps = {
  noteId: Note['id'];
}

export const NoteView = ({ noteId }: NoteProps) => {
  const blocks = useSelector<RootState, Block[]>((state) => state.block.blocks.filter((item) => item.noteId === noteId));

  const dispatch = useDispatch();

  const [type, setType] = useState('TEXT');
  const [isActiveBlockForm, setActive] = useState(false);
  const [currentBlock, setBlock] = useState<Block>();

  const showBlockForm = () => setActive(true);
  const hideBlockForm = () => setActive(false);

  const handleChangeType = (value: MediaType) => {
    setType(value);
    if (value === 'LINK') {
      hideBlockForm();
      dispatch(activate(CREATE_SUBNOTE));
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
      dispatch(update({
        id: currentBlock.id,
        noteId: currentBlock.noteId,
        type: currentBlock.type,
        content: content,
        order: currentBlock.order,
      }));
    } else {
      dispatch(create({ id: cuid(), noteId: noteId, type: type as MediaType, content: content }));
    }
    hideBlockForm();
    setBlock(undefined);
  };

  const handleEdit = (block: Block) => {
    setBlock(block);
    showBlockForm();
  };

  return <div className='grid grid-cols-1 gap-4 p-2'>
    {!currentBlock &&
    <TypeSwitcher content={<Button label={isActiveBlockForm ? 'Change block type' : 'Add new block'} outlined />}
                  onChange={handleChangeType} />}
    {isActiveBlockForm && type !== 'LINK' &&
    <BlockForm type={(currentBlock?.type ?? type) as Exclude<MediaType, 'LINK'>} onFinish={handleFinish}
               initialData={currentBlock} />
    }
    {!isActiveBlockForm && blocks.sort(compareBlocks).map((block) =>
      <div className='p-2'>
        <BlockView block={block}>
          {<div className='basis-4'>
            <BlockControls block={block}
                           isFirst={block.order === 0}
                           isLast={block.order === blocks.length - 1}
                           onEdit={handleEdit} />
          </div>}
        </BlockView>
      </div>)
    }
  </div>;
};
;
