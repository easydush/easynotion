import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Block } from 'types';
import { Button, Icon } from 'components';
import {
  removeNote,
  moveBlock,
  removeBlock,
  removeAllBlocksByNoteId,
  reorderBlocks,
} from 'store/actions';

type ControlsProps = {
  block: Block;
  isVisible: boolean;
  blocksLength: number;
};

export const BlockControls: FC<ControlsProps> = ({
  block,
  isVisible,
  blocksLength,
}) => {
  const dispatch = useDispatch();

  const handleMove = useCallback(
    (up: boolean) => {
      dispatch(moveBlock(block.id, up));
    },
    [dispatch, block],
  );

  const handleDelete = useCallback(() => {
    dispatch(removeBlock(block.id));
    if (block.type === 'LINK') {
      dispatch(removeNote(block.content));
      dispatch(removeAllBlocksByNoteId(block.content));
    }
    dispatch(reorderBlocks(block.noteId));
  }, [dispatch, block]);

  const handleMoveUp = useCallback(() => {
    handleMove(true);
  }, [handleMove]);

  const handleMoveDown = useCallback(() => {
    handleMove(false);
  }, [handleMove]);

  return (
    <div className={`grid grid-cols-3 ml-1 ${!isVisible && 'invisible'}`}>
      <Button onClick={handleDelete} title="Delete">
        {<Icon type="DELETE" />}
      </Button>{' '}
      {!(block.order === 0) && (
        <Button onClick={handleMoveUp} title="Move up">
          {<Icon type="UP" />}
        </Button>
      )}
      {!(block.order === blocksLength - 1) && (
        <Button onClick={handleMoveDown} title="Move down">
          {<Icon type="DOWN" />}
        </Button>
      )}
    </div>
  );
};
