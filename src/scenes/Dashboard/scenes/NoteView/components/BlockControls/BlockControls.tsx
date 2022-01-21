import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Block, RootState, VoidFn } from 'types';
import { Button, Icon } from 'components';
import { FLOWS } from 'constants/flows';
import {
  removeNote,
  moveBlock,
  removeBlock,
  removeAllBlocksByNoteId,
  reorderBlocks,
  activateFlow, setCurrentBlock,
} from 'store/actions';
import { blockSelectors } from 'store/selectors';

type ControlsProps = {
  block: Block;
}

export const BlockControls: FC<ControlsProps> = ({ block }) => {
  const blocksLength = useSelector<RootState, Block[]>(blockSelectors.allByNoteId(block.noteId)).length;
  const dispatch = useDispatch();

  const handleMove = useCallback((up: boolean) => {
    dispatch(moveBlock(block.id, up));
  }, [dispatch]);

  const handleDelete = useCallback(() => {
    dispatch(removeBlock(block.id));
    if (block.type === 'LINK') {
      dispatch(removeNote(block.content));
      dispatch(removeAllBlocksByNoteId(block.content));
    }
    dispatch(reorderBlocks(block.noteId));
  }, [dispatch]);


  const handleMoveUp = useCallback(() => {
    handleMove(true);
  }, [handleMove]);

  const handleMoveDown = useCallback(() => {
    handleMove(false);
  }, [handleMove]);

  const handleEdit = useCallback(() => {
    dispatch(activateFlow(FLOWS.EDIT_BLOCK));
    dispatch(setCurrentBlock(block.id));
  }, []);

  return <div>
    {!(block.order === 0) &&
    <Button onClick={handleMoveUp}>{<Icon type='UP' />}</Button>
    }
    {!(block.order === blocksLength - 1) &&
    <Button onClick={handleMoveDown}>{<Icon type='DOWN' />}</Button>
    }
    <Button onClick={handleEdit}>{<Icon type='EDIT' />}</Button>
    <Button onClick={handleDelete}>{<Icon type='DELETE' />}</Button>
  </div>;
};
