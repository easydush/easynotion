import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Block, RootState } from 'types';
import { FLOWS } from 'constants/flows';
import { uiSelectors } from 'store/selectors';
import { Content } from '../Content';
import { BlockControls } from '../BlockControls';
import { BlockEdit } from '../BlockEdit';
import styles from './BlockView.module.scss';

type BlockProps = {
  block: Block;
}

export const BlockView: FC<BlockProps> = ({ block }) => {
  const activeFlows = useSelector<RootState, FLOWS[]>(uiSelectors.all);
  const isActive = activeFlows.includes(FLOWS.EDIT_BLOCK);

  return <div
    className={`${styles.block} flex flex-row `}>
    <BlockControls block={block} />
    {isActive ?
      <>
        {block.type !== 'LINK' &&
        <BlockEdit block={block} type={block.type} noteId={block.noteId} />
        }
      </> :
      <Content block={block} />
    }
  </div>;
};
