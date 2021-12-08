import { Block } from 'types';

import styles from './BlockView.module.scss'

type BlockProps = {
    block: Block;
}

export const BlockView = ({block}: BlockProps) => {
  return <div className={styles.block} dangerouslySetInnerHTML={{__html: block.content}} />
};
