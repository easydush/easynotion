import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cuid from 'cuid';
import { BlockView } from './components';
import { Block, CREATE_SUBNOTE, MediaType, Note, RootState } from 'types';
import { BlockForm } from 'forms/BlockForm';
import { TypeSwitcher } from './components/TypeSwitcher/TypeSwitcher';
import { Button, Icon } from 'components';
import { create, remove, reorder, update } from 'store/actions/block';
import { remove as removeNote } from 'store/actions/note';
import { compareBlocks } from 'tools/blocks';
import { activate } from 'store/actions/ui';

type NoteProps = {
  noteId: Note['id'];
}

export const NoteView = ({ noteId }: NoteProps) => {
  const blocks = useSelector<RootState, Block[]>((state) => state.block.blocks.filter((item) => item.noteId === noteId));

  const dispatch = useDispatch();

  const [type, setType] = useState('TEXT');
  const [isActiveBlockForm, setActive] = useState(false);
  const [currentBlock, setBlock] = useState<Block>();

  useEffect(() => {
    if (type === 'LINK') {
      hideBlockForm();
      dispatch(activate(CREATE_SUBNOTE));
    }
  }, [type, dispatch]);

  const showBlockForm = () => setActive(true);
  const hideBlockForm = () => setActive(false);

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

  const handleMove = (block: Block, up: boolean) => {
    const newOrder = up ? block.order - 1 : block.order + 1;
    const nearbyBlock = blocks.find(block => block.order === newOrder);

    if (nearbyBlock) {
      dispatch(update({
        ...nearbyBlock,
        order: block.order,
      }));

      dispatch(update({
        ...block,
        order: newOrder,
      }));
    }
  };


  const handleDelete = (block: Block) => {
    dispatch(remove(block.id));
    if (block.type === 'LINK') dispatch(removeNote(block.content));
    dispatch(reorder(block.noteId));
  };

  const handleEdit = (block: Block) => {
    setBlock(block);
    showBlockForm();
  };

  const handleAdd = () => {
    setBlock(undefined);
    showBlockForm();
  };

  const handleMoveUp = (block: Block) => {
    handleMove(block, true);
  };

  const handleMoveDown = (block: Block) => {
    handleMove(block, false);
  };

  return <div className='grid grid-cols-1 gap-4 p-2'>
    {!currentBlock &&
    <TypeSwitcher content={<Button label={isActiveBlockForm ? 'Change block type' : 'Add new block'} outlined />}
                  onChange={setType} onHover={handleAdd} />}
    {isActiveBlockForm && type !== 'LINK' &&
    <BlockForm type={(currentBlock?.type ?? type) as Exclude<MediaType, 'LINK'>} onFinish={handleFinish}
               initialData={currentBlock} />
    }
    {!isActiveBlockForm && blocks.sort(compareBlocks).map((block) =>
      <div className='p-2'>
        <BlockView block={block}>
          <div className='grid grid-cols-1'>
            {block.order !== 0 &&
            <Button onClick={() => handleMoveUp(block)}>{<Icon type='UP' />}</Button>
            }
            {block.order < blocks.length - 1 &&
            <Button onClick={() => handleMoveDown(block)}>{<Icon type='DOWN' />}</Button>
            }
            <Button onClick={() => handleEdit(block)}>{<Icon type='EDIT' />}</Button>
            <Button onClick={() => handleDelete(block)}>{<Icon type='DELETE' />}</Button>
          </div>
        </BlockView>

      </div>)
    }
  </div>;
};
;
