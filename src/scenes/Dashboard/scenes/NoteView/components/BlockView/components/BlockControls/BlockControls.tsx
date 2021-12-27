import { Block, VoidWithArgsFn } from 'types';
import { Button, Icon } from 'components';
import React from 'react';
import { move, remove, removeAllByNoteId, reorder } from 'store/actions/block';
import { remove as removeNote } from 'store/actions/note';
import { useDispatch } from 'react-redux';

type ControlsProps = {
  block: Block;
  isFirst: boolean;
  isLast: boolean;
  onEdit: VoidWithArgsFn;
}

export const BlockControls = ({ block, isFirst, isLast, onEdit }: ControlsProps) => {
  const dispatch = useDispatch();

  const handleMove = (block: Block, up: boolean) => {
    dispatch(move(block.id, up));
  };

  const handleDelete = (block: Block) => {
    dispatch(remove(block.id));
    if (block.type === 'LINK') {
      dispatch(removeNote(block.content));
      dispatch(removeAllByNoteId(block.content));
    }
    dispatch(reorder(block.noteId));
  };


  const handleMoveUp = (block: Block) => {
    handleMove(block, true);
  };

  const handleMoveDown = (block: Block) => {
    handleMove(block, false);
  };

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
