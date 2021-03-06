import React, { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Block, RootState } from 'types';
import { FLOWS } from 'constants/flows';
import { uiSelectors } from 'store/selectors';
import { Content } from '../Content';
import { BlockControls } from '../BlockControls';
import { BlockEdit } from '../BlockEdit';
import { activateFlow, setCurrentBlock } from 'store/actions';

type BlockProps = {
  block: Block;
  isCurrent: boolean;
  blocksLength: number;
};

export const BlockView: FC<BlockProps> = ({
                                            block,
                                            isCurrent,
                                            blocksLength,
                                          }) => {
  const dispatch = useDispatch();
  const activeFlows = useSelector<RootState, FLOWS[]>(uiSelectors.all);
  const isControlsActive = activeFlows.includes(FLOWS.SHOW_CONTROLS);
  const isActive =
    activeFlows.includes(FLOWS.EDIT_BLOCK) && isCurrent && isControlsActive;

  const [isVisible, setVisible] = useState(false);
  const showControls = useCallback(() => {
    setVisible(true);
  }, []);

  const hideControls = useCallback(() => {
    setVisible(false);
  }, []);

  const handleEdit = useCallback(() => {
    dispatch(activateFlow(FLOWS.EDIT_BLOCK));
    dispatch(setCurrentBlock(block.id));
  }, [block, dispatch]);

  return (
    <div
      className='flex flex-row'
      onMouseEnter={showControls}
      onMouseLeave={hideControls}
      onDoubleClick={handleEdit}
      onClick={handleEdit}
    >
      <BlockControls
        block={block}
        isVisible={isControlsActive && isVisible}
        blocksLength={blocksLength}
      />
      {isActive ? (
        <>
          {block.type !== 'LINK' && (
            <BlockEdit block={block} type={block.type} noteId={block.noteId} />
          )}
        </>
      ) : (
        <Content block={block} />
      )}
    </div>
  );
};
