import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Block, VoidFn } from 'types';
import { Button, Icon } from 'components';
import { removeNote, moveBlock, removeBlock, removeAllBlocksByNoteId, reorderBlocks } from 'store/actions';

type ControlsProps = {
  block: Block;
  isFirst: boolean;
  isLast: boolean;
  onEdit: VoidFn;
}

export const BlockControls: FC<ControlsProps> = ({ block, isFirst, isLast, onEdit }) => {
  const dispatch = useDispatch();

  const handleMove =  useCallback((block: Block, up: boolean) => {
    dispatch(moveBlock(block.id, up));
  }, [dispatch]);

  const handleDelete =  useCallback((block: Block) => {
    dispatch(removeBlock(block.id));
    if (block.type === 'LINK') {
      dispatch(removeNote(block.content));
      dispatch(removeAllBlocksByNoteId(block.content));
    }
    dispatch(reorderBlocks(block.noteId));
  }, [dispatch]);


  const handleMoveUp =  useCallback((block: Block) => {
    handleMove(block, true);
  }, [handleMove]);

  const handleMoveDown =  useCallback((block: Block) => {
    handleMove(block, false);
  }, [handleMove]);

  return <div className='grid grid-cols-1'>
    {!isFirst &&
    <Button onClick={() => handleMoveUp(block)}>{<Icon type='UP' />}</Button>
    }
    {!isLast &&
    <Button onClick={() => handleMoveDown(block)}>{<Icon type='DOWN' />}</Button>
    }
    <Button onClick={() => onEdit(block)}>{<Icon type='EDIT' />}</Button>
    <Button onClick={() => handleDelete(block)}>{<Icon type='DELETE' />}</Button>
  </div>;
};
