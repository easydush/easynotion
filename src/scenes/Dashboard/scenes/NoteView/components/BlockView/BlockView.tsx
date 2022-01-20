import { FC, ReactElement } from 'react';
import { Block } from 'types';
import { Content } from '../Content';

import styles from './BlockView.module.scss';

type BlockProps = {
  block: Block;
  children: ReactElement;
  isEdit: boolean;
}

export const BlockView: FC<BlockProps> = ({ block, isEdit,  children }) => {
  return <div
    className={`${styles.block} flex flex-row `}>
    {children}
    {isEdit? <></>: <Content block={block} />}
  </div>;
;
};
