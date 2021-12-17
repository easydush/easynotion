import { Block } from 'types';
import { ReactElement } from 'react';

import styles from './BlockView.module.scss';

type BlockProps = {
  block: Block;
  children: ReactElement;
}

export const BlockView = ({ block, children }: BlockProps) => {
  return <div className={`${styles.block} rounded-lg outline-dashed outline-offset-4 outline-cyan-100 bg-teal-50 flex flex-row `}>
    <div className='basis-96 m-4 truncate' dangerouslySetInnerHTML={{ __html: block.content }} />
    <div className='basis-4'>{children}</div>
  </div>;
};
